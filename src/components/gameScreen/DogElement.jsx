import React from 'react';
import './../../App.css';
import dogImage from './../../asserts/dog.jpg'
import style from './DogElement.module.css'
import audio from "../../asserts/dog.mp3";

const DogElement = ({d, timerOn, increaseCount, count}) => {
    let dog1sound = new Audio(audio);
    let styleItem = style.item;
    let clickable = () => {
        if (d.visible && timerOn) {
            increaseCount();
            // перемотать трек в начало перед проигрыванием
            dog1sound.currentTime = 0;
            // даём команду плееру - играй
            dog1sound.play();
            styleItem = style.itemSuccess;
        }
    };
    return (

        <div onClick={clickable} className={styleItem}>
            <img src={dogImage} className={d.visible ? style.show : style.photo}/>
        </div>
    );
};

export default DogElement;