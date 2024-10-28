import express from 'express'
import {getStudent, getStudents} from "../controller/studentController.js"

const router = express.Router();

router.get("/", getStudent)
router.get("/:id", getStudents)

export default router