import styled, {css} from 'styled-components';
import { colors } from '../../../core/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const CheckboxLabel = styled.label`
    ${props => enableOutlines(props.showOutlines, colors.outline_checkbox)}

    ${props =>  {
        const data = props.componentData;
        const styles = data.styles && data.styles.label || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;

export const CheckboxInput = styled.input`
    ${props =>  {
        const data = props.componentData;
        const styles = data.styles && data.styles.input || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;

export const CheckboxValue = styled.span``;
