const Consultation = require('../models/consultation');

// Get consultation history for a student
exports.getStudentHistory = async (req, res) => {
  try {
    const { studentId } = req.params;
    const history = await Consultation.find({ studentId });
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};

// Get consultation history for a faculty
exports.getFacultyHistory = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const history = await Consultation.find({ facultyId });
    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};
