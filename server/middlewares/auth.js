const jwt = require ('jsonwebtoken');

module.exports = (req, res, next) =>{
    //check if the token is inside of the headers
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1]; // 'bearer lehfrzelhlzeihr'
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if (err){
                next(Error('Failed to authenticate token'))
            }
            else{
                req.user = decoded;
                next(req.user);
            }
        })
    }
    else{
        //if no token provided
        next(Error ('No Token Provided'))
    }
};