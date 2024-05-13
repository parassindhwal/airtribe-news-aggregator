const jwt = require("jsonwebtoken");
const User = require('../../models/user');
//import user json

 const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split("Bearer ")[1];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                const message = "Header verify failed";
                return res.status(403).send({ message });
            } else {
                User.findOne({
                    _id: decoded.id
                }).then(user => {
                    req.user = user;
                    req.message = "Found the user succcessfully, user has valid login token";
                    next();
                }).catch(err => {
                    return res.status(500).send({ message: err.message });
                });
            }
        });
    } else {
        const message = "Authorization header not found";
        return res.status(401).send({ message});
    }
};

module.exports = {
    verifyToken: verifyToken
}