import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { stylesProvider } from '../../../styles/stylesProvider';



export const FormComponent = styled.form`
    ${props => {
        const styles = props.componentData.styles && props.componentData.styles.common || null;

        return css`
            ${styles && stylesProvider(styles)}
            ${props => props.isActiveComponent && getOutlines()}
            ${props => props.allowDrop && `
                outline: 2px solid #42a5f5;
            `}
        `
    }}
`;
