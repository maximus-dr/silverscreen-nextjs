import React from 'react';
import { SelectionContainer, SelectTitle, Select, Option, LocationIcon, SelectText } from './PlaceSelectionStyled';


export default function PlaceSelection(props) {

  return (
    <SelectionContainer>
      <SelectTitle>
        <LocationIcon>
          <svg id="marker-place-svg" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.05263L18 1L9.94737 18L8.15789 10.8421L1 9.05263Z" stroke="#d40754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </LocationIcon>
        <SelectText>
          Минск
        </SelectText>
      </SelectTitle>
      
      <Select>
          <Option>
            Минск
          </Option>
          <Option>
            Гродно
          </Option>
      </Select>
    </SelectionContainer>
  );
};
