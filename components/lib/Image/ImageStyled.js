import styled, {css} from 'styled-components';
import { colors } from '../../../core/variables/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const ImageWrapper = styled.div`
    ${props => enableOutlines(props.showOutlines, colors.outline_image)}
    ${props => {
        const styles = props.componentData.styles || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;

export const ImageBody = styled.img.attrs(props => {
    const styles = props.componentData.styles || null;

    return ({
        src: props.link ? props.link : '',
        alt: props.alt ? props.alt : '',
        width: styles && styles.width ? styles.width : '100%',
        height: styles && styles.height ? styles.height : 'auto'
    })
})`
    display: block;
    
    ${props => {
        const styles = props.componentData.styles || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
