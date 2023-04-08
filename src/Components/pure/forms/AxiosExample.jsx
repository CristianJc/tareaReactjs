import React, { useEffect, useState } from 'react';
import { getRandomUser } from '../../../services/axios-service';
const AxiosExample = () => {

    const [user, setUser] = useState(null);

        // useEffect(() => {
        //    obtainUser();
            
        // }, []);

        const obtainUser = () =>{
            getRandomUser().then((response)=>{
                if(response.status === 200){
                    setUser(response.data.results)
                }
               
            }).catch((error)=>{
                alert(`Somethin wenr wrong :${error}`);
            })
        }
        console.log(user);
    return (
        <div>
            <h1>Axios Example</h1>
        {user != null ?
            (
                <div>
               
            {/* <h2>{user.name.title} {user.name.first} {user.name.last}</h2> */}
            <h3>{user.email}</h3>
            </div>
            )
            :
            (
                <div>
                <h2> Generate a new user </h2>
                <button onClick={obtainUser}>
                    Random User
                </button>
                </div>
                )
        }
            
        </div>
    );
}

export default AxiosExample;
