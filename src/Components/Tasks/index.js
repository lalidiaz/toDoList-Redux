import React from "react";
import { connect } from "react-redux";
import Task from "../Task";

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((data, i) => {
        return <Task isComplete={data.isComplete} name={data.value} key={i} index={i} />;
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(Tasks);