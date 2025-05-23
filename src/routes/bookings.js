import express from 'express';
import { body } from 'express-validator';
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from '../controllers/bookingController.js';
import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateBooking = [
  body('service').notEmpty().isMongoId(),
  body('bookingDate').notEmpty().isISO8601(),
  body('address').notEmpty(),
  body('totalAmount').isNumeric()
];

// Routes
router.post('/', protect, validateBooking, createBooking);
router.get('/', protect, getAllBookings); // Admin gets all, users get their own
router.get('/:id', protect, getBookingById);
router.put('/:id', protect, updateBooking);
router.delete('/:id', protect, deleteBooking);

export default router;