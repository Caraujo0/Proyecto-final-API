let grupo=require('../models/Trabajador')
let catalogo=require('../../db/catalogo');

module.exports={
    listar:(req,res)=>{
        res.json( "{Mensaje: 'Todos los Trabajadores' ,Trabajador:" + catalogo.listar() +"}");
        },  
    agregar:(req,res)=>{   
        console.log(req.body)
    let id=req.body.id;
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let job=req.body.job;
    let user=req.body.user;
    let nuevo=new grupo(id,name,email,phone,job,user);
    catalogo.agregar(nuevo)
    res.json("{Mensaje:'Se agregó el Trabajador:"+' Nombre: ' + req.body.name +" id: "+req.body.id+" email:"+req.body.email+" phone :"+ req.body.phone + " job: " + req.body.job +" user: "+req.body.user +"}");
},
    buscar:(req,res)=>{
        let name=req.body.name;
        let buscado=catalogo.buscar(name);
    if(buscado===null){
        res.json("{Mensaje:'No se encontró el Trabajador}");
        //Se puede buscar con el id
    }
    else{
        res.json("{Mensaje:'Se encontró el Trabajador:"+'  Name:' + buscado.info() +"}");
    }
    
},
eliminar:(req,res)=>{
    let id=req.body.id;
    let delet=catalogo.eliminar(id);
    if(delet==null){
        res.json("{mensaje:'No se eliminó al Trabajador',id:'"+req.body.id+" porque no se encontro'}")
    }
    else
        res.json(`{mensaje:'Se eliminó a un Trabajador',nombre:'${delet.nombre}'}`)
},
}
