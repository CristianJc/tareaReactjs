/**
 * componente que va a contener un fomrulario para autenticacion de usuarios
 */
import React, {useState} from 'react';

const LoginForm = () => {
    const inicialCredentials=[{
        user:'',
        password:''
    }];

    const [credential, setCredential] = useState(inicialCredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
