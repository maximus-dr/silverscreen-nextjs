import styled, {css} from "styled-components";
import { screens } from "../../../../core/variables/variables";
import { stylesProvider } from "../../../../styles/stylesProvider";



export const ArrowPrevStyled = styled.button`

    ${props => {
        const styles = props.styles && props.styles.common || null;

        return css`
            ${styles && stylesProvider(styles)}

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
