const mongoose =  require("mongoose")
const taskSchema = new mongoose.Schema({
    title:{type:String},
    status: Boolean,
    date:{type:Date, default:Date.now}
});
exports.Task = mongoose.model('Task',taskSchema);