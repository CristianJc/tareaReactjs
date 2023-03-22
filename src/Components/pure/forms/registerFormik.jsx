import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";
const RegisterFormik = () => {
  let user = new User();

  const submit = (values) => {
    alert("register user");
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Too short")
      .max(12, "Too long")
      .required("Is Requerid"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is  requerid"),
    password: Yup.string().min(4, "Too Short").required("Pasword is  requerid"),
    confirm: Yup.string()
      .when("password", {
        is: value => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match"),
      })
      .required("Your must cofirm the paswword"),
      role: Yup.string().oneOf([ROLES.USER,ROLES.ADMIN],'You must Select a ROle: User/Admin').required('Role is required')
  });
  return (
    <div>
      <h4> Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
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
            <label htmlFor="firstName">User Name</label>
            <Field
              id="username"
              type="username"
              name="username"
              placeholder="username"
            />
            {/* emaail errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
            )}

            <label htmlFor="firstName">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            {/* emaail errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}
          
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Password</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="confirm password"
            />
            {/* Password errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Register  your Account....</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
