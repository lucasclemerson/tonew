import { useState } from 'react';

function Header (){
    const [textButton, setText] = useState('Pode clicar aqui!');
    const handleMouseEnter = () => {
        setText("Clica logo!");
    };

    const showMenssege = () => {
        alert("Oi Moles, te amo!");
        handleMouseLeave();
    };

    const handleMouseLeave = () => {
        setText('Pode clicar aqui!'); 
    };
    return (
        <header class="grid my-auto text-center items-middle">
            <h1 onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouse onClick={showMenssege} 
                class="text-4xl py-5 my-16 text-cyan-400 font-bold hover:cursor-pointer hover:text-orange-500 hover:text-6xl"> {textButton}</h1>
        </header>
    )
}

export default Header


