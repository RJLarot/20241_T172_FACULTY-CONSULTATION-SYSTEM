const Availability = require('../models/availability');

// Set availability for a faculty member
exports.setAvailability = async (req, res) => {
  try {
    const { facultyId, availableSlots } = req.body; // availableSlots: [{day: 'Monday', time: '10:00-11:00'}, ...]
    const availability = await Availability.create({ facultyId, availableSlots });
    res.status(201).json({ message: 'Availability set', availability });
  } catch (error) {
    res.status(500).json({ error: 'Failed to set availability' });
  }
};

// Get availability for a specific faculty
exports.getAvailability = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const availability = await Availability.findOne({ facultyId });
    res.status(200).json({ availability });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve availability' });
  }
};
