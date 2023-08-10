import userModel from "../Models/userModel.js";


const userContext = {
    getAllUsers: async()=>{
        let users = await userModel.find();
        return users
    },
    addUser: async({name,email,password})=>{
        const newUser = new userModel({name,email,password})
        newUser.save();
        const newUser2 = 'new user';
        return newUser2;
    }
}






export default userContext;