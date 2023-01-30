// ejemplo de uso de del hook useState
// Crear un cimponente de tipo funcion y acceder a su estado a traves de un hook y ademas poder modificarlos
import React, {useState} from 'react';

const Ejemplo1 = () => {

    //valor iniciar para un contador
    const valorInicia=0;

    // valor inicial para persona
    const personaInicial={
        nombre:'Cristian',
        email:'smcumpli@gmail.com'
    }

    /**
     * queremos que el el VALORINICIAl Y PERSONAINICIAL sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente 
     * 
     * const[nombreVariable,funcionparaCambiar]= useState(valorInicial)
*/
const [contador, setContador] = useState(valorInicia);
const [persona, setPersona] = useState(personaInicial);


/**
 * Funcion para actualizar el estado privado que contiene el contador 
 */

function incrementarContador(){
    // ?funcionparaCambiar(nuevovalor)
    setContador(contador+1);
}
function reducirContador(){
    // ?funcionparaCambiar(nuevovalor)
    setContador(contador-1);
}
/**
 * funcioar para actualizar el estado de la persona en el componente
 */
function actualizarPersona(){
    setPersona({nombre:'Eduardo',email:'eduardo@grupo.com'});
}

    return (
        <div>
            <h1>**Ejemplo de useState()**</h1>
            {persona.nombre} - {persona.email}
            <h2>  <button onClick={reducirContador}> -</button> {contador} <button onClick={incrementarContador}> +</button> </h2>
            <h1>
            <button onClick={actualizarPersona}>
                actualizarPersona
            </button>
            </h1>
        </div>
    );
}

export default Ejemplo1;
