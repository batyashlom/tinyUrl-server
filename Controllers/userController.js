import context from "../Contexts/userContext.js"


const UserController = {
    getList: async(req,res)=>{
        const users = await context.getAllUsers();
        res.send(users)
    },
    add: async(req,res)=>{
        // res.send('gjgj')
        const {name, email, password} = req.body;
        const newUser = await context.addUser({name, email, password})
        // mail.sendEmailRegister(name,email);
        res.send(name+' '+email+' '+password);
    }
}


export default UserController;
