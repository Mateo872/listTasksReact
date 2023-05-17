import { Form, Button } from "react-bootstrap";
import ListTakes from "./ListTakes";

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex gap-1" controlId="take">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListTakes></ListTakes>
    </section>
  );
};

export default Formulario;
