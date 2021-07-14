import styled, {css} from 'styled-components';
import { enableOutlines } from '../../../core/functions/outlines';
import { colors } from '../../../core/variables/variables';
import { StylesProvider } from '../../styles';


export const RadioButton = styled.input`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.input || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const RadioLabel = styled.label`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.label || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
