import styled, {css} from 'styled-components';
import { colors } from '../../core/variables';
import { enableOutlines } from '../../core/functions/outlines';
import { StylesProvider } from '../styles';


export const PageBody = styled.div`

  ${props => enableOutlines(props.showOutlines, colors.outline_page)}

  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: flex-start;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  background-color: #f5f5f5;
  background-image: none;
  background-size: cover;

  ${props => {
    const styles = props.styles ? props.styles : null;

    return css`
      ${styles && StylesProvider(styles)}
      ${styles && styles.isActive && StylesProvider(styles.isActive)}
    `
  }}
`;
