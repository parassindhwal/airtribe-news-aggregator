const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
require('dotenv').config();
// const user = require('../../models/user');

const register = (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            preferences: req.body.preferences
        });
        user.save().then(() => {
            return res.status(200).send({message: "User registered successfully"});
        }).catch((err) => {
            console.log(err);
            return res.status(500).json({error: err});
        });
    } catch(err) {
        return res.status(500).json("error", err);
    }
};

const login = (req, res) => {
    try {
        let emailPassed = req.body.email;
        let passwordPassed = req.body.password;
        User.findOne({
            email: emailPassed,
        }).then((user) => {
            if(!user) {
                return res.status(404).send({ message: "User not found"})
            }
            let isPasswordVaild = bcrypt.compareSync(passwordPassed, user.password);
            if(!isPasswordVaild) {
                return res.status(401).send({message: "Invalid Password"});
            } else {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
                return res.status(200).send({
                    token: token
                })
            }
        }).catch(err => {
            return res.status(500).json({error: err});
        })
    } catch(err) {
        return res.status(500).json("error", err);
    }
};

const getPreferences = (req, res) => {
    try {
        let preferences = req.user.preferences;
        return res.status(200).send({preferences})
    } catch(err) {
        return res.status(500).json("error", err);
    }
};

const updatePreferences = (req, res) => {
    try {
        let user = req.user
        user.preferences = req.body.preferences
        user.save().then((user) => {
            return res.status(200).send({ message: "updated preferences", user: user });
        }).catch((err) => {
            return res.status(500).json({error: err});
        });
    } catch(err) {
        return res.status(500).json("error", err);
    }
};

module.exports = {
    register: register,
    login: login,
    getPreferences: getPreferences,
    updatePreferences: updatePreferences
}