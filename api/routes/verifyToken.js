const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req
        .headers
        .token.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            error && res
                .status(403)
                .json("Token is not valid");
            req.user=user;
            next();
        })
    } else {
        return res
            .status(401)
            .json("Not allowed");
    }
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.u_id==req.params.u_id){
            next();
        }
        else{
            res.status(403).json("You are not allowed");
        }
    })
}


module.exports = {
    verifyToken,verifyTokenAndAuthorization
};