const express = require("express")
const studentRoutes = express.Router()

const {getAll} = require("../controller/student.controller")


// include all your student routes here.
// Make naming standard
//do not include term "student" in all of your routes here for maintainability


// Retrieve all consultations
studentRoutes.get("/", getAll);
// Create a new consultation
studentRoutes.post("/", createConsultation);
// Retrieve a specific consultation by ID
studentRoutes.get("/:id", getConsultationById);
// Update a specific consultation by ID
studentRoutes.put("/:id", updateConsultation);
// Delete a specific consultation by ID
studentRoutes.delete("/:id", deleteConsultation);

studentRoutes.get("/", getAll)


module.exports = studentRoutes