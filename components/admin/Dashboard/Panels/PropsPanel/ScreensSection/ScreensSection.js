import React, { useState } from 'react'
import { ScreensIcon, ScreensItem, ScreensSectionBody, ScreenValue } from './ScreensSectionStyled'

const IconSmartphone = () => {
    return (
            <svg x="0px" y="0px"
            width="25px" height="25px" viewBox="0 0 35 35">
                <g>
                    <path fill="currentColor" d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
                        c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
                        c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
                        c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
                        H8.979V3.749h17.042V30.625z"/>
                </g>
            </svg>
    );
}


export function IconTablet() {
    return (
        <svg x="0px" y="0px"
                viewBox="0 0 33.994 33.994">
            <g>
                <path fill="currentColor" d="M27.125,0H6.867C5.59,0,4.562,1.033,4.562,2.309v29.377c0,1.272,1.028,2.308,2.305,2.308h20.258
                    c1.273,0,2.306-1.035,2.306-2.308V2.309C29.433,1.033,28.399,0,27.125,0z M16.997,33.129c-0.758,0-1.371-0.613-1.371-1.37
                    c0-0.758,0.613-1.372,1.371-1.372c0.756,0,1.371,0.614,1.371,1.372C18.368,32.516,17.753,33.129,16.997,33.129z M27.098,29.186
                    H6.896V2.774h20.202V29.186z"/>
            </g>
        </svg>
    )
}


export const IconDesktop = () => {
    return (
        <svg x="0px" y="0px" viewBox="0 0 512 512">
            <g>
                <g>
                    <path fill="currentColor" d="M469.333,21.333H42.667C19.146,21.333,0,40.469,0,64v298.667c0,23.531,19.146,42.667,42.667,42.667h149.381
                        c-0.448,17.018-3.698,44.24-15.902,57.094c-4.479,4.708-9.604,6.906-16.146,6.906c-5.896,0-10.667,4.771-10.667,10.667
                        c0,5.896,4.771,10.667,10.667,10.667h192c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667
                        c-6.542,0-11.667-2.188-16.125-6.896c-12.174-12.79-15.445-40.051-15.91-57.104h149.369c23.521,0,42.667-19.135,42.667-42.667V64
                        C512,40.469,492.854,21.333,469.333,21.333z M256,384.062c-11.792,0-21.396-9.604-21.396-21.396s9.604-21.396,21.396-21.396
                        s21.396,9.604,21.396,21.396S267.792,384.062,256,384.062z M42.667,320V64h426.667l0.018,256H42.667z"/>
                </g>
            </g>
        </svg>
    );
}


export default function ScreensSection() {

    const [activeItem, setActiveItem] = useState('screens_mobile');

    return (
        <>
          <ScreensSectionBody>
                <ScreensItem id="screens_mobile" activeItem={activeItem} onClick={(e) => setActiveItem(e.target.id)}>
                    <ScreensIcon style={{width: '20px', height: '25px', marginBottom: '4px'}}>
                        <IconSmartphone />
                    </ScreensIcon>
                    <ScreenValue>320px</ScreenValue>
                </ScreensItem>
                <ScreensItem id="screens_mobile_landscape" activeItem={activeItem} onClick={(e) => setActiveItem(e.target.id)}>
                    <ScreensIcon style={{width: '20px', height: '17px', transform: 'rotate(90deg)', marginRight: '3px'}}>
                        <IconSmartphone />
                    </ScreensIcon>
                    <ScreenValue>480px</ScreenValue>
                </ScreensItem>
                <ScreensItem id="screens_tablet" activeItem={activeItem} onClick={(e) => setActiveItem(e.target.id)}>
                    <ScreensIcon style={{width: '23px', height: '23px', marginBottom: '3px'}}>
                        <IconTablet />
                    </ScreensIcon>
                    <ScreenValue>640px</ScreenValue>
                </ScreensItem>
                <ScreensItem id="screens_tablet_landscape" activeItem={activeItem} onClick={(e) => setActiveItem(e.target.id)}>
                    <ScreensIcon style={{width: '23px', height: '23px', transform: 'rotate(90deg)'}}>
                        <IconTablet />
                    </ScreensIcon>
                    <ScreenValue>1024px</ScreenValue>
                </ScreensItem>
                <ScreensItem id="screens_desktop" activeItem={activeItem} onClick={(e) => setActiveItem(e.target.id)}>
                    <ScreensIcon style={{width: '30px', height: '30px'}}>
                        <IconDesktop />
                    </ScreensIcon>
                    <ScreenValue>1200px</ScreenValue>
                </ScreensItem>
            </ScreensSectionBody>  
        </>
    )
}
