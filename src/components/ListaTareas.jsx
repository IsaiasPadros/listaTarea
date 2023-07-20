import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsListaTareas, borrarTarea}) => {
  return (
    <ListGroup>
      {
      propsListaTareas.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }  
      </ListGroup>
  );
};

export default ListaTareas;