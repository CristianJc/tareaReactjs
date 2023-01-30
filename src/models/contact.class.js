export class Contacts{
    name="";
    apellido="";
    telefono="";
    correo="";
    estado=true;
    image=''

    constructor(_name,_apellido,_telefono,_correo,_estado,_image){
        this.name=_name;
        this.apellido=_apellido;
        this.telefono=_telefono;
        this.correo=_correo;
        this.estado=_estado;
        this.image=_image;

    }
}