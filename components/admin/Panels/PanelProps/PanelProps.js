import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentInfo from './ComponentInfo/ComponentInfo';
import { PropsPanelWrapper} from './PanelPropsStyled';
import Props from './Props/Props';



export default function PanelProps() {

    const activeComponent = useSelector(state => state.document.activeComponent);
    

    return activeComponent && activeComponent.typeName !== 'Document' 
        ? (
            <Panel title="Свойства">
                <PropsPanelWrapper>
                    {
                        activeComponent &&
                        <ComponentInfo activeComponent={activeComponent} />
                    }
                    
                    <Props activeComponent={activeComponent} />

                </PropsPanelWrapper>
            </Panel> 
        ) : (
            <Panel title="Свойства"></Panel>
        );
}
