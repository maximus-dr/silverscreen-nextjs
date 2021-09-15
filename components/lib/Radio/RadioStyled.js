import styled, {css} from 'styled-components';
import { stylesProvider } from '../../../styles/stylesProvider';


export const RadioButton = styled.input`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.input || null;

        return css`
            ${styles && stylesProvider(styles)}
            ${styles && styles.isActive && stylesProvider(styles.isActive)}
        `
    }}
`;

export const RadioLabel = styled.label`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.label || null;

        return css`
            ${styles && stylesProvider(styles)}
            ${styles && styles.isActive && stylesProvider(styles.isActive)}
        `
    }}
`;
