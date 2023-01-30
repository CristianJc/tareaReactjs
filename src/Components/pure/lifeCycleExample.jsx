/**
 * ejemplo de componentes de tipo de clase que dispone de los metoso de ciclo de vida
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('constructor: cuando se instacia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: justo al del montaje del componente, antes de renderizario');
        
    }

    componenteWillReciveProps(nextProsp){
        console.log('WillReciveProp: si va a recibir nuevas props');

    }

    shouldComponentUpdate(nextProsp, nextState){
        //return true o false /// controla si el componente debe o no actualizarse

    }
    componenteWillUpdate(nextProps, nextState){
        console.log('WillUpdat: justo antes de actualizarse');

    }
    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: justo despues de actualizarse')

    }
    componentWillUnmount(){
        console.log('WillUnmount: justo antes de desaparecer')
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
