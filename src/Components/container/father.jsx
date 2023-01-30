import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
     const [name, setName] = useState('Cristian');
    function showMessege(text){
        alert(`Messeger from Father Component :${text}`)
    }
    function updateName(newName){
        setName(newName)
    }
    return (
        <div style={{background:'tomato', padding:'10px'}}>
            <Child name={name} send={showMessege} update={updateName}></Child>
        </div>
    );
}

export default Father;
