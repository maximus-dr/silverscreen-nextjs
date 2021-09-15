import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { stylesProvider } from '../../../styles/stylesProvider';


export const LinkComponent = styled.a`
    cursor: default;
    ${props => props.isActiveComponent && getOutlines()}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common ? props.componentData.styles.common : null;

        return css`
            ${styles && stylesProvider(styles)}
            ${styles && styles.isActive && stylesProvider(styles.isActive)}
        `
    }}
`;
