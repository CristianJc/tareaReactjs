/**
 * ejemplo de usos de ciclo de vida del metodo en componete clase y el hook del cicloi de vida del componente funcional
 */

import React, { Component,useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }
    render() {
        return (
            <div>
               <h1>
                    DidMount
                </h1>  
            </div>
        );
    }
}


export const DidMountHook =()=> {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
       
    }, []);
    //los corchetes indica una sola vez
        return (
            <div>
               
            </div>
        );
    
}

