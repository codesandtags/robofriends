import React from 'react';

export const Card = ({robot}) => {
    const {name, email, id, isPet} = robot;
    const imageSize = 150;
    const robotType = isPet ? 4 : 1;
    const urlImage = `https://robohash.org/${name}?size=${imageSize}x${imageSize}&set=set${robotType}`;

    return (
        <div className="tc grow bg-light-blue br3 pa2 ma3 dib bw2 shadow-5 w5 mr2">
            <img src={urlImage} alt={name}/>
            <div>
                <h2 className="f4">{name}</h2>
                <p className="ttl f6 lh-copy">{email}</p>
            </div>
        </div>
    )
}