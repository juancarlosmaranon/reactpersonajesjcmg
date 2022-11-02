import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global';

export default class MenuRutas extends Component {
    state = {
        series: [],
        status: false
    }

    mostrarSerie = () => {
        var request = 'api/Series'
        var url = Global.urlSeries + request;
        axios.get(url).then(response => {
            this.setState({
                series:response.data,
                status:true
            })
        })
    }

    componentDidMount=()=>{
        this.mostrarSerie();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/nuevoPersonaje">Nuevo Personaje</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/modificarPersonaje">Modificar Personaje</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Series
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            this.state.series.map((series, index) => {
                                                return (
                                                    <li key={index}><a className="dropdown-item" href={"/series/" + series.idSerie}>{series.nombre}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
