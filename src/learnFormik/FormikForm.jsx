import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const FormikForm = () => {
  const initialValues = { firstName: "", lastName: "", description: "" };
  const onSubmit = (value, other) => {
    console.log(value);
  };
  const validateSchema = yup.object({
    firstName: yup.string().required("Name is required"),
    lastName: yup.string().required("Email is required"),
    description: yup.string().required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Field name="firstName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        {...field}
                        type="text"
                        value={meta.value}
                        /* if we only need to add one particular value we use "field.OnChange"
                        bue if multiple fields are required to be changed at once we use function inside the 
                        onChange  like below:
                            onChange={(e) => {
                            formik.setFieldValue("firstName", e.target.value);
                            }} */
                        onChange={field.onChange}
                      />
                      {/* validaion will run only if
                      1. onChange is triggered
                      2. onBlur(touched) is triggred
                      3. onSubmit is triggred */}
                      {meta.error && meta.touched ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <Field name="lastName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        {...field}
                        type="text"
                        value={meta.value}
                        onChange={field.onChange}

                        /*     onChange={(e) => {
                          formik.setFieldValue("lastName", e.target.value);
                        }} */
                      />
                      {meta.error && meta.touched ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <Field name="description">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="description">Description</label>
                      <input
                        {...field}
                        type="text"
                        value={meta.value}
                        onChange={field.onChange}
                        /*  onChange={(e) => {
                          formik.setFieldValue("description", e.target.value);
                        }} */
                      />
                      {meta.error && meta.touched ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;
