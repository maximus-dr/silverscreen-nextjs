import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renderDocumentTree } from '../../../../../core/functions/render';
import Panel from '../Panel/Panel';



export default function DocumentPanel(props) {

    const components = useSelector(state => state.document.components);
    const document = renderDocumentTree(components);

    return (
        <>
          <Panel title="Документ">
              <div>{document}</div>
          </Panel>  
        </>
    )
}
