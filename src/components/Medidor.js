import React from 'react';
import {useState, useEffect} from "react";



const Medidor = () => {
        //estado inicial 
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  const adaptador =() => setwindowWidth(window.innerWidth)
  
  useEffect(() => {
                          //al mover el navegador detecta el resize, el tamaño.
   window.addEventListener("resize", adaptador)
                                    //ejecuta adaptador y esto actualiza la variable de estado inicial
    return() => {
      window.removeEventListener("resize", adaptador)}
      //desmontaje
  }, [windowWidth])


  return (
    <div >
      <h2>{windowWidth}px</h2>
    </div>
  )
}


export default Medidor

