//initialising action
const INCREASE_COUNT = 'INCREASE_COUNT';
const SET_DOG_SHOW = 'SET_DOG_SHOW';
const INCREASE_TAPS = 'INCREASE_TAPS';
const RESET_COUNT = 'RESET_COUNT';
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';

//initialising state
const initialState = {
    dogParts: [
        {
            id: 1,
            count: 0,
            visible: false,
        },
        {
            id: 2,
            count: 0,
            visible: false,
        },
        {
            id: 3,
            count: 0,
            visible: false,
        },
        {
            id: 4,
            count: 0,
            visible: false,
        },
        {
            id: 5,
            count: 0,
            visible: false,
        },
        {
            id: 6,
            count: 0,
            visible: false,
        },
        {
            id: 7,
            count: 0,
            visible: false,
        },
        {
            id: 8,
            count: 0,
            visible: false,
        },
        {
            id: 9,
            count: 0,
            visible: false,
        },
    ],
    count: 0,
    timerOn: false,
    maxCount: 25,
    alertDisplay: false,
    totalTimeFromSpeedUp: 0,
    tap: 0,
};

//reducer
let counterReducer = (state = initialState, action) => {
    let newCount;

    switch (action.type) {
        case INCREASE_TAPS:
            let newtap = state.tap + 1;
                return {
                    ...state,
                    tap: parseInt(newtap),
                };
        case SET_DOG_SHOW:
            return {
                ...state,
                dogParts: state.dogParts.map(d=> {
                    if (d.id === action.index && state.timerOn) {
                        return d = {...d, visible: true}
                    } else {
                        return d = {...d, visible: false}
                    }
                })
            };
        case RESET_COUNT:
                return {
                    ...state,
                    count: 0,
                    alertDisplay: false,
                };
        case START_TIMER:
            return {
                ...state,
                timerOn: true
            };
        case STOP_TIMER:
            return {
                ...state,
                timerOn: false,
            };
        case INCREASE_COUNT:
            newCount = state.count + 1;
            if (newCount <= state.maxCount) {
                return {
                    ...state,
                    count: parseInt(newCount),
                    alertDisplay: false,
                };
            } else {
                return {
                    ...state,
                    alertDisplay: true,
                    timerOn: false,
                };
            }
        default:
            return state;
    }
};

export default counterReducer;

//action creators
export const increaseCount = () => ({type: INCREASE_COUNT});
export const _increaseTaps = () => ({type: INCREASE_TAPS});
const _setDogShow = (index) => ({type: SET_DOG_SHOW, index});
export const resetCount = () => ({type: RESET_COUNT});
export const _startTimer = () => ({type: START_TIMER});
export const stopTimerThunk = () => ({type: STOP_TIMER});


// THUNK CREATORS
export const runTimerThunk = () => (dispatch, getState) => {
    (function () {
        let speed = 1000;
        dispatch(_startTimer());
        let timer = function() {
            let increaseSpeed = function() {
                const count = getState().reducer.count;
                if (count === 5 && speed > 700){
                    speed = 700
                }
                if (count === 10 && speed > 500){
                    speed = 500
                }
                if (count === 15 && speed > 300){
                    speed = 300
                }
            };
            //do your thing here
            let index = Math.floor(Math.random() * 9)+1;
            dispatch(_setDogShow(index));
            dispatch(_increaseTaps());
            increaseSpeed();
            let timerOn = getState().reducer.timerOn;
            if (speed >= 40 && timerOn) {
                setTimeout(timer, speed);
            }
        };
        timer();
    })();
};