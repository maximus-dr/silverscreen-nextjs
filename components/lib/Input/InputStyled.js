import styled, {css, keyframes} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';



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
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
