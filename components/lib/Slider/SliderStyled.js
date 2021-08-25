import styled from "styled-components";
import { getOutlines } from "../../../core/functions/outlines";



export const SliderWrapper = styled.div`

    ${props => props.isActiveComponent && getOutlines()}
`;

export const SliderEmpty = styled.div`
    min-height: 200px;
    padding-top: 84px;
    text-align: center;
    border: 1px dashed rgba(0, 0, 0, 0.7);
`;
