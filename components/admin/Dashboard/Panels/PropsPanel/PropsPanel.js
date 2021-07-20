import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentSeciton from './ComponentData/ComponentSeciton';
import { PropsPanelWrapper} from './PropsPanelStyled';
import StylesSection from './Styles/Styles';



export default function PropsPanel() {

    const activeComponent = useSelector(state => state.document.activeComponent);
    

    return (
        <>
           <Panel title="Свойства">
                <PropsPanelWrapper>
                    {
                        activeComponent &&
                        <ComponentSeciton activeComponent={activeComponent} />
                    }
                    
                    <StylesSection activeComponent={activeComponent} />

                </PropsPanelWrapper>
           </Panel> 
        </>
    )
}
