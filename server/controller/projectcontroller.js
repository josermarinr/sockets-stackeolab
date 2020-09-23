import Project from '../models/dbProjects.js'
import Tasks from '../models/dbTasks.js'
import User from '../models/dbUsers.js'

let ProjectController = {
    find: async (req, res) =>{
        let found = await Project.find({id: req.params.id})
        res.json(found)
    },

    all: async (req, res) =>{
        let allProject = await Project.find()
        res.json(allProject)
    },

    create: async (req, res) =>{
        let newProject = new Project(req.body)
        let saveProject = await newProject.save()
        res.json(saveProject)
    },

    getAllTasks: async (req, res) =>{
        let foundProject = await Project.find({id: req.params.id})
                                .populate("task");
        res.json(foundProject)
    },

    getAllUser: async (req, res) =>{
        let foundProject = await Project.find({id: req.params.id})
                                .populate("users");
        res.json(foundProject)
    },

}

export default ProjectController;