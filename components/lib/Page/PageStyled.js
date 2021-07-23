import styled, {css} from 'styled-components';
import { colors } from '../../../core/variables/variables';
import { enableOutlines } from '../../../core/functions/outlines';
import { StylesProvider } from '../../styles';


export const PageBody = styled.div`

  ${props => enableOutlines(props.showOutlines, colors.outline_page)}

  ${props => {
    const styles = props.componentData.styles && props.componentData.styles.common || null;

    return css`
    ${props => props.isActiveComponent && `
          outline: 2px solid #42a5f5;
          outline-offset: 5px;
          position: relative;
      `}
      ${styles && StylesProvider(styles)}
      ${styles && styles.isActive && StylesProvider(styles.isActive)}
    `
  }}
`;
