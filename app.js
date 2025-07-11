const express=require("express");
const app=express();
const mongoose=require("mongoose");
const ejsMate=require("ejs-mate");
const path=require("path");
const Country=require("./models/country");
const methodOverride=require("method-override");
//const {countrySchema}=require("./schema.js");
const Contact=require("./models/contact");
const cors = require('cors');


const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/countryList');
}
main().catch(err => console.log(err));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
// app.use(bodyParser.json());
app.use(cookieParser('NotSoSecret'));
app.use(session({
  secret : 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  next();
})


app.get("/home",(req,res)=>{
  // res.send("hi, i'm root");
  res.render("./phd_web/home");
});

app.get("/about",(req,res)=>{
  res.render("./phd_web/about");
});

app.get("/country",(req,res)=>{
  res.render("./phd_web/countryList");
});

app.get("/country/:name",async(req,res)=>{
  const countryName=req.params.name.toLowerCase();
  const country=await Country.findOne({name:countryName});
  if(!country){
    return res.status(404).send("Country not found");
  }
  res.render("./phd_web/country",{country});

});

app.get("/contact", (req, res) => {
  res.render("./phd_web/contact");
});

app.get("/privacy",(req,res)=>{
  res.render("./phd_web/privacy");
});

app.get("/terms",(req,res)=>{
  res.render("./phd_web/terms");
})


app.post("/contact",async(req,res)=>{
  console.log("at contact page");
  const contact=new Contact(req.body);
  await contact.save();
  // res.redirect("/contact");
 //res.json({message:"Data saved! Rest assured our team will contact you soon"});
 req.flash("success","Data saved!Rest assured our team will contact you soon!");
 res.redirect("/home");
});

app.get('/signup', (req, res) => {
  // redirect user to React app signup page
  res.redirect('http://localhost:3000/signup');
});

app.get("/engineering",(req,res)=>{
  res.render("./phd_web/courses/engineering");
});

app.get("/humanities",(req,res)=>{
  res.render("./phd_web/courses/humanities");
});

app.get("/science",(req,res)=>{
  res.render("./phd_web/courses/science");
});

app.get("/coursework",(req,res)=>{
  res.render("./phd_web/services/coursework");
});

app.get("/dissertation",(req,res)=>{
  res.render("./phd_web/services/dissertation");
});

app.get("/editing",(req,res)=>{
  res.render("./phd_web/services/editing");
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));



app.listen(8080,(req,res)=>{
  console.log("server is listening to port 8080");
});

