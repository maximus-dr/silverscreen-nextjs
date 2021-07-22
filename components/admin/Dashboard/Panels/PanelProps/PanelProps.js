import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentSeciton from './Info/ComponentSeciton';
import { PropsPanelWrapper} from './PanelPropsStyled';
import Props from './Props/Props';



export default function PanelProps() {

    const activeComponent = useSelector(state => state.document.activeComponent);
    

    return (
        <>
           <Panel title="Свойства">
                <PropsPanelWrapper>
                    {
                        activeComponent &&
                        <ComponentSeciton activeComponent={activeComponent} />
                    }
                    
                    <Props activeComponent={activeComponent} />

                </PropsPanelWrapper>
           </Panel> 
        </>
    )
}
