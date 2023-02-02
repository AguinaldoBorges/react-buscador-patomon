import React, { useState } from 'react';
import Header from '../Header';
import Card from '../CardPokemon';
import './style.css'

function GetPokemon() {
    const [pokemon, setPokemon] = useState([]);
    return (
        <div id='get-pokemon'>
            <Header pokemon={pokemon} setPokemon={setPokemon} />
            {!pokemon.name &&
                <div className='container mt-5'>
                    <div className='row bg-light'>
                        <div className='col align-items-center'>
                            <h1>Bem vindo(a) ao <strong className='patomon-title'>PaToMom</strong> seu buscador pokemon!</h1>
                            <h2>
                                Digite o nome do pokemon que deseja buscar
                            </h2>
                        </div>
                    </div>
                    <div className='row p-5'>
                        <div className='col align-items-center pt-3'>
                            <img src='https://2.bp.blogspot.com/-4f4B4AbTqLg/UwEckYujNiI/AAAAAAAAAO4/XAAkRmQ09tA/s1600/Ash+Kalos.png' alt='' id='treinador'/>
                        </div>
                    </div>
                </div>
            }

            {pokemon.name && <Card id={pokemon.id} nome={pokemon.name} tipo={pokemon.types} frente={pokemon.sprites.front_default} costas={pokemon.sprites.back_default} golpes={pokemon.moves} />}
        </div>
    );
}

export default GetPokemon;
