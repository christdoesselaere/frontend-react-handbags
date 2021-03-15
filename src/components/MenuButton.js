import React from 'react';

function MenuButton({disable, name }) {
    return (
        <button type="button" disabled={disable} onClick={() => console.log({name})}>{name}</button>
    );
}

export default MenuButton;