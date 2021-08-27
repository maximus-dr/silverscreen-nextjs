import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentInfo from './ComponentInfo/ComponentInfo';
import { PropsPanelWrapper} from './PanelPropsStyled';
import Props from './Props/Props';
import SliderProps from './SliderProps/SliderProps';



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

                    {
                        activeComponent.typeName === 'slider' &&
                        <>
                            <h3>Настройки </h3>
                            <SliderProps />
                            <h3>Стили</h3>
                        </>
                    }

                    {
                        activeComponent.typeName &&
                        <Props activeComponent={activeComponent} />
                    }
                </PropsPanelWrapper>
            </Panel>
        ) : (
            <Panel title="Свойства"></Panel>
        );
}
