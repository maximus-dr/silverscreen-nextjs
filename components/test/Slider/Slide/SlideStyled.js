import styled from "styled-components";


export const SlideWrapper = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 764px;
    background: linear-gradient(180deg, #8E1795 0%, #000000 100%);
`;


export const SlideImage = styled.img`
    min-height: 448px;
    object-fit: cover;
`;

export const SlideText = styled.p`
    position: absolute;
    margin: 0;
    z-index: 100;
    color: #ffffff;
    bottom: 100px;
    text-align: center;
`;
