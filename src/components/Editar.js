import React from 'react'

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar película";
    const guardarEdicion = (e, id) => {
        e.preventDefault();
        let target = e.target;
        const peliculas = conseguirPeliculas(id);
        const indice = peliculas.findIndex(peli => peli.id === id);
        const peli = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };
        peliculas[indice]= peli;

        setListadoState(peliculas);

        localStorage.setItem("PELIS", JSON.stringify(peliculas));

        setEditar(0);
    }
  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" name="titulo" className="titulo_editado" defaultValue={peli.titulo} />
            <textarea name="descripcion" defaultValue={peli.descripcion} className="descripcion_editada"></textarea>
            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  );
}

export default Editar