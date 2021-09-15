import styled, {css} from "styled-components";
import { getOutlines } from "../../../core/functions/outlines";
import { screens } from "../../../core/variables/variables";
import { stylesProvider } from "../../../styles/stylesProvider";



export const SliderWrapper = styled.div`

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;

        return css`
            ${styles && stylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${props => props.allowDrop && `
                outline: 2px solid #42a5f5;
            `}

            @media (min-width: ${screens['screen_mobile'].minWidth}) {
                ${styles && stylesProvider(styles['screen_mobile'])}
            }

            @media (min-width: ${screens['screen_mobile_landscape'].minWidth}) {
                ${styles && stylesProvider(styles['screen_mobile_landscape'])}
            }

            @media (min-width: ${screens['screen_tablet'].minWidth}) {
                ${styles && stylesProvider(styles['screen_tablet'])}
            }

            @media (min-width: ${screens['screen_tablet_landscape'].minWidth}) {
                ${styles && stylesProvider(styles['screen_tablet_landscape'])}
            }

            @media (min-width: ${screens['screen_desktop'].minWidth}) {
                ${styles && stylesProvider(styles['screen_desktop'])}
            }
        `
    }}
`;

export const SliderEmpty = styled.div`
    min-height: 200px;
    padding-top: 84px;
    text-align: center;
    border: 1px dashed rgba(0, 0, 0, 0.7);
`;
