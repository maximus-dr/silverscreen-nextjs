import styled, {css} from 'styled-components';
import { enableOutlines } from '../../core/functions/outlines';
import { colors } from '../../core/variables';
import { StylesProvider } from '../styles';


// const defaultStyles = () => {
//     return css`
//         position: ${styles && styles.position || 'absolute'};
//         width: ${styles && styles.width || '30px'};
//         height: ${styles && styles.height || '30px'};
//         background-repeat: ${styles && styles.backgroundRepeat || 'no-repeat'};
//         background-color: ${styles && styles.backgroundColor || ''};
//         background-size: ${styles && styles.backgroundSize || '100% auto'};
//         background-position-x: ${styles && styles.backgroundPositionX || '50%'};
//         background-position-y: ${styles && styles.backgroundPositionY || '50%'};
//         background-image: ${styles && styles.backgroundImage || 'none'};

//         &:before {
//             position: ${styles && styles.position || 'absolute'};
//             top: ${styles && styles.top || '0'};
//             left: ${styles && styles.left || '0'};
//         }
//     `
// }

export const IconBody = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    ${props => enableOutlines(props.showOutlines, colors.outline_icon)}

    ${props => {
        const styles = props.componentData.styles || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
