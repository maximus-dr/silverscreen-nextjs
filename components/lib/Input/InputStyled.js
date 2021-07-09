import styled, {css} from 'styled-components';
import { getStyles } from '../../../core/functions/styles';
import {enableOutlines} from '../../../core/functions/outlines';
import { colors } from '../../../core/variables';
import { StylesProvider } from '../../styles';


export const InputWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_input)};
    display: flex;
    width: 100%;
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.wrapper || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const InputBody = styled.input`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.body || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;

export const InputLabel = styled.label`
    ${props => {
        const styles = getStyles(props.componentData);

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;
