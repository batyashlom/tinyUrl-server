import linkModel from "../Models/linkModel.js";


const linkContext = {
    getAllLinks: async()=>{
        const links = await linkModel.find();
        return links;
    },
    getLinkById: async(id)=>{
        try {
            const link = await linkModel.findById(id);
            console.log(link);
            return link;
          } catch (error) {
          return 'Error fetching link:'+ error;
        }      
    },
    addLink: async(originalUrl,uniqueName, name)=>{
        const newLink = new linkModel({originalUrl,uniqueName, name});
        const addedLink = await newLink.save();
        return addedLink;
    },
    updateLink: async(id,link)=>{
        const updateLink = await linkModel.findByIdAndUpdate(id,link,{new:true});
        updateLink.save();
        return updateLink;
    },
    removeLink: async(id)=>{
        const deleted = await linkModel.findByIdAndRemove(id);
        updateLink.save();
        return deleted;
    }
}

export default linkContext