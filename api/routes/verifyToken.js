const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req
        .headers
        .token.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            error && res
                .status(403)
                .json("Token is not valid");
            req.user = user;
            next();
        })
    } else {
        return res
            .status(401)
            .json("Not allowed");
    }
}

module.exports = {
    verifyUser
};