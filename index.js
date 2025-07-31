import express from 'express'//This imports the Express framework. It's a fast and minimal web framework for Node.js used to build web applications and APIs.

import mongoose from 'mongoose'//This imports Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js. It helps you interact with MongoDB using JavaScript objects.

import dotenv from 'dotenv'// dotenv is used to load environment variables from a .env file into process.env.

import cors from 'cors'//This imports CORS (Cross-Origin Resource Sharing) middleware. It allows your server to accept requests from other origins (like a frontend hosted on another domain or port).
import Taskrouter from './routes/task.route.js'

dotenv.config()//This loads environment variables from the .env file into process.env, making them available throughout your application.

//env is used to avoid hard coding

const PORT =process.env.PORT//This retrieves the PORT value from the environment variables. It tells the server which port it should listen on (e.g., 3000, 5000, etc.).


const app =express()//This creates an instance of an Express application. app will be used to define routes, middleware, and handle server logic.
app.use(express.json())
//Please parse incoming JSON, and put it in req.body so I can use it easily.”
/**
express.json() is middleware because it intercepts requests,

It processes the request body before your route handler runs,

It parses JSON and attaches the parsed data to req.body,

Then calls next() to pass control forward.
----------------------------------------------------------------
* express.json() is a built-in middleware function in Express.

It intercepts incoming requests, looks at the request body,

If the Content-Type is JSON, it reads the raw data stream,

Then parses it into a JavaScript object,

And attaches that object to req.body.

After it finishes, it calls next() so the request continues to the next middleware or route handler.
 */
app.use(cors({
    origin:"http://localhost:5173"
}))
/*
origin: "http://localhost:5173" → only this origin is allowed to access your API

The browser will not block fetch requests from your frontend
*/
app.use('/api/task',Taskrouter)
//app.use('/api/task', Taskrouter)
// Adds a base path of /api/task to all routes inside Taskrouter

mongoose.connect(process.env.MONGODB_CONN).then(()=>{
    console.log("Database connected")
}).catch(((err)=>{
    console.log("Database connection failed",err)
}))

//middleware is a func that works between req and res
/**
 * It sits between the request and the response, and it can:

Modify the request or response

End the request-response cycle

Call next() to pass control to the next middleware

 */
app.listen(PORT,()=>{
    console.log("server running on port",PORT)
})
