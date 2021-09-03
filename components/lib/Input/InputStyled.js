import styled, {css, keyframes} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';

const autofill = keyframes`
    to {
      color: inherit;
      background: transparent;
    }
`


export const InputComponent = styled.input`

    animation: ${autofill} 0ms;

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
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
