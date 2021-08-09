import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setResolution } from '../../../../store/actions/document';
import { ScreenButton, ScreensWrapper } from './ScreensStyled'



export default function Screens(props) {

    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);

    return (
        <ScreensWrapper>
            <ScreenButton
                isActive={resolution === '320'}
                onClick={() => {
                    dispatch(setResolution('320'));
                }}
            >
                320
            </ScreenButton>
            <ScreenButton
                isActive={resolution === '480'}
                onClick={() => {
                    dispatch(setResolution('480'));
                }}
            >
                480
            </ScreenButton>
            <ScreenButton
                isActive={resolution === '640'}
                onClick={() => {
                    dispatch(setResolution('640'));
                }}
            >
                640
            </ScreenButton>
            <ScreenButton
                isActive={resolution === '1024'}
                onClick={() => {
                    dispatch(setResolution('1024'));
                }}
            >
                1024
            </ScreenButton>
            <ScreenButton
                isActive={resolution === '1200'}
                onClick={() => {
                    dispatch(setResolution('1200'));
                }}
            >
                1200
            </ScreenButton>
        </ScreensWrapper>
    )
}
