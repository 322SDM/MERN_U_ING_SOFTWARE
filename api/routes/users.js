import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/prueba",verifyToken,(req,res,next)=>{
//     res.send("hola estoy autenticado!")
// });

// router.get("/prueba/:id",verifyUser,(req,res,next)=>{
//     res.send("hola estoy autenticado y puedo eliminar!")
// });

// router.get("/admin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hola admin estoy autenticado!")
// });

//UPDATE

router.put("/:id",verifyUser, updateUser);

//DELETE

router.delete("/:id",verifyUser,deleteUser);

//GET

router.get("/:id",verifyUser, getUser);

//GET ALL

router.get("/",verifyAdmin, getAllUsers);


export default router;
