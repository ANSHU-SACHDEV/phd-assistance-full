const mongoose=require("mongoose");

const countrySchema=new mongoose.Schema({
  name:String,
  description:String,
  reason:String,
  image:String,
 universities: [
    {
      uniName: String,
      uniInfo: String,
      uniImg:String
    }
  ],
  visa:String,
});
// module.exports=countrySchema;
module.exports = mongoose.model('Country', countrySchema);