import React, { useState } from 'react';
import Tarea from './Tarea';
import './App.css';

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleInputChange = (e) => {
    setTarea(e.target.value);
  };

  const handleAddTarea = () => {
    if (tarea !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  const handleDeleteTarea = (index) => {
    const newTareas = tareas.filter((_, i) => i !== index);
    setTareas(newTareas);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={handleInputChange}
        placeholder="Agregar una tarea"
      />
      <button onClick={handleAddTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <Tarea key={index} tarea={tarea} onDelete={() => handleDeleteTarea(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
