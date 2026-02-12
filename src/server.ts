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
          const firstNode = executeFlowStep(flowNodes, flowEdges, null);
          socket.emit('bot_message', { node: firstNode });
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
          const nextNode = executeFlowStep(flowNodes, flowEdges, currentNodeId, message);
          socket.emit('bot_message', { node: nextNode });
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

