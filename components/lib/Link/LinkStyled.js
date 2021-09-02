import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const LinkComponent = styled.a`
    cursor: default;
    ${props => props.isActiveComponent && getOutlines()}
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common ? props.componentData.styles.common : null;

        return css`
            ${styles && StylesProvider(styles)}
            ${styles && styles.isActive && StylesProvider(styles.isActive)}
        `
    }}
`;
