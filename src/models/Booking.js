import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  bookingDate: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  additionalInfo: String
}, {
  timestamps: true
});

export default mongoose.model('Booking', bookingSchema);