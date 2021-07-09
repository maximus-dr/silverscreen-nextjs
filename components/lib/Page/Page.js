import React, { useContext } from 'react'
import { PageBody } from './PageStyled';
import { OutlinesContext } from '../../../context/outlinesContext';


export default function Page(props) {

  const outlines = useContext(OutlinesContext);

  return (
      <PageBody {...props} {...props.componentData} showOutlines={outlines}>
        {props.children}
      </PageBody>
  )
}
