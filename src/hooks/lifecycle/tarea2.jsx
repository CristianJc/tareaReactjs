import React, {useEffect,useState} from 'react';

const Tarea2 = () => {

    const EstadoInicial={
        fecha: new Date(),
        edad:0,
        nombre:'Cristian',
        Apellido:'Cumplido'
    }
    const [state, setState] = useState(EstadoInicial);

    useEffect(() => {
        const timerID=setInterval(() =>tick(),1000);
        return () => {
            clearInterval (timerID);
        };
    },[]);
    const tick=()=>{
        setState((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
     }
    return (
        <div>
         <h2>
         Hora Actual:
         {EstadoInicial.fecha.toLocaleTimeString()}
         </h2>
         <h3>{EstadoInicial.nombre} {EstadoInicial.Apellido}</h3>
         <h1>Edad: {EstadoInicial.edad}</h1>
         </div>
    );

    
}






export default Tarea2;
