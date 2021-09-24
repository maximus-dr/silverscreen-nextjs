import styled, {css, keyframes} from 'styled-components';
import { getOutlines } from '../../../../core/functions/outlines';
import { screens } from '../../../../core/variables/variables';
import { stylesProvider } from '../../../../styles/stylesProvider';



// export const EventCardComponent = styled.div`
//     ${props => {
//         const styles = props.componentData.styles && props.componentData.styles.common || null;

//         return css`
//             ${styles && stylesProvider(styles)}
//             ${props => props.isActiveComponent && getOutlines()}
//             ${props => props.allowDrop && `
//                 outline: 2px solid #42a5f5;
//             `}

//             @media (min-width: ${screens['screen_mobile'].minWidth}) {
//                 ${styles && stylesProvider(styles['screen_mobile'])}
//             }

//             @media (min-width: ${screens['screen_mobile_landscape'].minWidth}) {
//                 ${styles && stylesProvider(styles['screen_mobile_landscape'])}
//             }

//             @media (min-width: ${screens['screen_tablet'].minWidth}) {
//                 ${styles && stylesProvider(styles['screen_tablet'])}
//             }

//             @media (min-width: ${screens['screen_tablet_landscape'].minWidth}) {
//                 ${styles && stylesProvider(styles['screen_tablet_landscape'])}
//             }

//             @media (min-width: ${screens['screen_desktop'].minWidth}) {
//                 ${styles && stylesProvider(styles['screen_desktop'])}
//             }
//         `
//     }}
// `;

export const EventCardComponent = styled.div`
    width: 272px;
    height: 536px;
    margin-right: 25px;
    margin-bottom: 25px;
    background-color: #333333;
`;


export const EventPoster = styled.div`
    width: 272px;
    height: 400px;
    ${props => props.link && `
        background-image: url('${props.link}');
        background-size: cover;
    `}
`;
