import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import createError from "http-errors"; 
import gestionValid from "../validators/gestionnaireValidator.js";

const router = express.Router();
const prisma = new PrismaClient();

const auth = expressjwt({
  secret: process.env["JWT_KEY"],
  algorithms: ["HS256"],
});

// la router pour crée le gestionnaires avec nos informations
router.post('/gestionnaire', auth, async(res,req,next)=>{
    let gestionData;
    gestionData = gestionValid.parse(req.body);

    const data = await prisma.data.create({
        data:{
            WebSite : gestionData.website,
            Account : gestionData.account,
            Password : gestionData.password,
          User:{ 
            connect:{
                id : req.auth.id
            }
          }
             
        }
        
    })
res.json(data);
})

router.get('/Gestionnaire', auth, async(req, res, next)=>{
    let gestion = await prisma.data.findMany({

    })
    res.json(gestion)
})

router.patch('/Gestionnaire/:id', auth, async(req, res, next)=>{
    let gestionData;
    const newData = (gestionData = gestionData.parse(req.body));
  
    await prisma.data.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        WebSite: gestionData.website,
        Account: gestionData.account,
        Password : gestionData.password,
        User: {
          connect: {
            id: req.auth.id,
          },
        },
        
      },
    });
    res.json(newData);
       
    
})

export default router;