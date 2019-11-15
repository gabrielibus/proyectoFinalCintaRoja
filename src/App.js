import React, { useState, useEffect } from 'react';
import './App.css';
import ColorCards from "./components/ColorCards"
import NewTask from "./components/NewTask"
// import { tasks } from "./tasks.json"
import axios from "axios"

const urlGet = "https://virus-do.herokuapp.com/api/v1/get/active"

function App() {
  const [tareas, setTareas] = useState([])
  useEffect(() => {
    axios.get(urlGet)
      .then(function (activeTasks) {
        setTareas(activeTasks.data)
      })
      .catch(function (error) {
        return (error)
      })
  }, [])
  const renderTasks = () => {
    return tareas.map((index) => {
      return (
        <div>
          <ColorCards title={index.title} priority={index.priority} task={index.task} responsible={index.responsible} />
        </div>
      )
    })
  }

  return (
    <div className="App">
      {renderTasks()}
    </div>
  );
}

export default App;
