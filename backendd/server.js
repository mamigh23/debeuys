const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv")
const app = express();
const cors = require('cors');
const logger = require("morgan")
const port = 5100;
const mainRoute = require("./routes/index.js") 
dotenv.config()    

    const connect = async () => {     
        try { 
          await mongoose.connect(process.env.MONGO_URL);
        console.log("connect mongodb");
          
        } catch (error) { 
          throw error;
        }
      };

//middleewares
app.use(logger("dev"));
app.use(express.json())
app.use(cors());

      app.use("/api",mainRoute);

app.listen(port, () => {  
  connect()
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
