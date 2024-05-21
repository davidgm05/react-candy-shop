import React, { useEffect } from 'react';
import './App.css';
import Scene3DBall from './components/scene3D';
import PrincipalSection from './components/principalSection';


function App() {
  
  
  
    return ( 
      <>
      <div>
       <div className='principal-section'>
        <PrincipalSection />
        <Scene3DBall/>
       </div>
       <div className='second-section'>
       <SecondSection />
       </div>
      </div>
      </>
  
    )
  }
  
  export default App

