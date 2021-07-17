import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renderDocumentTree } from '../../../../../core/functions/render';
import Panel from '../Panel/Panel';



export default function DocumentPanel(props) {

    const componentsData = useSelector(state => state.document.componentsData);
    const document = renderDocumentTree(componentsData);

    return (
        <>
          <Panel title="Документ">
              <div>{document}</div>
          </Panel>  
        </>
    )
}
