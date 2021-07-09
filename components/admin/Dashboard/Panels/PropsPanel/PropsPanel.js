import React from 'react'
import { useSelector } from 'react-redux'
import Panel from '../Panel/Panel'
import ComponentSeciton from './ComponentSection/ComponentSeciton';
import { PropsPanelWrapper} from './PropsPanelStyled';
import ScreensSection from './ScreensSection/ScreensSection';
import StatesSection from './StatesSection/StatesSection';
import StylesSection from './StylesSection/StylesSection/StylesSection';


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
                    
                    {/* Выбор разрешения */}
                    <ScreensSection />
                    
                    {/* Выбор состояния - :hover, :active, :focus, :checked */}
                    <StatesSection />
                    
                    <StylesSection />

                </PropsPanelWrapper>
           </Panel> 
        </>
    )
}
