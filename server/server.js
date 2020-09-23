import express  from 'express'
import mongoose from 'mongoose'
import socket from 'socket.io'
import cors from 'cors'

import ENV from './environement/evironement.js'
import ProjectController from './controller/projectcontroller.js'
import TasksController from './controller/taskscontroller.js'
import UserController from './controller/userscontroller.js'


//app config
const app = express()
const port = process.env.PORT || ENV.PORT;


//middleware
app.use(express.json())
app.use(cors())


const connection_url = ENV.DB
mongoose.connect(connection_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection


db.once('open', () => {
    console.log('DB connected')
                                        //take care with s in final name of collection
    const prjCollection = db.collection('project')
    const changeStream = prjCollection.watch()



})


//api routes

app.get('/', (req, res)=> res.status(200).send('hello world'))


/// other routes

app.get('/api/v1/projects', ProjectController.all);

app.post('/api/v1/projects/new', ProjectController.create);

app.get('/api/v1/projects/:id', ProjectController.find); //here we'ill work with namespace's sockets

app.get('/api/v1/projects/:id/tasks', ProjectController.getAllTasks);

app.get('/api/v1/projects/:id/users', ProjectController.getAllUser);

//new tasks

app.post('/projects/:id/newtasks', TasksController.create);

//new user
app.post('/projects/:id/users/create', UserController.create);






//listen

app.listen(port,  () => console.log(`Listening on localhost: ${port}`))