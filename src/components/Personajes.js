import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {

    state = {
        personajes: [],
        status: false
    }

    mostrarPersonajes = () => {
        var idSerie = this.props.idSerie;
        var request = 'api/Series/PersonajesSerie/' + idSerie;
        var url = Global.urlSeries + request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                personajes: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.mostrarPersonajes();
    }

    render() {
        return (
            <div>

                <NavLink to="/">
                    <button className='btn btn-danger'>Volver</button>
                </NavLink>
                {
                    this.state.personajes.map((personaje,index)=>{
                        return (
                            <div key={index} className="card" style={{ width: "18rem" }}>
                                <img src={personaje.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{personaje.nombre}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
