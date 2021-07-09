import React, { useState } from 'react';
import styled from 'styled-components';


const OutlineButton = styled.button`
  position: fixed;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  outline: none;
  border: none;
  color: rgb(255, 255, 255);
  padding: 5px;
  font-weight: bold;
  font-size: 13px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.87);
  }
`;


export const OutlinesContext = React.createContext();


export const Outlines = (props) => {
  
  const sessionValue = window.sessionStorage.getItem('show_outlines'); // boolean
  const [outlines, setOutlines] = useState(sessionValue);

  const showOutlines = () => {
    window.sessionStorage.setItem('show_outlines', !outlines);
    setOutlines(!outlines);
  }
  
  return (
    <>
      <OutlineButton id="outlines" onClick={showOutlines}>
        outlines
      </OutlineButton>

      <OutlinesContext.Provider value={true}>
        {props.children}
      </OutlinesContext.Provider>
    </>
    
  );
}
