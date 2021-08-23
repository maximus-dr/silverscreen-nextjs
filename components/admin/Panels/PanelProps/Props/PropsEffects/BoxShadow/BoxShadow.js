import React from 'react'
import { BoxColumn, BoxKey, BoxSelect, BoxWrapper } from './BoxShadowStyled';

export default function BoxShadow() {
  return (
    <BoxWrapper>
      <BoxKey>box-shadow:</BoxKey>
      <BoxColumn>
        <BoxSelect>
          <option value="default">default</option>
          <option value="custom">custom</option>
          <option value="none">none</option>
        </BoxSelect>
      </BoxColumn>
    </BoxWrapper>
  )
}
