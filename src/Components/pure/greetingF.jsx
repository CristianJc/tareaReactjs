import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    const [age, setAge] = useState(29);
    const birthday =()=>{
        setAge(age+1)
    }
    return (
       
              <div>
                <h1>
                Hola  {props.name} desde el componente funcional
                </h1>
                <h2>
                    tu edad es de : {age}
                </h2>
                <div>
                    <button onClick={birthday}> 
                    Cumplir Años
                    </button>
                </div> 
            </div>
       

       
    );
};


GreetingF.propTypes = {
name: PropTypes.string
};


export default GreetingF;
