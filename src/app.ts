// ===================================================================
// ejobs it LMS - Main Application File
// Express app setup with all routes and middleware
// মূল এপ্লিকেশন ফাইল - সব routes এবং middleware এখানে connect হয়েছে
// ===================================================================

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';

// ==================== Middleware Imports ====================
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFoundHandler from './app/middlewares/notFoundHandler';
import config from './app/config';

// ==================== Route Imports ====================
import { AuthRoutes } from './app/modules/auth/auth.routes';
import { UserRoutes } from './app/modules/user/user.routes';
import { uploadRoutes } from './app/modules/upload/upload.routes';
import { NotificationRoutes } from './app/modules/notification/notification.module';
import { FlowRoutes } from './app/modules/flow/flow.routes';
import { SpreadsheetRoutes } from './app/modules/spreadsheet/spreadsheet.route';

import mongoose from 'mongoose';

// ==================== App Initialization ====================
const app: Application = express();

// Database connection for Serverless environments (Vercel)
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(config.database_url);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

// Ensure DB is connected on every request in serverless
app.use(async (req: Request, res: Response, next) => {
  await connectDB();
  next();
});

// ==================== Global Middlewares ====================
// JSON body parser
app.use(express.json({ limit: '10mb' }));

// URL encoded parser
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser (for refresh token)
app.use(cookieParser());

// CORS configuration
const allowedOrigins = [
  config.frontend_url,
  'http://localhost:3000',
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || config.env === 'development') {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ==================== API Routes ====================
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: '🚀 Chatbot Flow Builder API is running!',
  });
});

app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/notifications', NotificationRoutes);
app.use('/api/flows', FlowRoutes);
app.use('/api/spreadsheet', SpreadsheetRoutes);

// ==================== Error Handling ====================
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;


export default app;
