import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
    const [listadoSatate, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/*CABECERA*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>
        {/*BARRA DE NAVEGACION*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        {/*CONTENIDO PRINCIPAL*/}
        <section className="content">
          <Listado listadoSatate={listadoSatate} setListadoState={setListadoState} />
        </section>
        {/*MENU LATERAL*/}
        <aside className="aside">
            <Buscador listadoSatate={listadoSatate} setListadoState={setListadoState} />
            <Crear setListadoState={setListadoState} />
        </aside>
        {/*FOOTER*/}
        <footer className="footer">
            &copy; Proyecto películas<a href="marcosbustos.cl">marcosbustos.cl</a>
        </footer>
    </div>
  );
}

export default App;
