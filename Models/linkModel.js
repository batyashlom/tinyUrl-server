import mongoose from "mongoose";


const LinksModelSchema = mongoose.Schema({
    "originalUrl":String,
    "uniqueName":String,
    "clicks":[
        {
            "insertedAt":Date,
            "ipAddress":String,
            "targetParamValue":String,
        }
    ],
    "targetValues":[
        {
            "name":String,
            "value":String,
        }
    ]
})

export default mongoose.model('Links',LinksModelSchema);