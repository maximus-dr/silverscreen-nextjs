import styled, {css} from 'styled-components';
import { getOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const PageBody = styled.div`

  ${props => {
    const styles = props.componentData.styles && props.componentData.styles.common || null;

    return css`
      ${props => props.isActiveComponent && getOutlines()}
      ${styles && StylesProvider(styles)}
      ${styles && styles.isActive && StylesProvider(styles.isActive)}
    `
  }}
`;
