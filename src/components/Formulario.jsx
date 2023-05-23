import { Form, Button } from "react-bootstrap";
import ListTasks from "./ListTasks";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [task, setTask] = useState("");
  let tasksLS = JSON.parse(localStorage.getItem("listTasks")) || [];
  const [listingTasks, setListingTasks] = useState(tasksLS);

  useEffect(() => {
    localStorage.setItem("listTasks", JSON.stringify(listingTasks));
  }, [listingTasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListingTasks([...listingTasks, task]);
    setTask("");
  };

  const deleteTask = (nameTask) => {
    let filterTask = listingTasks.filter((itemTask) => itemTask !== nameTask);
    setListingTasks(filterTask);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="task">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListTasks
        listingTasks={listingTasks}
        deleteTask={deleteTask}
      ></ListTasks>
    </section>
  );
};

export default Formulario;
