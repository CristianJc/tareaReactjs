import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/taskStyle.scss";
import TaskForm from "../pure/forms/taskForm";
const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Default description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Default description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Default description3",
    false,
    LEVELS.BLOCKING
  );

  ///estado del componente
  const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del componehnte

  useEffect(() => {
    console.log("task state has been modified");
    setLoading(false);
    return () => {
      console.log("task list componente is going to unmoun..");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const temptasks = [...tasks];
    temptasks[index].completed = !temptasks[index].completed;
    setTask(temptasks);
  }

  function deleteTask(task) {
    console.log("Delete this task:", task);
    const index = tasks.indexOf(task);
    const temptasks = [...tasks];
    temptasks.splice(index, 1);
    setTask(temptasks);
  }

  function addTask(task){
    console.log("Delete this task:", task);
    const index = tasks.indexOf(task);
    const temptasks = [...tasks];
    temptasks.push(task);
    setTask(temptasks)
  }
  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* /**contendio de la tarjeta */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">descrption</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: iterar sobre una liste de tarea */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completeTask}
                      remuve={deleteTask}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TODO aplicar un for/map para renderizar una lista */}
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
