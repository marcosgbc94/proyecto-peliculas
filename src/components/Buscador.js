import React, { useState } from 'react'

const Buscador = ({listadoSatate, setListadoState}) => {
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = e => {
    const target = e.target;

    setBusqueda(target.value);

    let pelisEncontradas = listadoSatate.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1) {
      pelisEncontradas = JSON.parse(localStorage.getItem('PELIS'));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
     
    setListadoState(pelisEncontradas);
  }
  return (
    <div className="search">
        <h3>Buscador</h3>
        {noEncontrado && busqueda.length > 1 && (
          <span className='no-encontrado'></span>
        )}
        <form action="">
            <input type="text" name="busqueda" autoComplete='off' onChange={buscarPeli}></input>
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador