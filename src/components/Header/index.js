import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function Header(props) {

  const api = "https://pokeapi.co/api/v2/pokemon/"

  const [search, setSearch] = useState('');
  const [erro, setErro] = useState(false);

  async function getPokemon() {
    if (search === '') {
      setErro(true)
      setTimeout(() => {
        setErro(false)
      }, 4000);
    } else {
      await axios.get(api + search)
        .then((response) => {
          props.setPokemon(response.data);
          console.log(props.pokemon.moves);
        })
        .catch((err) => {
          console.log(err);
          setErro(true)
          setTimeout(() => {
            setErro(false)
          }, 4000);
        })
    }

  }

  return (
    <div id='menu'>
      <nav className="navbar navbar-expand-lg bg-danger text-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#menu">PaToMon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

              </li>
            </ul>
            <div className='p-2 pt-0 pb-0'>
              <input className="form-control me-2" type="search" placeholder="Digite o nome do pokemon" aria-label="Search" value={search.toLowerCase()} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className="btn btn-warning" onClick={getPokemon}>Buscar Pokemon</button>
          </div>
        </div>
      </nav>

      {erro &&
        <div class="alert alert-danger text-xlg" role="alert">
          O campo está vazio ou o nome do pokemon está incorreto. Tente novamente!
        </div>
      }
    </div>
  );
}

export default Header;