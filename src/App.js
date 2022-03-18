import "./App.css";
import BarraNavegacion from "./Componentes/Navbar";
import Perfil from "./Componentes/Perfil";

function App() {
  return (
    <div className="App">
      <BarraNavegacion>
        <Perfil />
      </BarraNavegacion>
    </div>
  );
}

export default App;
