import React, { useEffect, useState } from 'react'
import Editar from './Editar';

const Listado = ({listadoSatate, setListadoState}) => {
    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('PELIS'));
        setListadoState(peliculas);
        return peliculas;
    }

    const borrarPeli = id => {
        let peliculas = conseguirPeliculas();
        let nuevoListadoPeliculas = peliculas.filter(peli => peli.id !== parseInt(id));
        setListadoState(nuevoListadoPeliculas);
        localStorage.setItem('PELIS', JSON.stringify(nuevoListadoPeliculas));
    }

    return (
        <>
        {listadoSatate != null && listadoSatate.length > 0 ? listadoSatate.map(peli => {
            return (
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                    <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                    {editar === peli.id && (
                        <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState} />
                    )}
                </article>
            );
        }) 
        : 
            <h2>No hay películas para mostrar</h2>
        }
        </>
    )
}

export default Listado