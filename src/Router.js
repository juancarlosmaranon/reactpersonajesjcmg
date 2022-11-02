import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal'
import MostrarSeries from './components/MostrarSeries'
import MenuRutas from './components/MenuRutas'
import Personajes from './components/Personajes'
import NuevoPersonaje from './components/NuevoPersonaje'
import ModificarPersonaje from './components/ModificarPersonaje'

export default class Router extends Component {
    
  render() {

    function MostrarSeriesElement(){
        var {idSerie} = useParams();
        return(
            <MostrarSeries idSerie={idSerie}/>
        )
    }
    
    function PersonajesElement(){
        var {idSerie} = useParams();
        return(
            <Personajes idSerie={idSerie}/>
        )
    }
    
    return (
      
        <BrowserRouter>
        <h1>klk</h1>
        <MenuRutas/>
            <Routes>
                <Route path='/' element={<PaginaPrincipal/>}/>
                <Route path='/series/:idSerie' element={<MostrarSeriesElement/>}/>
                <Route path='/personajes/:idSerie' element={<PersonajesElement/>}/>
                <Route path='/nuevoPersonaje' element={<NuevoPersonaje/>}/>
                <Route path='/modificarPersonaje' element={<ModificarPersonaje/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
