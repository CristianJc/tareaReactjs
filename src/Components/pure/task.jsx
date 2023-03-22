import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/taskStyle.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remuve }) => {
  useEffect(() => {
    console.log("tarea creada ");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  function taskIconCompleted() {
    if (task.completed) {
      return (
        <i
          onClick={() => {
            complete(task);
          }}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => {
            complete(task);
          }}
          className="bi-toggle-off task-action"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>
      );
    }
  }

  const taskCompleted ={
   
    color: 'gray',
    fontWeigth: 'bold',
 textDecoration: 'line-through'

   }

   const taskPending ={
   
    color: 'tomato',
    fontWeigth: 'bold',
   
   
   }
  return (
    <tr className="fw-normal " style={task.completed ?  taskCompleted : taskPending}>
      <th>
        <span className="ms-2"> {task.name}</span>
      </th>
      <td className="align-middle">
        <span> {task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: sustituir por un badge */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        <span>
          {taskIconCompleted()}
          <i
            className="bi-trash task-action"
            style={{ color: "tomato", fontSize: "20px" }}
            onClick={() => remuve(task)}
          ></i>
        </span>
      </td>
    </tr>

    // <div>
    //   <h1 className="task-name">
    //     Nombre: {task.name}
    //     </h1>
    //     <h3>Descripcion: {task.description}</h3>
    //     <h3>Nivel: {task.level}</h3>
    //     <h3>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h3>

    // </div>
  );
};

Task.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remuve: PropTypes.func.isRequired,
  // esto es una tipo de variable tarea
};

export default TaskComponent;
