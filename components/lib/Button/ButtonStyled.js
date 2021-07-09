import styled, {css} from 'styled-components';
import { colors } from '../../../core/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


// const defaultStyles = (styles) => css`
//     margin-top: ${styles && styles.marginTop || '5px'};
//     margin-right: ${styles && styles.marginRight || '5px'};
//     margin-bottom: ${styles && styles.marginBottom || '5px'};
//     margin-left: ${styles && styles.marginLeft || '5px'};

//     padding-top: ${styles && styles.paddingTop || '5px'};
//     padding-right: ${styles && styles.paddingRight || '15px'};
//     padding-bottom: ${styles && styles.paddingBottom || '5px'};
//     padding-left: ${styles && styles.paddingLeft || '15px'};
//     position: ${styles && styles.position || 'relative'};
//     align-self: ${styles && styles.alignSelf || 'flex-start'};
//     font-weight: ${styles && styles.fotnWeight || '500'};
//     font-family: inherit;
//     outline: ${styles && styles.outline || 'none'};
//     border: ${styles && styles.border || 'none'};
//     border-radius: ${styles && styles.borderRadius || '4px'};
//     box-shadow: ${styles && styles.boxShadow || '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'};

//     color: ${styles && styles.color || 'rgba(0, 0, 0, 0.87)'};
//     background-color: ${styles && styles.backgroundColor || '#e0e0e0'};
//     font-size: ${styles && styles.fontSize || '13px'};
//     text-align: ${styles && styles.textAlign || 'center'};
//     text-transform: ${styles && styles.textTransform || 'uppercase'};

//     font-style: ${styles && styles.fontStyle || ''};
//     line-height: ${styles && styles.lineHeight || '1.8'};

//     cursor: ${styles && styles.cursor || 'pointer'};
//     font-size: ${styles && styles.fontSize || '13px'};
//     text-align: ${styles && styles.textAlign || 'center'};
//     text-transform: ${styles && styles.textTransform || 'uppercase'};
//     cursor: ${styles && styles.cursor || 'pointer'};
//     transition: ${'background-color 200ms, color 200ms, opacity 200ms, transform 200ms'};
// `;



export const ButtonBody = styled.button`
    font-size: 13px;
    line-height: 1.6;
    cursor: pointer;
    ${props => enableOutlines(props.showOutlines, colors.outline_checkbox)}
    ${props => {
        const styles = props.styles ? props.styles : null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;