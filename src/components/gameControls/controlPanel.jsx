import React from 'react';
import './../../App.css';
import {connect} from "react-redux";
import {resetCount, runTimerThunk, stopTimerThunk} from "../../redux/reducer";

const ControlPanelRender = ({count, maxCount, timerOn, runTimerThunk, stopTimerThunk, resetCount}) => {
    if ( count === maxCount) {
        stopTimerThunk();
    }
    return (
        <div >
            SCORE
            <div className="counter">
                {count}
            </div>
            {!timerOn?<button onClick={runTimerThunk}>START</button>:
            <div>
            <button onClick={stopTimerThunk}>STOP</button>
            <button onClick={()=>{resetCount(); stopTimerThunk();}}>RESTART</button>
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
        count: state.reducer.count,
        maxCount: state.reducer.maxCount,
        timerOn: state.reducer.timerOn,
    }
};

const ControlPanel = connect(mapStateToProps, {runTimerThunk, stopTimerThunk, resetCount})(ControlPanelContainer);

export default ControlPanel;