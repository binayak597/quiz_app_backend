import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connection from "./connection/database.js";
import router from "./routes/route.js";

const app = express();

/**middlewares */
app.use(express.json());
app.use(cors());
app.use("/user", router);

/** assigning a port for running a server */

let port = process.env.PORT;

if(port == null || port == "" ){
    port = 5000;
}

/** start a server only if there is a valid DB connection */

connection()
.then((res) => {
    try {
        app.listen(port, () => console.log(`server is running on port ${port}`));
    } catch (error) {
        console.log("can not connect to the server");
    }
})
.catch((error) => {
    console.log("invalid DB connection");
});
