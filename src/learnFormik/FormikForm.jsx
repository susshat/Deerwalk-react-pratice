import { Field, Form, Formik } from "formik";
import React from "react";

const FormikForm = () => {
  return (
    <>
      <Formik>
        {(formik) => {
          return (
            <Form>
              <Field>
                {() => {
                  return (
                    <div>
                      <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                      </div>
                      <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                      </div>
                    </div>
                  );
                }}
              </Field>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;
