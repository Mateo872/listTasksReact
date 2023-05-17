import { Button, ListGroup } from "react-bootstrap";

const ItemTake = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      Cras justo
      <Button variant="danger">Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTake;
