/**
 * Ejemplo de uso de :}
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React,{useState, useEffect, useRef} from 'react';

const Ejemplo2 = () => {

    //se crean dos contadores distintos cada uno en un estado diferente
     const [contador1, setContador1] = useState(0);
     const [contador2, setContador2] = useState(0);

     //vamos a crear una refencia con un useRef() para asociar una variable
     //con un elementos del DOM del componente (vistaHML)

     const miRef=useRef();
     function incrementar1(){
        setContador1(contador1+1)

     }
     function incrementar2(){
        setContador2(contador2+1)
     }

     /**
      * Trabajosmo con el useEffect
      */
     /**
      * ? caso 1: Ejecutar SIEMPRE un snipper de codigo
      * cada vez que haya un cambio en el estado del componente 
      * se ejecutara aquello que esta dentro del useEffect() 
      */

    //  useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando refencia a el elemento del DOM')
    //     console.log(miRef)

      
    //  });

    /**
     * ? Caso 2: Ejecutar solo cuando cambie el contador 1
     * cada vez que haya un cambio en contador 1 se ejecuta lo  que diha el useEffect()
     */

// useEffect(() => {
//     console.log('Cambio en el estado del contador1')
//     console.log('Mostrando refencia a el elemento del DOM')
//     console.log(miRef)
// }, [contador1]);

 /**
     * ? Caso 3: Ejecutar solo cuando cambie el contador 1 o contador 2
     * cada vez que haya un cambio en contador 1 se ejecuta lo  que diha el useEffect()
     */
useEffect(() => {
    console.log('Cambio en el estado del contador1')
    console.log('Mostrando refencia a el elemento del DOM')
    console.log(miRef)
}, [contador1,contador2]);



    return (
        <div>
              <h1>**Ejemplo de useState(). useRef(), useEffect()**</h1>
              <h2> CONTADOR 1: {contador1}</h2>
              <h2> CONTADOR 2: {contador2}</h2>
              {/* Elemento refenciado */}
              <h3 ref={miRef}>
                Ejemplo de elementos referenciado
              </h3>

              <div>
                <button onClick={incrementar1}>Incrementar uno</button>
                <button onClick={incrementar2}>Incrementar dos</button>
              </div>
        </div>
    );
}

export default Ejemplo2;
