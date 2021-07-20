import styled, {css} from 'styled-components';
import { colors, screens } from '../../../core/variables/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';



export const SectionWrapper = styled.div`

    ${props => enableOutlines(props.showOutlines, colors.outline_section)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;

        return css`
            ${styles && StylesProvider(styles)}

            @media (min-width: ${screens['screen_mobile'].minWidth}) {
                ${styles && StylesProvider(styles['screen_mobile'])}
            }

            @media (min-width: ${screens['screen_mobile_landscape'].minWidth}) {
                ${styles && StylesProvider(styles['screen_mobile_landscape'])}
            }

            @media (min-width: ${screens['screen_tablet'].minWidth}) {
                ${styles && StylesProvider(styles['screen_tablet'])}
            }

            @media (min-width: ${screens['screen_tablet_landscape'].minWidth}) {
                ${styles && StylesProvider(styles['screen_tablet_landscape'])}
            }
            
            @media (min-width: ${screens['screen_desktop'].minWidth}) {
                ${styles && StylesProvider(styles['screen_desktop'])}
            }
        `
    }}
`;
