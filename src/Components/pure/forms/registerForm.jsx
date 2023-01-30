import React, {useState} from 'react';




const RegisterForm = () => {

    const inicialData=[{
        user:'',
        name:'',
        email:'',
        password:'',
    }];

    const [data, setData] = useState(inicialData);
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
