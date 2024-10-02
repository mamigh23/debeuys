const express = require ("express")
const router = express.Router();

// diğer rota dosyalarını içeri aktarıyoruz

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute =require("./auth.js")
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js"); 

// her rotayı ilgili yol altında kullanıyoruz

router.use("/categories",categoryRoute);
/* router.use("/products",productRoute); */
router.use("/auth",authRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute); 

module.exports= rout