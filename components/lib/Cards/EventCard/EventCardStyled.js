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

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const EventCardComponent = styled.div`
    width: 272px;
    height: 536px;
    margin-bottom: 40px;
    animation: ${fadeIn} 100ms linear;
`;


export const EventPoster = styled.div`
    width: 272px;
    height: 400px;
    border-radius: 8px;
    ${props => props.link && `
        background-image: url('${props.link}');
        background-size: cover;
    `}
`;

export const EventTitle = styled.div`
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
`;

export const EventTag = styled.div`
    margin-right: 4px;
    width: 32px;
    height: 32px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
`;

export const EventTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: 12px;
`;

export const EventRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 16px 0;
`;

export const EventTechnologyIcon = styled.img`
    margin-right: 14px;
`

export const EventSubtitle = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
`;

export const EventGenre = styled.span`
    display: inline-block;
    padding-right: 6px;

    &:first-child {
        padding-left: 5px;
    }
`;
