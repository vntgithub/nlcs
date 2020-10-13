const User = require('../models/user.model');
module.exports = {
    createUser: async(req, res) => {
        const user = await User.create(req.body);
	    res.json(user); 
    },
    login: async(req, res) => {
        const { username, password } = req.body;
        const user = await User.find({ username: username, password: password });
        if(!user){
            res.send("user not found");
        }
        res.json(user);
    },
    changePassword: async(req, res) => {
        
    }
}