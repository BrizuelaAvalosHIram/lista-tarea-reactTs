import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {


    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () =>{
        if(nuevaTarea === ''){
            alert("Ingrese una tarea")
        }
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')
   }

   const handleBorrarTareas = (index: number) =>{
        setListaTareas(tareasActuales => tareasActuales.filter((_,i) => i !==index))
   }

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
            />
            <button onClick={handleAddTask}> Agregar Tarea </button>
            
        </div>

    <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={handleBorrarTareas}>
    </ListaTareas>

    </div>
  )
}