import mongoose from "mongoose";


// create student schema
const tokenSchema = mongoose.Schema({


    userTd : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    token : {
        type : String,
        require : true
    }


}, {
    timestamps : true
});



// export modle
export default mongoose.model('Token', tokenSchema );