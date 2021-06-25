import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';
import { StylesProvider } from '../styles';




export const SectionWrapper = styled.div`
    min-width: 100px;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    overflow: hidden;
    position: relative;

    ${props => enableOutlines(props.showOutlines, colors.outline_section)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.wrapper || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const SectionBackground = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.background || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const SectionBody = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;

    width: 100%;
    min-height: 30px;

    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.body || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
