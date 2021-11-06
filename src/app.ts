import express from 'express';
import cors from 'cors';

const initialize = () => {
  const app = express();

  app.use(express.json({ type: ['text/plain', 'application/json'], limit: '5mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin: process?.env?.CORS_ORIGINS ? JSON.parse(process?.env?.CORS_ORIGINS) : '',
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true
  }));
  app.options('*', cors() as any);

  return app;
};
export { initialize };