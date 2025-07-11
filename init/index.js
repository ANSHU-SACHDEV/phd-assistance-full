const mongoose=require("mongoose");
const idata=require("./data.js");
const country=require("../models/country.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/countryList');
}


const initDB=async()=>{
  await country.deleteMany({});
  await country.insertMany(idata.data);
  console.log("db is initialized");
}
initDB();