import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ? Importando Modelos
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const registerSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(5, 'Username too short.')
            .max(20, 'Username too long.')
            .required('Username is required.'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: User or Admin')
            .required('Role is required.'),
        password: Yup.string()
            .min(8, 'Password too short.')
            .required('Password is required.'),
        confirmPassword: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Passwords must match!'
                )
            }).required('You must confirm the password.')
    }
)


const Registerformik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ROLES.USER
        }

    const submit = (values) => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register with Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {/* We obtain props from Formik */}
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your username" />

                        {/* Username errors */}
                        {
                            errors.username && touched.username && 
                            (
                                <ErrorMessage component='div' name='username' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email errors */}
                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage component='div' name='email' />
                            )
                        }


                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" placeholder="Your password" />

                        {/* Password errors */}
                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage component='div' name='password' />
                            )
                        }

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm your password" />

                        {/* Confirm Password errors */}
                        {
                            errors.confirmPassword && touched.confirmPassword && 
                            (
                                <ErrorMessage component='div' name='confirmPassword' />
                            )
                        }


                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Registerformik;
