import styled, { css } from 'styled-components';


export const SelectionContainer = styled.div`
  position: relative;  
  display: block;
  width: 90px;
  flex: 1 0 auto;
  margin-top: -2.3px;
  user-select: none;
  transition: opacity 0.2s ease;


  @media(max-width: '999px') {
    flex: 0 0 auto;
    margin-right: 20px;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: #ffffff;
    }

    ${props => props.isOpen && css`
    border-color: #ffffff`}
  }
`;

export const SelectTitle = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 25px;
  min-width: 75px;
  min-height: 22px;
  transition: color 0.2s ease;
  cursor: pointer;

  & svg#marker-place-svg {
    width: 17px;
    height: 17px;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #ffffff;

    & * {
      opacity: 1;
    }
  }

  ${props => props.isActive && css`
    color: #ffffff;
    opacity: 1;

    & * {
      opacity: 1;
    }
  `}

  @media(max-width: '999px') {
    padding: 14px 10px;
    padding-right: 25px;
  }
`;

export const LocationIcon = styled.g`
  position: absolute;
  top: 5px;
  right: 0;
  line-height: 0;

  @media(max-width: '999px') {
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

export const SelectText = styled.span`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  cursor: pointer;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 102px;
  top: 32px;
  left: -20px;
  background-color: #EFEFEF;
  padding: 8px 2px;
  border-radius: 0;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background-color: #C5375F;
    width: 100%;
  }

  @media (max-width: '999px') {
    top: 43px;
    left: -7px;
  }
`;

export const Option = styled.div`
  position: relative;
  width: 100%;
  padding: 6px;
  text-align: center;
  color: #232325;
  transition: color 0.2s ease;
  cursor: pointer;
  font-weight: 500;
  font-style: normal;

  &:hover {
    color: #1c9cdf;
  }


  & svg {
    display: none;
    position: absolute;
    left: 8px;
    top: 14px;
  }
`;
