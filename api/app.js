import express from "express";
import connect from "./mongodb/mongodb.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();

//middlewares

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/hotels",hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Servidor no disponible";
    return res.status(errorStatus).json({
        message : errorMessage,
        status: errorStatus,
        success: false,
        stack: err.stack
    });
});


app.listen(5000, () => {
    connect(); 
    console.log('Servidor conectado: http://localhost:5000');
});
