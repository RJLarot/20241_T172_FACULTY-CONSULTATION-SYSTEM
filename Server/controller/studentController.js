import studentModel from "../model/student.js";
import Student from "../model/student.js"

const getStudents = async (req, res)=> {
    try{
        const student =await Student.find();
        res.status(200).json(students)
    }catch (error){
        console.log(error);
        
    }
}
const getStudent = async (req, res)=> {
    try{
        const student =await studentModel.find(id.req.params);
        res.status(200).json(students)
    }catch (error){
        console.log(error);
        
    }
}
export {getStudent, getStudents};