import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class MostrarSeries extends Component {

  state = {
    detalles: {},
    status: false
  }

  mostrarSerie = () => {
    var idSerie = this.props.idSerie;
    var request = 'api/Series/' + idSerie;
    var url = Global.urlSeries + request;
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        detalles: response.data,
        status: true
      })
    })

  }

  componentDidMount = () => {
    this.mostrarSerie();
  }
  render() {
    return (
      <div ClassName="card" style={{ width: "18rem" }}>
        <img src={this.state.detalles.imagen} ClassName="card-img-top" alt="..." />
        <div ClassName="card-body">
          <h5 ClassName="card-title">{this.state.detalles.nombre}</h5>
          <p ClassName="card-text">IMDB: {this.state.detalles.puntuacion}</p>
          <NavLink to={'/personajes/' + this.props.idSerie}>
            <button ClassName='btn btn-success'>Personajes</button>
          </NavLink>
          <NavLink to="/"><button ClassName='btn btn-info'>Volver</button></NavLink>
        </div>
      </div>
    )
  }
}
