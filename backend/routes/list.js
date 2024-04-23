const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const list = require("../models/list");


//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update

router.put("/updateTask/:id", async (req, res) => {
    try {
      const { title, body, email } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
       const list = await List.findByIdAndUpdate(req.params.id,{title,body});
        list.save().then(()=>res.status(200).json({message: "Task Updated"}))
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error adding task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //Delete 
  router.delete("/deleteTask/:id", async (req,res)=>{
    try {
      const { email } = req.body || req.params;
      const existingUser = await User.findOneAndUpdate({ email },{$pull:{list:req.params.id}});//Aggregation function used
      if (existingUser) {
       await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message: "Task Deleted"}))
      } 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  })


  //getTasks

  router.get("/getTasks/:id", async (req,res)=>{
    try {
      const list = await List.find({user:req.params.id}).sort({createdAt: -1})//here we are sorting in reverse direction i.e last becomes first.
      
      if(list.length != 0 ){
        res.status(200).json({list})
      }else{
        res.status(200).json({message:"No Task"})
      }
    } catch (error) {
      res.status(404).json({ error: "User not found" });
    }
  })


  //

module.exports = router;

