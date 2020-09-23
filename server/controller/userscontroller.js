import User from '../models/dbUsers.js'
import Project from '../models/dbProjects.js'

let UserController = {
    allTasks: async (req, res) =>{
        let foundProject = await Project.find({id: req.params.id})
                                .populate("users");
        res.json(foundProject)
    },

    create: async (req, res) =>{
        let found = await Project.find({id: req.params.id})
        let newTasks = new User(req.body)
        let saveTasks = await newTasks.save()
        res.json(saveTasks)
    },


}


export default UserController