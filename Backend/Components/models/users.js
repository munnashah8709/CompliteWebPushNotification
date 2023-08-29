const mongose=require("mongoose")
const signupdata=new mongose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
    DeviceTocken:String,

   
});


const oppsenginedata= new mongose.model("oppsenginedata",signupdata);
module.exports=oppsenginedata;