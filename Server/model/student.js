import mongoose from "mongoose"
const {Schema} = mongoose

const studentSchema = new Schema({
    Name:{
        type:String,
        required: true
    },
    Section: {
        type:String,
        required:true
    },
    Gender: {
        type:String,
        required:true
    },
    Hobby: {
        type:String
      
    },
});

const studentModel = mongoose.model("students ", studentSchema);
export default studentModel;
