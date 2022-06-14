import React from 'react';
import { useParams } from 'react-router-dom';
import Player from './Player';


const TempPlayer = () => {
    let id = useParams()

    return (
        <Player id={id.id} />
    );
}

export default TempPlayer;