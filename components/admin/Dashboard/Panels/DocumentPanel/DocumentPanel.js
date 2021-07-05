import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Panel from '../Panel/Panel';



export default function DocumentPanel(props) {

    const document = useSelector(state => state.document.tree);

    return (
        <>
          <Panel title="Документ">
              <h2>Tree</h2>
          </Panel>  
        </>
    )
}
