import React, { useEffect } from 'react'
import { SliderEmpty, SliderWrapper } from './SliderStyled'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { setActiveComponent } from '../../../store/actions/document';
import { getComponent } from '../../../core/functions/components';
import { useState } from 'react';
import Button from './Button/Button';
import ArrowNext from './ArrowNext/ArrowNext';
import ArrowPrev from './ArrowPrev/ArrowPrev';
import Slide from './Slide/Slide';
import ButtonsList from './ButtonsList/ButtonsList';



export default function Slider(props) {

    const {children} = props;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, props.componentData.id);
    const buttonsStyles = componentData.styles.buttons;
    const buttonsListStyles = componentData.styles.buttonsList;
    const arrowPrevStyles = componentData.styles.arrowPrev;
    const arrowNextStyles = componentData.styles.arrowNext;
    const settings = componentData.settings;
    const dispatch = useDispatch();

    const [activeItem, setActiveItem] = useState(0);
    const slider = useRef();


    const renderButton = (index, styles) => {
        return (
            <Button
                key={index}
                styles={styles}
                isSelected={index === activeItem}
                onClick={() => {
                    slider.current.moveTo(index, activeItem);
                }}
            >
            </Button>
        );
    }

    const renderArrowNext = (styles) => {
        return (
            <ArrowNext
                styles={styles}
                disabled={!settings.infiniteLoop && activeItem === children.length - 1}
                onClick={() => slider.current.increment()}
            >
                Next
            </ArrowNext>
        );
    }

    const renderArrowPrev = (styles) => {
        return (
            <ArrowPrev
                styles={styles}
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
            componentData={componentData}

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
            {children && children.length > 1 && renderArrowPrev(arrowPrevStyles)}
            {
                children &&
                <ButtonsList styles={buttonsListStyles}>
                    {children.map((item, i) => renderButton(i, buttonsStyles))}
                </ButtonsList>
            }
            {children && children.length > 1 && renderArrowNext(arrowNextStyles)}
        </SliderWrapper>
    );
}
