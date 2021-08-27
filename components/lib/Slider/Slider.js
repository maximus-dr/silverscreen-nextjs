import React, { useEffect } from 'react'
import { SliderEmpty, SliderWrapper } from './SliderStyled'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setActiveComponent } from '../../../store/actions/document';
import { getComponent } from '../../../core/functions/components';
import { useState } from 'react';
import Bullet from './Bullet/Bullet';
import ArrowNext from './ArrowNext/ArrowNext';
import ArrowPrev from './ArrowPrev/ArrowPrev';
import Slide from './Slide/Slide';



export default function Slider(props) {

    console.log(props.componentData);

    const {children} = props;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, props.componentData.id);
    const dispatch = useDispatch();

    const [activeItem, setActiveItem] = useState(0);
    const slider = useRef();

    const settings = {
        selectedItem: 0,
        arrows: true,
        buttons: true,
        swipeable: true,
        autoPlay: false,
        interval: 5000,
        transitionTime: 350,
        swipeScrollTolerance: 5,
        infiniteLoop: false,
        axis: 'horizontal'
    }

    const renderIndicator = (index) => {
        return (
            <Bullet
                key={index}
                isSelected={index === activeItem}
                onClick={() => {
                    slider.current.moveTo(index, activeItem);
                }}
            >
            </Bullet>
        );
    }

    const renderArrowNext = () => {
        return (
            <ArrowNext
                disabled={!settings.infiniteLoop && activeItem === children.length - 1}
                onClick={() => slider.current.increment()}
            >
                Next
            </ArrowNext>
        );
    }

    const renderArrowPrev = () => {
        return (
            <ArrowPrev
                disabled={!settings.infiniteLoop && activeItem === 0}
                onClick={() => {
                    slider.current.decrement();
                }}
            >
                Prev
            </ArrowPrev>
        );
    }

    const onSliderClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isActiveComponent) {
            dispatch(setActiveComponent(componentData))
        }
    }

    const onSliderMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isActiveComponent) {
            dispatch(setActiveComponent(componentData))
        }
    }

    const onSliderChange = (index) => {
        if (index !== activeItem) setActiveItem(index);
        if (!settings.autoPlay) {
            slider.current.clearAutoPlay();
        }
    }


    return (
        <SliderWrapper
            id={props.componentData.id}
            isActiveComponent={isActiveComponent}
            onClick={onSliderClick}
            onMouseDown={onSliderMouseDown}

        >
            {!children && <SliderEmpty>Добавьте слайды</SliderEmpty>}
            <Carousel
                {...settings}
                ref={slider}
                onChange={onSliderChange}
                showArrows={false}
                showIndicators={false}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                centerMode={false}
            >
                {children && children.map((child, i) => {
                    return (
                        <Slide key={i}>
                            {child}
                        </Slide>
                    );
                })}
            </Carousel>
            {children && children.length > 1 && renderArrowPrev()}
            {children && children.map((item, i) => renderIndicator(i))}
            {children && children.length > 1 && renderArrowNext()}
        </SliderWrapper>
    );
}
