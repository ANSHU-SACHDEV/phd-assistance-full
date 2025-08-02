console.log("✅ authcontroller.js file loaded");

const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("📥 Incoming registration:", req.body); // 👈 log input

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      console.log("⚠️ User already exists");
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    console.log("✅ User registered successfully:", newUser); // 👈 log success
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error("❌ Registration error:", err); // 👈 log error
    res.status(500).json({ msg: 'Server error' });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Login request:", req.body); // 👈 log the incoming request

  try {
    const user = await User.findOne({ email });
    console.log("🔍 User found:", user); // 👈 check if user exists

    if (!user) {
      console.log("❌ No user with this email");
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔐 Password match result:", isMatch); // 👈 check password match

    if (!isMatch) {
      console.log("❌ Passwords do not match");
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    console.log("✅ Login successful:", user.email);
    res.status(200).json({ msg: "Login successful", user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
