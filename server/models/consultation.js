const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['booked', 'completed', 'canceled'],
    default: 'booked',
  },
  meetingLink: String, // Optional for online consultations
}, {
  timestamps: true,
});

module.exports = mongoose.model('Consultation', consultationSchema);
