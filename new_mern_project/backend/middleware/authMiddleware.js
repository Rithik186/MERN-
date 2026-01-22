// const jwt=require("jsonwebtoken");
// exports.authMiddleware=(req,res,next)=>{
//     const token=req.headers.authorization;
//     if (!token || !token.startswith("Bearer")){
//         res.status(401).json({msg: "not authorized"});
//     }
//     try{
//         token=token.split(" ")[1];
        
//     }
//     catch(err){
//         res.send("Invalid Token");
//     }
// }