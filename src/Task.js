import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {

  const {task, deleteTask, done} = props;

  return (
    <div>
      <li>
        <span style={ task.isDone ? {textDecoration: 'line-through' }: null}> {task.title}    </span>
        <button onClick = {() => deleteTask(task.id)}> 🗑️ </button>
        <button onClick={() => done(task.isDone, task.id)}> Done </button>
      </li>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch ({type: 'DELETE_TASK', payload: id}),
  done: (id) => dispatch ({type: 'DONE', payload: { id}})
})
export default connect(null, mapDispatchToProps)(Task);