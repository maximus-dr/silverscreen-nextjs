import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renderDocumentTree } from '../../../../../core/functions/render';
import Panel from '../Panel/Panel';



export default function PanelDocument(props) {

    const componentsData = useSelector(state => state.document.componentsData);
    const documentTree = renderDocumentTree(componentsData);

    return (
        <>
          <Panel title="Документ">
              <div>{documentTree}</div>
          </Panel>  
        </>
    )
}
