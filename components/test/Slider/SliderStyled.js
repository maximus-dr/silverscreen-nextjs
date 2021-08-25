import styled from "styled-components";


export const SliderContainer = styled.div`
    width: 320px;
    height: 764px;
`;

export const SliderWrapper = styled.div`
    overflow: hidden;
`;

export const SliderOverlay = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    pointer-events: none;
    mix-blend-mode: difference;
`;

export const SliderMask = styled.div`
    z-index: 1;
    position: absolute;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    left: 50%;
    top: -112px;
    transform: translateX(-50%);
    pointer-events: none;
    background: transparent;
    box-sizing: content-box;
    box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.9);
`;
