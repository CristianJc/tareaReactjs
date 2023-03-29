import React from 'react';
import RegisterFormik from '../../Components/pure/forms/registerFormik';
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
    const history = useHistory();
    const login = () => {
      history.push("/login");
    };
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik></RegisterFormik>

            <Button variant="contained" onClick={login}> login </Button>
        </div>
    );
}

export default RegisterPage;
