import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
    id: String,
    name: String,
    timestamp: {type:String, default: Date.now},
    done: {type:Boolean, default: false},
    project: {
        type: Schema.Types.ObjectId,
        ref: "project"
    }

})

//collection
export default mongoose.model('task', taskSchema)