import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';
import { StylesProvider } from '../styles';


// const defaultStyles = () => {
//     return css`
//         margin-top: ${styles && styles.marginTop || '0'};
//         margin-right: ${styles && styles.marginRight || '0'};
//         margin-bottom: ${styles && styles.marginBottom || '0'};
//         margin-left: ${styles && styles.marginLeft || '0'};

//         padding-top: ${styles && styles.paddingTop || '15px'};
//         padding-right: ${styles && styles.paddingRight || '15px'};
//         padding-bottom: ${styles && styles.paddingBottom || '15px'};
//         padding-left: ${styles && styles.paddingLeft || '15px'};

//         text-align: ${styles && styles.textAlign || 'left'};
//         position: ${styles && styles.position || 'relative'};
//     `
// }

export const DescriptionBody = styled.p`
    ${props => enableOutlines(props.showOutlines, colors.outline_text)}

    ${props => {

        const styles = props.componentData.styles || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
