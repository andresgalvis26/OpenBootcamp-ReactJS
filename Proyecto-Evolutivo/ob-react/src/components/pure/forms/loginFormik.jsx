import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h4>Login with Formik</h4>
            <Formik
                initialValues={{ initialCredentials }}
                validationSchema={loginSchema} // Yup Validation Schema
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* We obtain props from Formik */}
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />

                    {/* Email errors */}
                    {
                        errors.email && touched.email && 
                        (
                            // <div className='error'>
                            //     <p>{errors.email}</p>
                            // </div>
                            <ErrorMessage component='div' name='email' />
                            
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    />

                    {/* Password errors */}
                    {
                        errors.password && touched.password && 
                        (
                            // <div className='error'>
                            //     <p>{errors.password}</p>
                            // </div>
                            <ErrorMessage component='div' name='password'/>
                        )
                    }

                    <button type="submit">Login</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default Loginformik;
