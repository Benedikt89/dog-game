import React from 'react';
import './../../App.css';
import {connect} from "react-redux";
import {resetCount, runTimerThunk, stopTimerThunk} from "../../redux/reducer";

const ControlPanelRender = (props) => {
    if ( props.count === props.maxCount) {
        props.stopTimerThunk();
    }
    return (
        <div >
            CONTROL SCREEN
            <div className="counter">
                {props.count}
            </div>
            {!props.timerOn?<button onClick={props.runTimerThunk}>START</button>:
            <div>
            <button onClick={props.stopTimerThunk}>STOP</button>
            <button onClick={()=>{props.resetCount(); props.stopTimerThunk();}}>RESTART</button>
            </div>}
        </div>
    );
};


class ControlPanelContainer extends React.Component {
    render() {
        return <ControlPanelRender {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dogParts: state.reducer.dogParts,
        count: state.reducer.count,
        maxCount: state.reducer.maxCount,
        timerOn: state.reducer.timerOn,
    }
};

const ControlPanel = connect(mapStateToProps, {runTimerThunk, stopTimerThunk, resetCount})(ControlPanelContainer);

export default ControlPanel;