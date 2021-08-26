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

    const {children} = props;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, props.componentData.id);
    const dispatch = useDispatch();

    const [activeItem, setActiveItem] = useState(0);
    const slider = useRef();
    console.log('slider', slider.current);

    const renderIndicator = (clickHandler, isSelected, index, label) => {
        return (
            <Bullet
                isSelected={isSelected}
                onClick={() => {
                    slider.current.moveTo(index, activeItem);
                }}
            >
                {index}
            </Bullet>
        );
    }

    const renderArrowNext = () => {
        return (
            <ArrowNext
                disabled={activeItem === children.length - 1}
                onClick={() => slider.current.increment()}
            >
                Next
            </ArrowNext>
        );
    }

    const renderArrowPrev = () => {
        return (
            <ArrowPrev
                disabled={activeItem === 0}
                onClick={() => {
                    slider.current.decrement();
                }}
            >
                Prev
            </ArrowPrev>
        );
    }

    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isActiveComponent) {
            dispatch(setActiveComponent(componentData))
        }
    }

    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isActiveComponent) {
            dispatch(setActiveComponent(componentData))
        }
    }

    const onChange = (index) => {
        if (index !== activeItem) setActiveItem(index);
        if (!settings.autoPlay) {
            slider.current.clearAutoPlay();
        }
    }

    const settings = {
        emulateTouch: true,
        showThumbs: false,
        showStatus: false,
        showArrows: true,
        showIndicators: true,
        centerMode: false,
        interval: 3000,
        autoPlay: false,
        selectedItem: 0,
        axis: 'horizontal',
        swipeable: false,
        transitionTime: 350,
        renderIndicator,
        renderArrowNext,
        renderArrowPrev
    }

    const AnimationHandler = (props, state) => {
        const transitionTime = props.transitionTime + 'ms';
        const transitionTimingFunction = 'ease-in-out';

        let slideStyle = {
            position: 'absolute',
            display: 'block',
            zIndex: -2,
            minHeight: '100%',
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
        };

        if (!state.swiping) {
            slideStyle = {
                ...slideStyle,
                WebkitTransitionDuration: transitionTime,
                MozTransitionDuration: transitionTime,
                OTransitionDuration: transitionTime,
                transitionDuration: transitionTime,
                msTransitionDuration: transitionTime,
            };
        }

        return {
            slideStyle,
            selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
            prevStyle: { ...slideStyle },
        };
    };


    return (
        <SliderWrapper
            id={props.componentData.id}
            isActiveComponent={isActiveComponent}
            onClick={onClick}
            onMouseDown={onMouseDown}

        >
            {!children && <SliderEmpty>Добавьте слайды</SliderEmpty>}
            <Carousel
                {...settings}
                ref={slider}
                onChange={onChange}
                animationHandler='fade'
            >
                {children && children.map((child, i) => {
                    return (
                        <Slide key={i}>
                            {child}
                        </Slide>
                    );
                })}
            </Carousel>
        </SliderWrapper>
    );
}
