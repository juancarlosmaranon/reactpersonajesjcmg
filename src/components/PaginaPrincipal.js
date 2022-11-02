import React, { Component } from 'react'
import imagen1 from './../assets/images/imagen1.png'

export default class PaginaPrincipal extends Component {
    
  render() {
    return (
      
        <div>
            <h1>Pagina Principal</h1>
            <img src={imagen1} width={"1000px"}/>
        </div>
    )
  }
}
