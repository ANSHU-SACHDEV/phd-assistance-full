const mongoose=require("mongoose");

const contactInfo=new mongoose.Schema({
  name:String,
  phone:Number,
  email:String,
  country:String,
 order:String,
 requirements:String
});
// module.exports=countrySchema;
module.exports = mongoose.model('contact', contactInfo);