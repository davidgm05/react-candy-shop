import React, { useEffect } from 'react';
import './App.css';
import Scene3DBall from './components/scene3D';


function App() {
  
  
  
    return ( 
      <>
      <div className='principal-section'>
      <div  className='containe-title-description'>
      <h1 className='title'>CandyShop</h1>
      <p className='description'>
Estamos siempre a la vanguardia, incorporando las últimas tendencias y ediciones limitadas de chucherías que harán las delicias de los más golosos. En CandyShop, nos encanta sorprender a nuestros clientes con chucherías exclusivas. Renovamos nuestra selección cada mes con artículos de temporada, colaboraciones especiales y lanzamientos limitados.</p>
      </div>
        <Scene3DBall/>
      </div>
     
      </>
  
    )
  }
  
  export default App

