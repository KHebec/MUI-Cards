import React from 'react';
import {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Contador = () => {
    const [contador, setcontador] = useState(0)
    const sumar = () => setcontador(contador+1)
    const restar = ()=> setcontador(contador-1)

  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "blue", color: "white", borderRadius: "5px", padding: "0% 0% 0% 35%", margin: "10% 0% 0% 0%"}}
        >
          <Typography>Clickea aqui para una sorpresa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Ups! La sorpresa era un contador</h4>
              <div style={{display: "flex", padding: "20px", justifyContent: "center"}}>
                  <button onClick={restar}>-</button>
                  <h3>{contador}</h3>
                  <button onClick={sumar}>+</button>
                  <button onClick={()=> setcontador(0)}>reset</button>
              </div>
    </Typography>
        </AccordionDetails>
      </Accordion>
  </div>
  )
}

export default Contador