import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import useList from '../../../hooks/useList';

const Taskformik = () => {

    // @ Construyendo el schema
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(2, 'Name too short!')
                .max(50, 'Name too long!')
                .required('Name is required'),
            description: Yup.string()
                .min(2, 'Description too short!')
                .max(50, 'Description too long!')
                .required('Description is required')
        }
    );

    const taskDefault = {
        name: 'Formik',
        description: 'Creando un formulario con Formik y Yup',
        completed: false,
        level: LEVELS.normal
    }

    const tasks = useList([taskDefault])


    return (
        <div>
            <h1>Task List</h1>
            <Formik
                initialValues={{taskDefault}}
                validationSchema={taskSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
                // onSubmit={(values, actions) => {
                //     setTimeout(() => {
                //         tasks.push(values);
                //         actions.resetForm({});
                //         actions.setSubmitting(false);
                //     }, 500);
                // }}
            >

                {({ errors }) => (
                    <Form>
                        <Field name="name" placeholder="Task Name"></Field>
                        {errors && errors.name}

                        <Field name="description" placeholder="Task Description"></Field>
                        {errors && errors.description}

                        <Field as="select" name="level">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
            {/* {tasks.isEmpty() ? (
                <p>Task List is Empty</p>
                ) : (
                tasks.value.map((task, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
                        <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
                        <p>{task.description}</p>
                    </li>
                ))
            )} */}
        </div>
    );
};

export default Taskformik;
