import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
          localStorage.setItem("credentials", values);
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
            </Form>
        )}
        
      </Formik>
    </div>
  );
};

export default LoginFormk;
