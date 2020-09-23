import Tasks from '../models/dbTasks.js'
import Project from '../models/dbProjects.js'

let TasksController = {
    allTasks: async (req, res) =>{
        let foundProject = await Project.find({id: req.params.id})
                                .populate("tasks");
        res.json(foundProject)
    },

    create: async (req, res) =>{
        let newTasks = new Tasks(req.body)
   
        await newTasks.save()
            .then((result) => {
                Project.findOne({ id: req.params.id }, (err, pro) => {
                    if (pro) {
                        // The below two lines will add the newly saved review's 
                        // ObjectID to the the User's reviews array field
                        pro.task.push(newTasks);
                        pro.save();
                        
                       
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
        
            res.json(newTasks);
    },


    delete: async (req, res) =>{
        let newTasks = new Tasks().deleteOne({id: req.param.id})
    }


}

export default TasksController