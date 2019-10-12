import React from 'react';
import './../../App.css';
import dogImage from './../../asserts/dog.jpg'
import style from './DogElement.module.css'
import classNames from 'classnames/bind';
import audio from "../../asserts/dog.mp3";


class DogElement extends React.Component {
    state = {
        clickOn: false,
        clickSuccess: false,
    };
    clickActive = () => {
        this.setState({clickOn: true}, ()=>{
            setTimeout(()=>{this.setState({clickOn: false, clickSuccess: false})}, 500)
        })
    };

    render() {
        let cx = classNames.bind(style);
        let dog1sound = new Audio(audio);

        let bgDogStyle = {backgroundImage: `url(${dogImage})`};
        let classNameForWrapper = cx(style.buttonWrapper, {
            success: this.state.clickOn && this.state.clickSuccess,
            error: !this.props.d.visible && this.state.clickOn && !this.state.clickSuccess,
        });
        let clickable = () => {
            if(this.props.d.visible){
                this.setState({clickSuccess: true})
            }
            this.clickActive();
            if (this.props.d.visible && this.props.timerOn) {
                this.props.increaseCount();
                // перемотать трек в начало перед проигрыванием
                dog1sound.currentTime = 0;
                // даём команду плееру - играй
                dog1sound.play();
            }
        };

        return (
            <div onClick={clickable} className={classNameForWrapper}>
                <button
                    style={bgDogStyle}
                    className={this.props.d.visible ? style.show : style.itemDog}>
                </button>
            </div>
        );
    }
};

export default DogElement;