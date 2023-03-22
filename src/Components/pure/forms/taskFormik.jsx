import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskFormik = ({add, length}) => {

const nameRef = useRef('');
const descriptionRef = useRef('');
const levelRef = useRef(LEVELS.NORMAL);

const initialValues={
    taskName:'',
    taskDescription:'',
    level:''
}

const taskSchema = Yup.object().shape({
    taskName: Yup.string().required('Name tasks is Required'),
    taskDescription: Yup.string().required('description the task is requiered'),
    level: Yup.string().required('level task is required')
})

function addTask(e){
    e.preventDefault();
    const newTask = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        levelRef.current.value

    );
    add(newTask)
}

const normalStyle={
    color:'blue',
    fontWeight:'bold'
}
const urgentStyle={
    color:'yellow',
    fontWeight:'bold'
}

const blockingStyle={
    color:'tomato',
    fontWeight:'bold'
}
    return (
       <Formik
       initialValues={initialValues}
       validationSchema={taskSchema}
       onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
       >

{({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (  <Form>
            <label htmlFor="TaskName">Task Name</label>
            <Field
              id="taskName"
              type="text"
              name="taskName"
              placeholder="taskName"
            />
            {/* emaail errors */}
            {errors.taskName && touched.taskName && (
              <ErrorMessage name="taskName" component="div"></ErrorMessage>
            )}

            <label htmlFor="taskDescription">Description Task</label>
            <Field
              id="taskDescription"
              type="text"
              name="taskDescription"
              placeholder="Description the task"
            />
            {/* emaail errors */}
            {errors.taskDescription && touched.taskDescription && (
              <ErrorMessage name="taskDescription" component="div"></ErrorMessage>
            )}
            <button type="submit">Add New Task</button>
            {isSubmitting ? <p>Creante new Task....</p> : null}
            </Form>
          )}


       </Formik>
    );
}
TaskFormik.protoTypes ={
    add: PropTypes.func.isRequiered,
    length: PropTypes.number.isRequired,
}

export default TaskFormik;
