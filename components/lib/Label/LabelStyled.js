import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const LabelComponent = styled('span')`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
