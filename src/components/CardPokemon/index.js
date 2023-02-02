import React from 'react';
import './style.css'

function Card(props) {

    return (

        <div className='container pokemon-container bg-warning'>
            <div className='row justify-content-center'>
                <div className='col-12 bg-danger text-light mb-3'>
                    <h1><strong>{props.nome.toUpperCase()}</strong></h1>
                    <p><strong>Id:</strong> {props.id} - <strong>Tipos:</strong>
                        {
                            props.tipo.map((item, index) => {
                                return (
                                    <span key={index}>
                                        | {item.type.name} |
                                    </span>
                                )
                            })
                        }</p>
                </div>
                <div className='col-12'>
                    <div className='row d-flex align-items-center  p-5  bg-black pokemon-row'>
                        {/* Imagem */}
                        <div className='col-lg-6 justify-content-center p-2'>
                            <img src={props.frente} alt="..." />
                        </div>
                        {/* Golpes */}
                        <div className='col-lg-6 d-flex justify-content-center pt-3'>
                            <p className='golpes'>
                                <h5 class="pb-3"><strong>Golpes</strong></h5>
                                <div className='row'>
                                    <div className='col-6 p-1'>
                                        <select className='form-select text-center'>
                                            {
                                                props.golpes.map((item, index) => {
                                                    return (
                                                        <option className='pokemon-option' key={index}>{item.move.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-6 p-1'>
                                        <select className='form-select text-center'>
                                            {
                                                props.golpes.map((item, index) => {
                                                    return (
                                                        <option className='pokemon-option' key={index}>{item.move.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-6 p-1'>
                                        <select className='form-select text-center'>
                                            {
                                                props.golpes.map((item, index) => {
                                                    return (
                                                        <option className='pokemon-option' key={index}>{item.move.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-6 p-1'>
                                        <select className='form-select text-center'>
                                            {
                                                props.golpes.map((item, index) => {
                                                    return (
                                                        <option className='pokemon-option' key={index}>{item.move.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
