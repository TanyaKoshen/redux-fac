import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

  const [input, setInput] = useState('')

  const createButtonHandler = () => {
    props.addTask(input);
    setInput('')
  }

  return (
    <div>
      <input type="text"
             placeholder='new task'
             value={input}
             onChange={e => setInput(e.target.value)}
      />
      <button onClick={createButtonHandler}>Create Task</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: (input)=>dispatch({type: 'ADD_NEW_TASK', payload: input})
})

export default connect(null, mapDispatchToProps)(CreateTask);