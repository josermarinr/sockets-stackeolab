import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    id: String,
    name: String,
    task: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
    

})

//collection
export default mongoose.model('project', projectSchema)