import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';

const NofoundPage = () => {

    const location =useLocation();
    const history =useHistory();

    const navigate=(path)=>{
        history.push(path);
    }

    const goBack=()=>{
        history.goBack();

    }
   

   
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <button onClick={()=>navigate('/')} >
                    Go to Home
                </button>
                <button  onClick={goBack}>
                    Go back
                </button>
               
            </div>
            
        </div>
    );
}

export default NofoundPage;
