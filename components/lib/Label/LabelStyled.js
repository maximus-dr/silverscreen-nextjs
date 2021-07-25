import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';



export const LabelSpan = styled.span`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH1 = styled.h1`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH2 = styled.h2`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH3 = styled.h3`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            font-size: ${styles && styles.fontSize || '19px'};
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH4 = styled.h4`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH5 = styled.h5`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LabelH6 = styled.h6`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const InputLabel = styled.label`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `;
    }}
`;
