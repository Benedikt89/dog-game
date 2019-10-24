//initialising action
const INCREASE_COUNT = 'DOG-GAME/INCREASE_COUNT';
const SET_DOG_SHOW = 'DOG-GAME/SET_DOG_SHOW';
const INCREASE_TAPS = 'DOG-GAME/INCREASE_TAPS';
const RESET_COUNT = 'DOG-GAME/RESET_COUNT';
const START_TIMER = 'DOG-GAME/START_TIMER';
const STOP_TIMER = 'DOG-GAME/STOP_TIMER';
const INCREASE_SPEED = 'DOG-GAME/INCREASE_SPEED';

//initialising state
const initialState = {
    //elements array
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
    //count ouf successful clicks on active el
    count: 0,
    //state of timer
    timerOn: false,
    maxCount: 25,
    alertDisplay: false,
    //Start Speed
    speed: 1000,
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
                dogParts: state.dogParts.map(d => {
                    if (d.id === action.index && state.timerOn) {
                        return {...d, visible: true}
                    } else {
                        return {...d, visible: false}
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
                count: 0,
                timerOn: false,
            };
        //Increase speed depends on user progress
        case INCREASE_SPEED:
            if (state.count === 7 && state.speed > 800) {
                return {
                    ...state,
                    speed: 800,
                };
            }
            if (state.count === 15 && state.speed > 600) {
                return {
                    ...state,
                    speed: 600,
                };
            }
            if (state.count === 20 && state.speed > 400) {
                return {
                    ...state,
                    speed: 450,
                };
            } else {
                return state
            }
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
const _setDogShow = (index) => ({type: SET_DOG_SHOW, index});
export const resetCount = () => ({type: RESET_COUNT});
export const _startTimer = () => ({type: START_TIMER});
export const stopTimerThunk = () => ({type: STOP_TIMER});
export const increaseSpeed = () => ({type: INCREASE_SPEED});


// THUNK CREATORS
export const runTimerThunk = () => (dispatch, getState) => {
    (function () {
        //Start Speed
        dispatch(_startTimer());
        let timer = function () {
            //randomizer for displaying active cell
            let index = Math.floor(Math.random() * 9) + 1;
            //show active cell
            dispatch(_setDogShow(index));
            //increases speed
            dispatch(increaseSpeed());
            let timerOn = getState().reducer.timerOn;
            let speed = getState().reducer.speed;
            //timer depends on speed and with defence
            if (speed >= 100 && timerOn) {
                setTimeout(timer, speed);
            }
        };
        timer();
    })();
};