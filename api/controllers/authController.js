import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};


export const login = async (req, res) => {
  console.log("hitted here",req.body)
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.email }, { number: req.body.number }],
    });

    if (!user) {
      res.status(401).json("No user found");
      console.log("No user found");
    }

    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      res.send(400).json("Wrong Password");
    }

    const {fullName,email,number} = user._doc
    res.status(200).json({fullName,email,number})

  } catch (error) {
    console.log(error);
  }
};
