/**
 * ejemplo de usos del metodo componentWillUnmount para componente clase
 * Ejmplo para el uso de hooks para componente funcional
 * (cuando el componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react';

export class WilllUnMount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca ')
    }
    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}


export const WilllUnMountHook = () => {

    useEffect(() => {
        //aqui noponemos nada 
        
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca ')
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}



