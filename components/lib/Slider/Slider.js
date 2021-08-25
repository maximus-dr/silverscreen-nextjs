import React, { useEffect } from 'react'
import { SliderEmpty, SliderWrapper } from './SliderStyled'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setActiveComponent } from '../../../store/actions/document';
import { getComponent } from '../../../core/functions/components';



export default function Slider(props) {


    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, props.componentData.id);
    const dispatch = useDispatch();

    const settings = {
        emulateTouch: true,
        showThumbs: false,
        showStatus: false,
        showArrows: true,
        showIndicators: true,
        centerMode: false,
        interval: 3000,
        autoPlay: false,
        selectedItem: 0
    }

    const slider = useRef();


    return (
        <SliderWrapper
            id={props.componentData.id}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isActiveComponent) {
                    dispatch(setActiveComponent(componentData))
                }
            }}
            onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isActiveComponent) {
                    dispatch(setActiveComponent(componentData))
                }
            }}
            isActiveComponent={isActiveComponent}
        >
            {!props.children && <SliderEmpty>Добавьте слайды</SliderEmpty>}
            <Carousel
                {...settings}
                ref={slider}
                onChange={() => {
                    if (!settings.autoPlay) {
                        slider.current.clearAutoPlay();
                    }
                }}
            >
                {props.children.map((child, i) => {
                    return (
                        <div key={i}>
                            <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '1'}}></div>
                            {child}
                        </div>
                    );
                })}
            </Carousel>
        </SliderWrapper>
    )
}
