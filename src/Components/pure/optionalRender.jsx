import React, {useState} from 'react';

let red =0;
let green = 200;
let blue = 200;
const loggedStyle ={
    backgroundColor: `rgb(${red},${green}, ${blue})`,
    color: 'while',
    fontWeigth: 'bold'
  
   }
   const unloggedStyle ={
    backgroundColor:'tomato',
    color: 'while',
    fontWeigth: 'bold'
   }
//login  logunt buttons
const LoginButton =({LoginAction, propStye}) => {
    return(
        <button style={propStye} onClick={LoginAction}>Login</button>
    )
}

const LogoutButton =({LogoutAction,propStye}) => {
    return(
        <button style={propStye} onClick={LogoutAction}>Logout</button>
    )
}
const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessege, setNMessege] = useState(0);

//    const  updateAccess = () => {
//     setAccess(!access);
//    }

   const loginAction =()=>{
    setAccess(true);
    }
    const logoutAction =()=>{
        setAccess(false);
        }

   let optionalbutton;
    
//    if(access){
//     optionalbutton= <button onClick={updateAccess}>Logout</button> 
//    } else { optionalbutton = <button onClick={updateAccess}>Login</button>} 

   if(access){
    optionalbutton= <LogoutButton propStye={unloggedStyle} LogoutAction={logoutAction} >Logout</LogoutButton> 
   } else { optionalbutton = <LoginButton propStye={ loggedStyle} LoginAction={loginAction}>Login</LoginButton>} 


  
   //Unread Messges 
   let addMessages =()=>{
    setNMessege(nMessege+1);
   }
    return (
        <div>

        {/* optional button */}
           {optionalbutton}
           {/* N Messeges unread */}
           {/* {nMessege > 0  &&  nMessege === 1 && <p>You have : { nMessege} new Messege..</p>}
           {nMessege > 1  && <p>You have : { nMessege} new Messeges..</p>}
           {nMessege === 0  && <p>There are no new Messeges</p>}
           <button onClick={addMessages}>Add nuw Messeges</button> */}
           {/* Ternay Operator */}
           {access ? (<div>{nMessege > 0 ? <p>You have Ternay : { nMessege} new Messege{nMessege >1 ? 's': null }..</p> : <p>There are no new Messeges</p> }
         
         <button onClick={addMessages}>{nMessege === 0 ? 'add your first messege': 'add new Messege'}</button></div>
): null

           }

           
        </div>
    );
}

export default OptionalRender;
