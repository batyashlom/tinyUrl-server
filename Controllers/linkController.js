import context from "../Contexts/linkContext.js";


const LinkController = {
    getList: async(req,res)=>{
        const links = await context.getAllLinks();
        res.send(links);
    },
    getById: async(req,res)=>{
        // res.send(req.params.id);
        const link = await context.getLinkById(req.params.id);
        res.send(link);
    },
    add: async(req,res)=>{
        const { originalUrl,uniqueName,name}=req.body;
        await context.addLink( originalUrl,uniqueName,name );
        const tinyLink = "https://tinyurl-b8yl.onrender.com/"+uniqueName;    /*render*/
        res.send(tinyLink);

    }
}
export default LinkController;