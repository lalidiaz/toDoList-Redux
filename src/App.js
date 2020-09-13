import React from "react";
import { connect } from "react-redux";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTask />
      <Tasks />
    </div>
  );
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(App);