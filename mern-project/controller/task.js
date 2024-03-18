const model = require("../model/task");
const Task = model.Task;

exports.createTask = async(req,res)=>{
       
    const task = new Task(req.body);
    await task.save();
    res.json(req.body);
    }

exports.getAllTask = async(req,res)=>{
       const allproducts = await Task.find();
        res.status(200).json(allproducts);
}

exports.getTask =async(req,res)=>{
    const title = req.params.name;
    const result = await Task.findOne({title});
    res.status(200).json(result);
}

exports.replaceTask = async(req,res)=>{
    const title = req.params.name;
    const result = await Task.findOneAndReplace({title},{title:"title-changed"},{new:true})
    res.status(200).json(result);
}
  
exports.updateTask=async(req,res)=>{
    const title = req.params.title;
    const result = await Task.findOneAndUpdate({title},{title:"shopping"},{new:true})
    res.status(200).json(result);
}
// exports.updateTaskById=async(req,res)=>{
//     const id = req.params.id;
//     const result = await Task.findByIdAndUpdate({_id:id},{title:"shopping"},{new:true})
//     res.status(200).json(result);
// }


exports.deleteTask =async(req,res)=>{
        const title = req.params.name;
        const result = await Task.findOneAndDelete({title})
        res.status(200).json(result);
}