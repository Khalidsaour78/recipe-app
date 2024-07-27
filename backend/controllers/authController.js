const User = require("../models/User"); // Import the User model
const bcrypt = require("bcryptjs"); // Import bcrypt for hashing passwords
const jwt = require("jsonwebtoken"); // Import jsonwebtoken for creating JWTs
const { validationResult } = require("express-validator"); // Import validationResult to handle validation errors

// Export the register function for user registration
exports.register = async (req, res) => {
  // Validate the request and return errors if validation fails
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure name, email, and password from the request body
  const { name, email, password } = req.body;

  try {
    // Check if a user with the given email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user instance with the provided details
    user = new User({
      name,
      email,
      password,
    });

    // Generate a salt and hash the user's password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the new user to the database
    await user.save();

    // Create a payload with the user's id for the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign the JWT with the payload and secret, and set an expiration time
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // Send the token as a response
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error"); // Send a server error response if an exception occurs
  }
};
