import styled, {css} from 'styled-components';
import { colors, screens } from '../../../core/variables/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';



export const SectionWrapper = styled.div`
    min-width: 100px;
    overflow: hidden;
    position: relative;

    ${props => enableOutlines(props.showOutlines, colors.outline_section)}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.wrapper || null;
        return css`
            ${'' /* ${styles && StylesProvider(styles)} */}

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

export const SectionBackground = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.background || null;
        return css`
            ${'' /* ${styles && StylesProvider(styles)} */}

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
                ${styles && StylesProvider(styles['tablet_landscape'])}
            }
            
            @media (min-width: ${screens['screen_desktop'].minWidth}) {
                ${styles && StylesProvider(styles['screen_desktop'])}
            }
        `
    }}
`;

export const SectionBody = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;

    width: 100%;

    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.body || null;
        return css`
            ${'' /* ${styles && StylesProvider(styles)} */}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}

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
