const Task = require("../models/Task");
const User = require("../models/User");

exports.Task = async (req,res) => {
    try{
  const {title,description,status}=req.body;
  const extitle = await Users.findOne({ title });
    if (extitle) {
      return res.status(400).send("title already exisiting");
    }
  const task = await Task.create({
    title,
    description,
    status,
  });
    res.status(200).json({message:"Task Created Successfully"});
    } catch (err){
        res.status(500).json(err);
    }
};