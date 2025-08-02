const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); //  route import
require('dotenv').config();

const app = express();
app.use(express.json());
// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/countrySignup')
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log("❌ DB Error:", err));



// app.use((req, res, next) => {
//   console.log(`➡️ Incoming: ${req.method} ${req.url}`);
//   next();
// });

app.use((req, res, next) => {
  console.log(`➡️ Incoming: ${req.method} ${req.url}`);
  next();
});



// ✅ MOUNT THE ROUTES HERE
app.use('/api/auth', authRoutes);

// app.use((req, res, next) => {
//   console.log("➡️ Request received:", req.method, req.url);
//   next();
// });
// app.post("/api/auth/register", (req, res) => {
//   res.send("✅ It works!");
// });

// Start server
app.listen(8080, () => {
  console.log("✅ Server is listening on port 8080");
});
