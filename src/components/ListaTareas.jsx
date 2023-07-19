import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsListaTareas}) => {
  return (
    <ListGroup>
      {
      propsListaTareas.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
      }  
      </ListGroup>
  );
};

export default ListaTareas;