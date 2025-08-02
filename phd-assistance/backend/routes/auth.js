console.log("✅ auth.js file loaded");

const express = require('express');
// const app=express();
const router = express.Router();
// const { register, login, logout, checkAuth } = require('../controllers/authController');
const authController = require('../controllers/authController');

// // router.post('/register', authController.register);
// router.post('/login', authController.login);
// // router.post('/logout', logout);
// router.get('/check-auth', checkAuth);
// router.post('/register', (req, res, next) => {
//   console.log("register route hit");
//   // next();
// }, authController.register);

// router.get('/test', (req, res) => {
//   res.send("✅ Auth route is working");
// });
// routes/auth.js

// router.post('/register', (req, res) => {
//   console.log("✅ /register route hit");

//   authController.register(req, res);
// });

// router.post("/register", (req, res) => {
//   console.log("✅ Route reached!");
//   res.json({ success: true });
// });

// router.post("/signup", (req, res) => {
//   console.log("✅ Route reached!");
//   res.json({ success: true });
// });
router.post("/signup", authController.register);

router.post('/login', (req, res, next) => {
  console.log("/login route hit");
  next();
}, authController.login);


module.exports = router;
