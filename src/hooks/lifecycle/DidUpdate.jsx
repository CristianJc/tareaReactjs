/**
 * Ejemplo de usos del metodo DidUpdate en componente clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';


export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("comportamiento cundiand oe componente recibe nuevoos props o un cambio en su estado")
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("comportamiento cundiand oe componente recibe nuevoos props o un cambio en su estado")
    } );
    //vacio indica que se ejecuta cuando siempre
    return (
        <div>
            
        </div>
    );
}


