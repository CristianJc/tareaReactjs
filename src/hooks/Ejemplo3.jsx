/**
 * Ejemplo de hooks
 * -useState()
 * -useContext()
 * 
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Compoente 1
 * dispone de un contexto que va a tener un valor que recibe desde el padre 
 */
const micontexto= React.createContext(null)

const Componente1 = () => {
    //lo inicializamos vacio para que se llene con los datos del padre
    const state= React.createContext(micontexto)

    return (
        <div>
            <h1>
                el Token es: {state.token}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state= useContext(micontexto);
    return (
        <div>
            <h2>
                la session es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial={
        token:'123456785',
        sesion:1
    }

    // creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData({
            token: 'JDHD1356465',
            sesion:sessionData.sesion +1
        })
    }
  return (
    <micontexto.Provider value={sessionData}>
        {/* todo lo que esta auidentro puede leer los datos de sessionData */}
        {/* ademas se seactualiza los compopende de aqui tambein los actualiza */}
        <h1>***Ejemplo de useState y useContext****</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Session</button>
    </micontexto.Provider>
  )
}


