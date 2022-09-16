import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: "User already exists",
      });

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    res.json(userSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email })

    if (!userFound)
      return res.status(400).json({
        message: "User not found",
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const payload = { id: userFound._id, name: userFound.username };
    const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" });

    res.json(token);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifiedToken = async (req, res) => {
  const token = req.header("Authorization");

  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.send(false);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.send(false);

    return res.send(true);
  });
};
