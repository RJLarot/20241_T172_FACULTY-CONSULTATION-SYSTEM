const Consultation = require('../models/consultation');

// Book a consultation
exports.bookConsultation = async (req, res) => {
  try {
    const { studentId, facultyId, date, time, reason } = req.body;
    const consultation = await Consultation.create({ studentId, facultyId, date, time, reason });
    res.status(201).json({ message: 'Consultation booked', consultation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book consultation' });
  }
};

// Cancel a consultation
exports.cancelConsultation = async (req, res) => {
  try {
    const { consultationId } = req.params;
    await Consultation.findByIdAndDelete(consultationId);
    res.status(200).json({ message: 'Consultation canceled' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to cancel consultation' });
  }
};

// Reschedule a consultation
exports.rescheduleConsultation = async (req, res) => {
  try {
    const { consultationId } = req.params;
    const { newDate, newTime } = req.body;
    const updatedConsultation = await Consultation.findByIdAndUpdate(consultationId, { date: newDate, time: newTime }, { new: true });
    res.status(200).json({ message: 'Consultation rescheduled', consultation: updatedConsultation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reschedule consultation' });
  }
};

// Get consultations for a specific student
exports.getStudentConsultations = async (req, res) => {
  try {
    const { studentId } = req.params;
    const consultations = await Consultation.find({ studentId });
    res.status(200).json({ consultations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve consultations' });
  }
};

// Get consultations for a specific faculty
exports.getFacultyConsultations = async (req, res) => {
  try {
    const { facultyId } = req.params;
    const consultations = await Consultation.find({ facultyId });
    res.status(200).json({ consultations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve consultations' });
  }
};
