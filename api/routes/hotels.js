import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREAR

router.post("/",verifyAdmin,createHotel);

//UPDATE

router.put("/:id",verifyAdmin, updateHotel);

//DELETE

router.delete("/:id",verifyAdmin,deleteHotel);

//GET

router.get("/find/:id", getHotel);

//GET ALL

router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

export default router;