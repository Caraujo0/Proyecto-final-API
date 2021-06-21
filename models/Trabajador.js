class Trabajador{
    constructor(id,name,email,phone,job,user){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.job=job;
        this.user=user;
    }
    info(){
        return this.id + '(' + this.name + ') Correo: ' + this.email + this.phone + this.job + this.user;
    }
}
module.exports=Trabajador;