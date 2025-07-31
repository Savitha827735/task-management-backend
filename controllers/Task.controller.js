import TaskModel from "../models/Task.model.js"
/**
 req: The incoming request object
Contains details like the method (GET, POST, etc.), URL, headers, body, etc.

res: The response object
 */
export const CreateTask = async(req,res)=>{
    try{
        const {title,description}=req.body
        const newTask = new TaskModel({
            title,description
        })
        await newTask.save()

        res.status(200).json({
            status:true,
            message:"Task created sucessfully"
        })
    }catch(err){
     res.status(500).json({
            status:true,
            message:"failed to create task"
        })
    }
}
export const getallTask = async(req,res)=>{    try{
        const taskdata = await TaskModel.find().sort({createdAt:-1}).lean().exec()
//.find() is a Mongoose method that:
//Fetches multiple documents from the MongoDB collection.
// if you leave it empty (find()), it fetches all documents.
//Returns an array of documents that match a given filter.


        res.status(200).json({
            status:true,
            message:"Showing Task",
            taskdata
        })
    }catch(err){
     res.status(500).json({
            status:false,
            message:"failed to show tasks"
        })
    }}
export const showTask = async(req,res)=>{
    try{
    const {taskid}=req.params;//router.get("/task/:taskid", showTask);

     const taskdata = await TaskModel.findById(taskid).lean().exec()

        res.status(200).json({
            status:true,
            message:"Showing Task",
            taskdata
        })
    }catch(err){
     res.status(500).json({
            status:false,
            message:err.message
            
            
        })
    }
}

export const updateTask = async(req,res)=>{
try{
    const {taskid}=req.params;
    const {title,description,status}=req.body
    const taskdata = await TaskModel.findByIdAndUpdate(taskid,{title,description,status},
        {new:true})
        //returns the updated document

    

        res.status(200).json({
            status:true,
            message:"Updated Task",
            taskdata
        })
    }catch(err){
     res.status(500).json({
            status:false,
            message:"failed to update task"
        })
    }




}
export const deleteTask = async(req,res)=>{
try{
    const {taskid}=req.params;
    
    const taskdata = await TaskModel.findByIdAndDelete(taskid)

    

        res.status(200).json({
            status:true,
            message:"Deleted Task",
            taskdata
        })
    }catch(err){
     res.status(500).json({
            status:false,
            message:"failed to delete task"
        })
    }





}