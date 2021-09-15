import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { stylesProvider } from '../../../styles/stylesProvider';


export const PageComponent = styled.div`

  ${props => {
    const styles = props.componentData.styles && props.componentData.styles.common || null;

    return css`
        ${props => props.isActiveComponent && getOutlines()}
        ${styles && stylesProvider(styles)}
        ${styles && styles.isActive && stylesProvider(styles.isActive)}
        ${props => props.allowDrop && `
            outline: 2px solid #42a5f5;
        `}
    `
  }}
`;

export const PageOverlay = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);

    ${props => props.isOpen && `
        display: block;
    `}
`;
