import mongoose from "mongoose";
import {Schema} from "mongoose";
//A collection is a group of MongoDB documents (records) that are stored together.
//A model is a JavaScript object created using a schema and linked to a specific MongoDB collection.
const TaskSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'Pending',
        enum:['Pending','Running','Completed','Failed']
    }
},{timestamps :true})
//newTask has all the methods and properties defined in TaskSchema and added by Mongoose (like .save(), .validate(), etc.).

//You can treat newTask as a MongoDB document in memory until you .save() it.


const TaskModel = new mongoose.model('Task',TaskSchema,'tasks')
/**
 * 📦 Mongoose Model (TaskModel) used to save data
   ↓
🗄️ MongoDB stores the document in the 'tasks' collection
 * 
 *Creates a Mongoose model named 'Task' using the TaskSchema, and links it to the MongoDB collection named 'tasks'.

'Task': The model name.

TaskSchema: The schema to use.

'tasks': The name of the actual MongoDB collection.
 */
export default TaskModel