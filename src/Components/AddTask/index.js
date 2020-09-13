import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../store";

function AddTask(props) {
  const [task, setTask] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setTask(value); //every time I modify the input is going to update the state.
  }

  function handleClick() {
    const { dispatch } = props;
    dispatch(addTask(task));
    setTask("");
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      handleClick();
    }
  }

  return (
    <React.Fragment>
      <input
        type="text"
        value={task}
        onKeyPress={e => handleKeyPress(e)}
        onChange={e => handleChange(e)}
      />
      <button onClick={() => handleClick()}>Add task</button>
    </React.Fragment>
  );
}

export default connect()(AddTask);