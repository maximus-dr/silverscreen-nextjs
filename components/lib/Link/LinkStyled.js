import styled, {css} from 'styled-components';
import { enableOutlines } from '../../../core/functions/outlines';
import { colors } from '../../../core/variables';
import { StylesProvider } from '../../styles';


export const LinkWrapper = styled.div`
    position: relative;
    ${props => enableOutlines(props.showOutlines, colors.outline_input)};
    ${props => {
        
        const styles = props.componentData.styles && props.componentData.styles.wrapper || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const LinkBody = styled.span`
    display: inline-block;
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.body || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
