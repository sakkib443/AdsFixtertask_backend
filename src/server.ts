import mongoose from 'mongoose';
import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';
import app from './app';
import config from './app/config';
import { Flow } from './app/modules/flow/flow.model';
import { executeFlowStep } from './app/utils/flowExecutor';

// ==================== Uncaught Exception Handler ====================
process.on('uncaughtException', (error) => {
  console.error('💥 UNCAUGHT EXCEPTION! Shutting down...');
  console.error('Error:', error.message);
  process.exit(1);
});

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url);
    console.log('✅ MongoDB connected successfully!');

    const httpServer = new HttpServer(app);
    const io = new Server(httpServer, {
      cors: {
        origin: '*', // For development, adjust for production
      },
    });

    // ==================== Socket.io Logic ====================
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);

      const runFlow = async (nodes: any[], edges: any[], startNodeId: string | null, input?: string) => {
        let currentNode = executeFlowStep(nodes, edges, startNodeId, input);

        while (currentNode) {
          socket.emit('bot_message', { node: currentNode });

          // If it's an input node, stop and wait for user
          if (currentNode.type === 'input') break;
          // If it's an end node, stop
          if (currentNode.type === 'end') break;

          // If it's a delay node, wait
          if (currentNode.type === 'delay') {
            const ms = (currentNode.data?.delay || 2) * 1000;
            await new Promise(resolve => setTimeout(resolve, ms));
          }

          // Move to next node
          const nextNode = executeFlowStep(nodes, edges, currentNode.id);
          if (nextNode?.id === currentNode.id) break; // Prevent infinite loops
          currentNode = nextNode;
        }
      };

      socket.on('start_flow', async (data) => {
        const { flowId, nodes, edges } = data;
        let flowNodes = nodes;
        let flowEdges = edges;

        if (flowId && !nodes) {
          const flow = await Flow.findById(flowId);
          if (flow) {
            flowNodes = flow.nodes;
            flowEdges = flow.edges;
          }
        }

        if (flowNodes) {
          runFlow(flowNodes, flowEdges, null);
        }
      });

      socket.on('user_message', async (data) => {
        const { flowId, currentNodeId, message, nodes, edges } = data;
        let flowNodes = nodes;
        let flowEdges = edges;

        if (flowId && !nodes) {
          const flow = await Flow.findById(flowId);
          if (flow) {
            flowNodes = flow.nodes;
            flowEdges = flow.edges;
          }
        }

        if (flowNodes) {
          runFlow(flowNodes, flowEdges, currentNodeId, message);
        }
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });

    httpServer.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
    });

    process.on('unhandledRejection', (error: Error) => {
      console.error('💥 UNHANDLED REJECTION! Shutting down...');
      httpServer.close(() => {
        process.exit(1);
      });
    });

  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

bootstrap();

