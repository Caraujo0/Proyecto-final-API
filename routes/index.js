const router= require('express').Router();

let trabajador=require("./trabajador");
router.use("/trabajador",trabajador)


module.exports=router;