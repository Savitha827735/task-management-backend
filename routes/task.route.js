import express from'express'
import { CreateTask, deleteTask, getallTask, showTask, updateTask } from '../controllers/Task.controller.js'

const Taskrouter = express.Router()

Taskrouter.post('/create-task',CreateTask)
/*

'/create-task': The endpoint that the frontend hits using fetch.

CreateTask: The controller function that gets called when a POST request hits this route.

Inside CreateTask: This function reads data from req.body and stores it using your TaskModel.
-----------------------------------------------------------------
| 🔹 Step                             | 🧠 Purpose                                                           |
| ----------------------------------- | -------------------------------------------------------------------- |
| `fetch()`                           | Sends the task data from the React form to the backend API over HTTP |
| Backend route (`/task/create-task`) | Receives that data and passes it to the controller                   |
| Controller                          | Saves the data using Mongoose into MongoDB                           |


*/
Taskrouter.get('/get-all-task',getallTask)
Taskrouter.get('/show-task/:taskid',showTask)
Taskrouter.put('/update-task/:taskid',updateTask)
Taskrouter.delete('/delete-task/:taskid',deleteTask)

export default Taskrouter

/*
🧾 User fills form in React
   ↓
✅ React Form Submit → calls handleSubmit()
   ↓
🌐 fetch() sends a POST request to /task/create-task
   ↓
📡 Express Backend Route handles the request (e.g., taskRoutes.js)
   ↓
🧠 Controller Function runs (e.g., createTask)
   ↓
📦 Mongoose Model (TaskModel) used to save data
   ↓
🗄️ MongoDB stores the document in the 'tasks' collection











*/