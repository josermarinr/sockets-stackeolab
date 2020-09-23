import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: "project"
    }

})

//collection
export default mongoose.model('users', UserSchema)