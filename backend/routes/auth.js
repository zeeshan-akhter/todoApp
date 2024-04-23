//now we are creating Api's for user sign up functionality
const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcryptjs")


//here we are creating signup functionality
router.post("/register", async (req,res)=>{
    try {
        //here we are requesting data from body itself
        const {email,username,password,profilePicture} = req.body; 

        //here we are telling database that whenever someone wll come to the signup page
        // will be a new user always.
        const hashPassword = bcrypt.hashSync(password)
        // const hashImage = bcrypt.hashSync(profilePicture)
        //and we send data like this "{email,username,password}" cause mongo db works with obj's
        const user = new User({email,username,password : hashPassword,profilePicture}); 

        await user.save().then(() => res.status(200).json({ user: user }));
    } catch (error) {
        res.status(400).json({message:"User Already registered"});
    }
});


//here we are creating signin functionality

router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        const userProfile = user.profilePicture
        if(!user){
            res.status(400).json({message:"Please Sign Up first!"})
        }

        const isPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!isPassword){
            res.status(400).json({message:"Incorrect password!"}) 
        }

        const {password,...others} = user._doc;

        res.status(200).json({others}) 
    } catch (error) {
        res.status(400).json({message:"User Already registered"});
    }
})

module.exports = router;