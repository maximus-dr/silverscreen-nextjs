import React from 'react'
import Panel from '../Panel/Panel';
import DocumentTree from './DocumentTree/DocumentTree';



export default function PanelDocument(props) {

    return (
        <>
          <Panel title="Документ">
              <DocumentTree />
          </Panel>
        </>
    )
}
