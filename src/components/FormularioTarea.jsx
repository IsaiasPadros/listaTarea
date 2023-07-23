import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas.jsx";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(()=>{
  console.log(`esto fue ejecutado con useEffect`)
  }, [listaTareas])
  //ejecutar solamente si se actualiza listaTareas

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array listaTareas
    setListaTareas([...listaTareas, tarea]);
    //limpiar el value del input
    setTarea("");
  };


  //crear una funcion para borrar tareas - Borrar por nombres - No se borran por props

  const borrarTarea =(tareaBorrar)=> {
    let listaTareasFiltrada= listaTareas.filter((itemTarea)=> itemTarea !==  tareaBorrar)
    setListaTareas(listaTareasFiltrada)

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
           type="text" 
          placeholder="ingrese una tarea"   
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
           />
          <Button variant="primary">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
