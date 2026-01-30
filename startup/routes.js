import cors from 'cors';
import express from 'express';
import auth from '../src/routes/auth.js';
import productRoutes from '../src/routes/productRoutes.js';
import register from '../src/routes/register.js';

export default function (app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/products', productRoutes);
  app.use('/api/register', register);
  app.use('/api/login', auth);
}
