// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth'); //  route import
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/countrySignup')
//   .then(() => console.log("✅ Connected to DB"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // app.use(express.static(path.join(__dirname, "../frontend/build")));

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// // });


// // app.use((req, res, next) => {
// //   console.log(`➡️ Incoming: ${req.method} ${req.url}`);
// //   next();
// // });

// // app.use((req, res, next) => {
// //   console.log(`➡️ Incoming: ${req.method} ${req.url}`);
// //   next();
// // });



// // ✅ MOUNT THE ROUTES HERE
// app.use('/api/auth', authRoutes);

// // app.use((req, res, next) => {
// //   console.log("➡️ Request received:", req.method, req.url);
// //   next();
// // });
// // app.post("/api/auth/register", (req, res) => {
// //   res.send("✅ It works!");
// // });
// const path = require('path');

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '..', 'build')));

// // The "catchall" handler: for any request that doesn't
// // match an API route, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

// // Start server
// app.listen(8080, () => {
//   console.log("✅ Server is listening on port 8080");
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Change to your production frontend URL after deploy
  credentials: true
}));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/countrySignup')
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => console.log("❌ DB Error:", err));

// API routes
app.use('/api/auth', authRoutes);

// Serve React static files (after build)
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all: send React's index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
