import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';



export const FormComponent = styled.form`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;

        return css`
            ${styles && StylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${props => props.allowDrop && `
                outline: 2px solid #42a5f5;
            `}
        `
    }}
`;
