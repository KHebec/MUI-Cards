import React from 'react';
import { useState, useEffect } from 'react';

function Reloj ({hora}){
    return <h3>{hora}</h3>
}

const RelojEffect = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      let temporizador;
      if (visible) {
        temporizador = setInterval(()=> {
        setHora(new Date().toLocaleTimeString())
      }, 1000);
        
      } else {
        clearInterval(temporizador)
      }
      return()=> {
        clearInterval(temporizador)
      } 
    }, [visible])


    return (
        <div>
            <h2>Reloj con hooks</h2>
            <div style={{height: "30px"}}>
                {visible && <Reloj hora={hora}/>}
            </div>
            <button onClick={()=> setVisible(true)}>Iniciar</button>
            <button onClick={()=> setVisible(false)}>Detener</button>
        </div>
    )
}

export default RelojEffect