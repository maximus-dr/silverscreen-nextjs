import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { stylesProvider } from '../../../styles/stylesProvider';


export const LabelComponent = styled('span')`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;
        return css`
            ${styles && stylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${styles && styles.isActive && stylesProvider(styles.isActive)}
        `
    }}
`;
