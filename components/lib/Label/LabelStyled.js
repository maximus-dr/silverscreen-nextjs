import styled, {css} from 'styled-components';
import { colors } from '../../../core/variables/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const LabelSpan = styled.span`
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH1 = styled.h1`
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH2 = styled.h2`
    margin: 0;
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH3 = styled.h3`
    margin: 0;
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            font-size: ${styles && styles.fontSize || '19px'};
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH4 = styled.h4`
    margin: 0;
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH5 = styled.h5`
    margin: 0;
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH6 = styled.h6`
    margin: 0;
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const InputLabel = styled.label`
    ${props => enableOutlines(props.showOutlines, colors.outline_label)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;
