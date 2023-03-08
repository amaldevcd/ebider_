import express from 'express';
const authRoutes = express.Router();

import { authenticateUser } from '../middleware/authentication.js';

import{
  register,
  login,
  logout,
//   verifyEmail,
//   forgotPassword,
//   resetPassword,
} from '../controllers/authController.js';

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.delete('/logout', authenticateUser, logout);
// router.post('/verify-email', verifyEmail);
// router.post('/reset-password', resetPassword);
// router.post('/forgot-password', forgotPassword);

export default authRoutes;
