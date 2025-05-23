import express from 'express';
import { body } from 'express-validator';
import { createService, getAllServices, getServiceById, updateService, deleteService } from '../controllers/serviceController.js';
import { isAdmin, protect } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateService = [
  body('title').notEmpty().trim(),
  body('description').notEmpty(),
  body('category').isIn(['Cleaning', 'Beauty & Wellness', 'Healthcare', 'Home Maintenance']),
  body('price.original').isNumeric(),
  body('price.discounted').isNumeric(),
  body('duration').notEmpty(),
  body('image').notEmpty().isURL()
];

// Routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', protect, isAdmin, validateService, createService);
router.put('/:id', protect, isAdmin, validateService, updateService);
router.delete('/:id', protect, isAdmin, deleteService);

export default router;