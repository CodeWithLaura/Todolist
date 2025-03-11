import React, {useState} from 'react'
import '../Task.css'

const Task = ({ tarea, borrarTarea }) => {
  const [completada, setCompletada] = useState(false)
  return (
    <div className={completada?'containerTarea containerTareacompletada':'containerTarea'}>
        <h2 className={completada?'completada':'noCompletada'}>{tarea.tarea}</h2>
        <button id='completar' onClick={() => setCompletada(!completada)}>{completada?'No completada':'Completada'}</button>
        <button onClick={() => {console.log("Eliminando tarea con id:", tarea.id);
            borrarTarea(tarea.id);
            }} id='addtask'><span>&#215;</span></button>
        </div>
  )
}

export {Task}
