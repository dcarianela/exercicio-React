import { Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import ENHA from "./pages/ENHA";
import TXT from "./pages/TXT";
import NJS from "./pages/NJS";
import Container from "./components/Container/Container";
import Menu from "./components/Container/Menu";

export default function App() {
  return (
    <>
      <Cabecalho />

      <Container>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ENHA" element={<ENHA />} />
          <Route path="/TXT" element={<TXT />} />
          <Route path="/NJS" element={<NJS />} />
        </Routes>
      </Container>
    </>
  );
}
