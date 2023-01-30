
import React, {useRef} from 'react';

const Child = ({name, send, update}) => {
    const msgRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text= msgRef.current.value;
        alert(`Text Input: ${text}`)
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }
    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value);
    }
    return (
        <div style={{background:'cyan', padding: '30px'}}>
            <p onMouseOver={()=>console.log('mouse over perro')}>Hello, : {name} </p>
            <button onClick={pressButton}>
        buttoon 1
            </button>

            <button onClick={()=>pressButtonParams('Cris')}>
        buttoon 2
            </button>

            <input placeholder='insert text' onFocus={()=>console.log('on focus en input')} onChange={(e)=> console.log('Input Changed:',e.target.value)}
             onCopy={()=>console.log('texto coppiado')} ref={msgRef}  />

             <button onClick={()=>send(msgRef.current.value)}>
                Sends Msg
             </button>
             <div >
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new Name' />
                    <button type='submit'>
                    Update Name
                    </button>
                </form>
             </div>
        </div>
    );
}

export default Child;
