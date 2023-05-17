import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5 main_page">
        <h1 className="display-4 text-center mb-0">Titulo</h1>
        <hr />
        {/* Formulario */}
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p className="mb-0">&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
