import expressAsyncHandler from "express-async-handler";
import generateToken from "../utilis/generateToken.js";
import User from "../model/UserModel.js";

// Login
const Login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.checkPassword(password))) {
        console.log('Successfully Login');
        generateToken(res, user._id);
        res.status(200).json({
            message: "Successfully login",
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401).json({ message: "Invalid Email or Password" });
    }
});

// Register
const register = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400);
            throw new Error('Already Exist');
        }

        const user = await User.create({ name, email, password });
        if (user) {
            generateToken(res, user._id);
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            });
        } else {
            res.status(400);
            throw new Error('Invalid User Data');
        }
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        res.status(400).json({ message: error.message });
    }
});

// Logout
const logout = expressAsyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: "Successfully Logged Out!" });
});

// Get Profile
const getProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400).json({ message: "User Does Not Exist" });
    }
});

// Update User
const UpdateUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            message: "User Updated Successfully",
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        });
    } else {
        res.status(401).json({ message: "User Does Not Exist" });
    }
});

export {
    register,
    Login,
    logout,
    getProfile,
    UpdateUser
}
