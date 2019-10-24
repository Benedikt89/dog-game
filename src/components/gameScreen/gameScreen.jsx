import React from 'react';
import DogElement from './DogElement';
import './../../App.css';
import {connect} from "react-redux";
import {increaseCount} from "../../redux/reducer";

const GameScreenRender = (props) => {
    //Displaying cells
    let gameButtons = props.dogParts.map(d => <DogElement
        key={d.id+1000}
        d={d}
        timerOn={props.timerOn}
        count={props.count}
        increaseCount={props.increaseCount}/>);
    return (
        <div>
            {props.alertDisplay&&<h2>VICTORY</h2>}
            {!props.alertDisplay&&<h2>GAME TAPPING DOG</h2>}
            <div className="wrapper">
                {gameButtons}
            </div>

        </div>
    );
};

class GameScreenContainer extends React.Component {
    render() {
        return <GameScreenRender {...this.props}/>
    }
}

    let mapStateToProps = (state) => {
    return {
        dogParts: state.reducer.dogParts,
        timerOn: state.reducer.timerOn,
        alertDisplay: state.reducer.alertDisplay,
        count: state.reducer.count,
    }
};

const GameScreen = connect(mapStateToProps, {increaseCount})(GameScreenContainer);

export default GameScreen;