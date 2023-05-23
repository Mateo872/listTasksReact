import { ListGroup } from "react-bootstrap";
import ItemTask from "./ItemTask";

const ListTask = ({ listingTasks, deleteTask }) => {
  return (
    <ListGroup>
      {listingTasks.map((task, index) => (
        <ItemTask key={index} task={task} deleteTask={deleteTask}></ItemTask>
      ))}
    </ListGroup>
  );
};

export default ListTask;
