import React from 'react'
import { useState } from 'react'
import { ScreenButton, ScreensWrapper } from './ScreensStyled'



export default function Screens(props) {


    const {screen, setScreen} = props;


    return (
        <ScreensWrapper>
            <ScreenButton 
                isActive={screen === '320'}
                onClick={() => {
                    setScreen('320');
                }}
            >
                320
            </ScreenButton>
            <ScreenButton 
                isActive={screen === '480'}
                onClick={() => {
                    setScreen('480');
                }}
            >
                480
            </ScreenButton>
            <ScreenButton 
                isActive={screen === '640'}
                onClick={() => {
                    setScreen('640');
                }}
            >
                640
            </ScreenButton>
            <ScreenButton 
                isActive={screen === '1024'}
                onClick={() => {
                    setScreen('1024');
                }}
            >
                1024
            </ScreenButton>
            <ScreenButton 
                isActive={screen === '1200'}
                onClick={() => {
                    setScreen('1200');
                }}
            >
                1200
            </ScreenButton>
        </ScreensWrapper>
    )
}
