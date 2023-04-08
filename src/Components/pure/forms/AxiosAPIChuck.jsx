import React, {useState,useEffect} from 'react';
import { getChuckJokes } from '../../../services/axios-service';
import { IconButton } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const AxiosAPIChuck = () => {

    const [jokes, setJokes] = useState("");
    const [like, setLike] = useState(0);
    const [dislike, setDisike] = useState(0);

useEffect(() => {
    obtainJokes();
}, []);
   const  obtainJokes = ()=>{
    getChuckJokes().then((response)=>{
    setJokes(response.data);
    console.log(response);
    }).catch()
    }

    const update =(_value)=>{
        if(_value ===1){
            setLike(like+1);

        }else{
            setDisike(dislike+1);
        }
    }
    return (
        <div>
            <h1> Jokes The Chuck Norris</h1>
            <h2> Number the jokes Likes {like} and dislike {dislike} </h2>
            <span>
                {jokes.value}
            </span>
        <div>
            <button onClick={obtainJokes}>
                New Joke
            </button>
            </div>
            <div>
            <IconButton onClick={()=>update(1)} >
                <ThumbUpIcon />
            </IconButton>
            <IconButton onClick={()=>update(2)}>
                <ThumbDownAltIcon />
            </IconButton>
            </div>
        </div>
    );
}

export default AxiosAPIChuck;
