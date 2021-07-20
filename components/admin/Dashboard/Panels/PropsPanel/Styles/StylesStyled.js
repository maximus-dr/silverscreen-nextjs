import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    display: none;
    ${props => {
        return props.isActive && css`
            display: block;
        `;
    }}
`;

export const Section = styled.div`
    margin-bottom: 5px;
    border: 1px dashed black;
`

export const Header = styled.div`
    padding: 5px;
    font-weight: bold;
`;

export const Body = styled.div`
    padding: 0 5px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 2px;
`

export const ItemKey = styled.div`
    width: 120px;
`

export const ItemValue = styled.div`

`
