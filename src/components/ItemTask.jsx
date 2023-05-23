import { Button, ListGroup } from "react-bootstrap";

const ItemTask = ({ task, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {task}
      <Button variant="danger" onClick={() => deleteTask(task)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTask;
