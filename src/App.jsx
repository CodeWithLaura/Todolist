import React, { useState } from 'react';import './App.css'
import {Task} from './components/Task'
import {Form} from './components/Form'

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = e => {
    setTarea(e.target.value)
  }
  const addTask = e => {
    e.preventDefault();
    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    }
    const totalTareas= [nuevaTarea, ...tareas]
    setTareas(totalTareas);
    setTarea('')
  }
  const borrarTarea = id => {
    const tareasActualizadas = tareas.filter(tareas => {
      return tareas.id != id
    })
    setTareas(tareasActualizadas)
  }


  return (
    <>
      <h2>Lista de tareas</h2>
      <Form
      handleChange = {handleChange}
      addTask = {addTask}
      tarea = {tarea} 
      />
      
      {tareas.map(tarea => (
       <Task
      key = {tarea.id}
      id = {tarea.id}
      tarea = {tarea}
      borrarTarea = {borrarTarea}
      /> 
      )) }
      
    </>
  )
}

export default App
