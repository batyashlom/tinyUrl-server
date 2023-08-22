import userModel from "../Models/userModel.js";


const userContext = {
    getAllUsers: async()=>{
        let users = await userModel.find();
        return users
    },
    getUserById: async(id)=>{
        try {
            const user = await userModel.findById(id);
            return user;
          } catch (error) {
          return 'Error fetching user:'+ error;
        }      
    },
    getUserByNameAndPass: async(name,pass)=>{
        const user = await userModel.findOne({"name":name ,"password":pass })
        return user;
    },
    addUser: async({name,email,password})=>{
        const newUser = new userModel({name,email,password})
        newUser.save();
        const newUser2 = 'new user';
        return newUser2;
    },
    updateUser: async(id,user)=>{
        const updateUser = await userModel.findByIdAndUpdate(id,user,{new:true});
        updateUser.save();
        return updateUser;
    },
    removeUser: async(id)=>{
        const deleted = await userModel.findByIdAndRemove(id);
        return deleted;
    }
}

export default userContext;