import React from 'react'
const Form = ({ handleChange, addTask, tarea }) => {
  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" value={tarea} placeholder='Ingresa la tarea...' onChange={handleChange} />
        <button type="submit"><span>&#43;</span></button>
      </form>
    </div>
  )
}

export {Form}
