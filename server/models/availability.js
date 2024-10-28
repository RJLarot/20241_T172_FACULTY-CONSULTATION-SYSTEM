const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  availableSlots: [
    {
      day: { type: String, required: true },  // Example: 'Monday'
      time: { type: String, required: true }, // Example: '10:00-11:00'
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Availability', availabilitySchema);
