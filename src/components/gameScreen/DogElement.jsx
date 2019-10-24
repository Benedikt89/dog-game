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

//bluring buttons after click to inform user about successful result or not
    clickActive = () => {
        this.setState({clickOn: true}, ()=>{
            setTimeout(()=>{this.setState({clickOn: false, clickSuccess: false})}, 500)
        })
    };

    render() {
        let cx = classNames.bind(style);
        let dog1sound = new Audio(audio);

        //Style for Bg Image
        let bgDogStyle = {backgroundImage: `url(${dogImage})`};

        // Styles for fields depends from user activity
        let classNameForWrapper = cx(style.buttonWrapper, {
            success: this.state.clickOn && this.state.clickSuccess,
            error: !this.props.d.visible && this.state.clickOn && !this.state.clickSuccess,
        });

        //function react on click
        let clickable = () => {
            //If click on socket with image
            if(this.props.d.visible){
                this.setState({clickSuccess: true})
            }
            //Calling timeout function to blur socket
            this.clickActive();
            //If click on Visible, increases count
            if (this.props.d.visible && this.props.timerOn) {
                this.props.increaseCount();
                // setting time of audio track
                dog1sound.currentTime = 0;
                // start audio
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
}

export default DogElement;