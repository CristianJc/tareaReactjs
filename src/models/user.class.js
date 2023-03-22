import { ROLES } from "./roles.enum";

export class User {
    username='';
    email='';
    password='';
    role= ROLES.USER;

    constructor(_username,_email,_password,_role){
        this.username=_username;
        this.email=_email;
        this.password=_password;
        this.role=_role;
    }

}