import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/UserRoutes.js"



const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('api/v1',router);


mongoose.connect('mongodb+srv://Weather123:change123@cluster0.k0bgc2r.mongodb.net//WeatherDB?retryWrites=true&w=majority')
.then(()=> console.log("DB Connected"))
.catch((err) => console.log("Db error =>", err));

app.listen(5000,() => console.log("Working on port 5000"));




