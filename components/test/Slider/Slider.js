import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'
import Slide from './Slide/Slide'
import { SliderMask, SliderOverlay, SliderWrapper } from "./SliderStyled";
import { useRef } from "react";
import { SlideText } from "./Slide/SlideStyled";
import { useState } from "react";


const SELECTED_ITEM = 0;
const LENGTH = 3;


export default function Slider() {

    const [transform, setTransform] = useState(0);
    const [selectedItem, setSelectedItem] = useState(SELECTED_ITEM);


    const settings = {
        emulateTouch: true,
        showThumbs: false,
        showStatus: false,
        showArrows: false,
        showIndicators: true,
        centerMode: false,
        interval: 3000,
        autoPlay: false,
        selectedItem: SELECTED_ITEM
    }

    const slider = useRef();
    const length = LENGTH;
    const text = useRef();



    return (
            <div style={{position: 'relative', overflow: 'hidden'}}>
                {/* <button onClick={() => {slider.current.decrement()}}>Prev</button>
                <button onClick={() => {
                    slider.current.increment()
                }}>
                    Next
                </button> */}
                <SliderOverlay/>
                <SliderMask />
                <SlideText ref={text} style={{transform: `translate3d(${transform}%, 0px, 0px)`}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit sequi aliquam est illum.
                    Autem, aperiam velit, tempora impedit asperiores minus assumenda vitae perferendis doloremque sapiente,
                    dolores error officiis dignissimos.
                </SlideText>
                {/* <SlideText style={{transform: `translate3d(${transform + 100}%, 0px, 0px)`}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit sequi aliquam est illum.
                    Autem, aperiam velit, tempora impedit asperiores minus assumenda vitae perferendis doloremque sapiente,
                    dolores error officiis dignissimos.
                </SlideText>
                <SlideText style={{transform: `translate3d(${transform + 200}%, 0px, 0px)`}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit sequi aliquam est illum.
                    Autem, aperiam velit, tempora impedit asperiores minus assumenda vitae perferendis doloremque sapiente,
                    dolores error officiis dignissimos.
                </SlideText> */}
                <Carousel
                    {...settings}
                    ref={slider}
                    onChange={() => {
                        slider.current.clearAutoPlay();
                        setSelectedItem(slider.current.state.selectedItem);
                        console.log(slider.current.listRef.style.transform.replace('translate3d(', '').replace(')', '').split(', ')[0].replace('%', ''));
                        setTransform(slider.current.listRef.style.transform.replace('translate3d(', '').replace(')', '').split(', ')[0].replace('%', ''));
                    }}
                    onSwipeMove={() => {
                        setTransform(slider.current.listRef.style.transform.replace('translate3d(', '').replace(')', '').split(', ')[0].replace('%', ''));
                        text.current.style.transition = '';

                    }}
                    onSwipeEnd={() => {
                        setTransform(0);
                        text.current.style.transition = 'all 0.35s ease-in-out';
                    }}
                >
                    {/* <Slide src="/img/slide.jpg" />
                    <Slide src="/img/slide.jpg" />
                    <Slide src="/img/slide.jpg" /> */}
                </Carousel>
            </div>

    )
}
