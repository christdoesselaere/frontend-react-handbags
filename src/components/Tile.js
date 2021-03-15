import React from 'react';

function Tile({image, alternative, title, text1, text2}) {
    return (
        <>
            <section>
                <img src={image} alt={alternative}/>
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
            </section>
        </>
    );
}

export default Tile;