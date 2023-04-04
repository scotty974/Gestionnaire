import express from "express";
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { expressjwt } from "express-jwt";
import createError from 'http-errors';
import registerValidator from "../validators/registerValidator.js";


const router = express.Router()
const prisma = new PrismaClient();

const auth = expressjwt({
    secret: process.env["JWT_KEY"],
    algorithms: ["HS256"],
  }); 


router.post('/login', async (req,res,next)=>{
    let logindata;
    try{
        logindata = registerValidator.parse(req.body)

    }catch(error){
        return res.status(400).json({errors : error.issues})
    }
    

const user = await prisma.user.findFirst({
    where:{
        Email:logindata.email
    },
})
// on verifie si le mot de passe est bon 
if(!user) return next(createError(403,"Mauvais Email/mot de passe"))
// on vas haser le mot de passe
const passwordIsGood = await bcrypt.compare(logindata.password, user.Password)

if(!passwordIsGood) return next(createError(403, "Mauvais email/mot de passe"))

// puis on renvoie le token
res.json({
    token: jwt.sign(
      // payload
      {
        id : user.id,
        Email: user.email,
        
      },
      // clef pour signer le token
      process.env["JWT_KEY"],
      // durée du token
      {
        expiresIn: "1h",
      }
    ),
  });

});




  export default router;