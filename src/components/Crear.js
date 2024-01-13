import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir película";

  const [peliState, setPeliState] = useState({
    titulo: null,
    descripcion: null
  });

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };  

    setPeliState(peli);

    setListadoState(elementos => {
      return [...elementos, peli];
    });

    GuardarEnStorage("PELIS", peli);
  }

  return (
    <div className="add">
      {(titulo && descripcion) && `Has creado la película ${titulo}`}
        <h3 className="title">{tituloComponente}</h3>
        <form onSubmit={conseguirDatosForm}>
            <input type="text" name="titulo" id="titulo" placeholder="Título" />
            <textarea name="descripcion" id="descripcion" placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" id="save" />
        </form>
    </div>
  )
}

export default Crear