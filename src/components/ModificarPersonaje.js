import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {

    cajaSer = React.createRef();
    cajaPer = React.createRef();

    state = {
        series: [],
        statusSeries: false,
        serie: {},
        personajes: [],
        statusPersonajes: false,
        personaje: {},
        status: false,
        status1: false,
        statusUpdate:false

    }

    getSeries = () => {

        // var serie = this.cajaSer.current.value;
        // var personaje = this.cajaPer.current.value;
        var request = 'api/Series';
        var url = Global.urlSeries + request
        axios.get(url).then(response => {
            this.setState({
                series: response.data,
                statusSeries: true
            })
        })
    }

    getPersonajes = () => {

        var request = 'api/Personajes';
        var url = Global.urlSeries + request;
        axios.get(url).then(response => {
            this.setState({
                personajes: response.data,
                statusPersonajes: true
            })
        })
    }

    laserie = () => {

        var idSerie = this.cajaSer.current.value;
        var request = 'api/Series/' + idSerie;
        var url = Global.urlSeries +request;
        axios.get(url).then(response=>{
            this.setState({
                serie:response.data,
                status:true
            })
        })
    }

    elpersonaje = ()=>{
        var idPer = this.cajaPer.current.value
        var request = 'api/Personajes/' + idPer;
        var url = Global.urlSeries +request;
        axios.get(url).then(response=>{
            this.setState({
                personaje:response.data,
                status1:true
            })
        })
    }

    modificarPersonaje = (e) => {
        e.preventDefault();

        var serie = parseInt(this.cajaSer.current.value);
        var personaje = this.cajaPer.current.value;
        var request = 'api/Personajes/'+personaje+'/'+serie;
        var url = Global.urlSeries +request;
        console.log(url);
        axios.put(url).then(response=>{
            this.setState({
                statusUpdate:true
            })
        })
    }

    componentDidMount = () => {
        this.getSeries();
        this.getPersonajes();
    }

    render() {
        if(this.state.statusUpdate === true){
            return(
                <Navigate to={"/personajes/"+this.cajaSer.current.value}/>
            );
        }
        return (
            <div>
                <h1>yeee</h1>
                <form onSubmit={this.modificarPersonaje}>
                    <select ref={this.cajaSer}>
                        
                        {
                            this.state.statusSeries == true &&
                            this.state.series.map((serie, index) => {
                                return (
                                    <option value={serie.idSerie} key={index}>{serie.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <select ref={this.cajaPer}>
                       
                        {
                            this.state.statusPersonajes == true &&
                            this.state.personajes.map((personaje, index) => {
                                return (
                                    <option value={personaje.idPersonaje} key={index}>{personaje.nombre}</option>
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
