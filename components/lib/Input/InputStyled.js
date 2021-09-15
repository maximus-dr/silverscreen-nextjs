import styled, {css, keyframes} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { stylesProvider } from '../../../styles/stylesProvider';



export const InputComponent = styled.input`
    :focus ~ label {
        bottom: 48px;
    }
    ${props => props.value.length > 0 && `
        ~ label {
            bottom: 48px;
        }
    `}

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && stylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && stylesProvider(styles.isActive)}
        `
    }}
`;
