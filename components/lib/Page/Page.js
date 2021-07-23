import React, { useContext } from 'react'
import { PageBody } from './PageStyled';
import { OutlinesContext } from '../../../context/outlinesContext';
import { useSelector } from 'react-redux';


export default function Page(props) {

  const outlines = useContext(OutlinesContext);
  const activeComponent = useSelector(state => state.document.activeComponent);
  const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;

  return (
      <PageBody 
        {...props} 
        componentData={props.componentData} 
        showOutlines={outlines}
        isActiveComponent={isActiveComponent}
      >
        {props.children}
      </PageBody>
  )
}
