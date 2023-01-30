import React, {useEffect} from 'react';

const AllCycle = () => {
    useEffect(() => {
        console.log("componente creado")

        const intervalsID=setInterval(() => {
            document.title= `${new Date()}`;
            console.log("Actualizacion del componente" )
        },1000);
        return () => {
            console.log("componente va a desaparecer ")
            document.title= 'TIempo detenido';
            clearInterval(intervalsID);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
