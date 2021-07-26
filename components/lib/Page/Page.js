import React from 'react'
import { PageBody } from './PageStyled';
import { useSelector } from 'react-redux';


export default function Page(props) {


  const id = props.componentData.id;
  const activeComponent = useSelector(state => state.document.activeComponent);
  const isActiveComponent = activeComponent && activeComponent.id === id;
  const componentData = useSelector(state => state.document.components[id]);

  return (
      <PageBody 
        {...props} 
        componentData={componentData} 
        isActiveComponent={isActiveComponent}
      >
        {props.children}
      </PageBody>
  )
}
