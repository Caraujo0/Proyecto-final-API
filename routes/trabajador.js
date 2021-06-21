const router=require('express').Router();
let trabajadorcontroller=require('../controllers/trabajador-controllers')

router.get('/',(req,res)=>{
    trabajadorcontroller.listar(req,res);
})

router.get('/:Name', (req,res)=>{
    trabajadorcontroller.buscar(req,res);
})

router.post('/',(req,res)=>{
    trabajadorcontroller.agregar(req,res);
})

router.delete('/:id',(req,res)=>{
    trabajadorcontroller.eliminar(req,res);
})
module.exports=router;