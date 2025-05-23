import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Cleaning', 'Beauty & Wellness', 'Healthcare', 'Home Maintenance']
  },
  price: {
    original: {
      type: Number,
      required: true
    },
    discounted: {
      type: Number,
      required: true
    }
  },
  duration: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  professionals: [{
    type: String
  }],
  includes: [{
    type: String
  }],
  excludes: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Service', serviceSchema);