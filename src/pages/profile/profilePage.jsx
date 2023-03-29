import React from 'react';

import { useHistory } from 'react-router-dom';
const ProfilePage = ({user}) => {

    const history= useHistory();
    const goBack=()=>{
        history.goBack();

    }
    const navigate=(path)=>{
        history.push(path);
    }

    return (
        <div>
            <h1> Your Profile</h1>
            <button onClick={()=>navigate('/tasks')} >Task</button>
            <button  onClick={goBack}>
                    Go back
                </button>
        </div>
    );
}

export default ProfilePage;
