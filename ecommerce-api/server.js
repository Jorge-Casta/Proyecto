import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes';
import dbConnection from './src/config/database.js';


dotenv.config();


const app = express();
app.use(express.json());

app.get("/", req, res => {
    res.send("WELCOME");
});

app.use('api', routes);

app.listen(process.env.PORT, () =>  {
    console.log(`serever running on http://localhost:${process.env.PORT}`);
});