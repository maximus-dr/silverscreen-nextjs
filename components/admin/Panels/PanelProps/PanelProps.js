import React from 'react'
import { useSelector } from 'react-redux'
import { getComponent } from '../../../../core/functions/components';
import Panel from '../Panel/Panel'
import ComponentInfo from './ComponentInfo/ComponentInfo';
import { PropsPanelWrapper} from './PanelPropsStyled';
import Props from './Props/Props';
import SliderProps from './SliderProps/SliderProps';



export default function PanelProps() {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const id = activeComponent && activeComponent.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);


    return activeComponent && activeComponent.typeName !== 'Document'
        ? (
            <Panel title="Свойства">
                <PropsPanelWrapper>
                    {
                        activeComponent &&
                        <ComponentInfo activeComponent={activeComponent} />
                    }

                    {
                        activeComponent.typeName === 'slider' &&
                        <SliderProps
                            activeComponent={activeComponent}
                            componentData={componentData}
                        />
                    }

                    {
                        activeComponent.typeName &&
                        <Props
                            activeComponent={activeComponent}
                            componentData={componentData}
                        />
                    }
                </PropsPanelWrapper>
            </Panel>
        ) : (
            <Panel title="Свойства"></Panel>
        );
}
