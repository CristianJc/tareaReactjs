import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is  requerid"),
  password: Yup.string().required("Pasword is  requerid"),
});
const LoginFormk = () => {
  const inicialCredentials = {
    email: "",
    password: "",
  };

  const history= useHistory();
  const register = () => {
    history.push("/register");
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        //   **Initial values that the form will take
        initialValues={inicialCredentials}
        // **** YUP validation Schema***
        validationSchema={loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
         await  localStorage.setItem("credentials", values);
         history.push('/profile');
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
            <Form>
              <label htmlFor="firstName">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@mail.com"
              />
              {/* emaail errors */}
              {errors.email && touched.email && (
               
                <ErrorMessage name="email" component='div'></ErrorMessage>
              )}

              <label htmlFor="Password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              {/* Password errors */}
              {errors.password && touched.password && (
                <ErrorMessage name="password" component='div'></ErrorMessage>
              )}

              <button type="submit">Login</button>
              {isSubmitting ? <p>Login your Credentials....</p> : null}

              <Button variant="contained" onClick={register}> Register</Button>
            </Form>
        )}
        
      </Formik>
    </div>
  );
};

export default LoginFormk;
