import context from "../Contexts/userContext.js"


const UserController = {
    getList: async(req,res)=>{
        const users = await context.getAllUsers();
        res.send(users)
    },
    getById: async(req,res)=>{
        const user = await context.getUserById(req.params.id);
        res.send(user);
    },
    getByNameAndPass: async(req,res)=>{
        const user = await context.getUserByNameAndPass(req.name,req.password);
        return user;
    },
    add: async(req,res)=>{
        const {name, email, password} = req.body;
        const newUser = await context.addUser({name, email, password})
        // mail.sendEmailRegister(name,email);
        res.send(newUser);
    },
    update: async(req,res)=>{
        const id = req.params.id;
        const updatedUser = req.body;
        const updateUserRes = await context.updateUser(id,updatedUser);
        res.send(updateUserRes);
    },
    delete: async(req,res)=>{
        const deleted = await context.removeUser(req.params.id);
        res.send(deleted);
    }
}


export default UserController;
