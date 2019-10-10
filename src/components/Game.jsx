import React from 'react';
import GameScreen from './gameScreen/gameScreen';
import ControlPanel from './gameControls/controlPanel';
import './../App.css';

const Game = () => {
    return (
        <div>

            <GameScreen />
            <ControlPanel />
        </div>
    );
};

export default Game;