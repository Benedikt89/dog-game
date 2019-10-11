import React from 'react';
import './../../App.css';
import dogImage from './../../asserts/dog.jpg'
import style from './DogElement.module.css'
import classNames from 'classnames/bind';
import audio from "../../asserts/dog.mp3";


const DogElement = ({d, timerOn, increaseCount, count}) => {
    let cx = classNames.bind(style);
    let dog1sound = new Audio(audio);

    let className = cx(style.item, {
        inProgress: d.visible && timerOn,
        error: !d.visible,
        disabled: !timerOn,
    });
    let clickable = () => {
        if (d.visible && timerOn) {
            increaseCount();
            // перемотать трек в начало перед проигрыванием
            dog1sound.currentTime = 0;
            // даём команду плееру - играй
            dog1sound.play();
        }
    };
    return (

        <button onClick={clickable} className={className}>
            <img src={dogImage} className={d.visible ? style.show : style.photo}/>
        </button>
    );
};

export default DogElement;