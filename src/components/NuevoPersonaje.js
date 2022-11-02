import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';

export default class NuevoPersonaje extends Component {

    cajaNom = React.createRef();
    cajaImg = React.createRef();
    cajaSelect = React.createRef();

    state = {
        series: [],
        personaje:{},
        status: false,
        status1: false
    }

    mostrarSerie = () => {
        var request = "api/Series";
        var url = Global.urlSeries + request;
        axios.get(url).then(response => {
            this.setState({
                series: response.data,
                status: true
            })
        })

    }

    componentDidMount = () => {
        this.mostrarSerie();


    }

    nuevoPersonaje = (e) => {
        e.preventDefault();

        var nombre = this.cajaNom.current.value;
        var imagen = this.cajaImg.current.value;
        var idSerie = parseInt(this.cajaSelect.current.value);

        var personaje = {
            nombre: nombre,
            imagen: imagen,
            idSerie: idSerie,
            idPersonaje:0
        }

        var request = 'api/Personajes';
        var url = Global.urlSeries +request;

        axios.post(url, personaje).then(response => {
            console.log("Insertado");
            this.setState({
                status1: true
            })
        })

    }

    render() {
        if(this.state.status1 === true){
            return(
                <Navigate to={"/personajes/"+this.cajaSelect.current.value}/>
            );
        }
        return (
            <div>
                <h1>klkfer</h1>
                <form onSubmit={this.nuevoPersonaje}>

                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNom}></input>
                    <label>Imagen: </label>
                    <input type="text" ref={this.cajaImg}></input>
                    <select ref={this.cajaSelect}>
                        {
                            this.state.series.map((serie, index) => {
                                return (
                                    <option value={serie.idSerie} key={index}>{serie.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <button className='btn btn-success'>Insertar Personaje</button>
                </form>
            </div>
        )
    }
}
