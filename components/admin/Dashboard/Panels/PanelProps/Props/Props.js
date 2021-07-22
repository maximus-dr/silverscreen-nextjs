import React from 'react'
import { Wrapper } from './PropsStyled'
import Resolutions from './ToggleStyles/Resolutions/Resolutions'
import { useSelector } from 'react-redux'
import PropsBorder from './PropsBorder/PropsBorder'
import PropsWidth from './PropsWidth/PropsWidth'
import PropsMargin from './PropsMargin/PropsMargin'
import PropsPadding from './PropsPadding/PropsPadding'
import PropsPosition from './PropsPosition/PropsPosition'
import PropsDisplay from './PropsDisplay/PropsDisplay'
import PropsFont from './PropsFont/PropsFont'
import PropsBackground from './PropsBackground/PropsBackground'
import PropsEffects from './PropsEffects/PropsEffects'



export default function Props(props) {

    const {activeComponent} = props;
    const resolution = useSelector(state => state.document.resolution && state.document.resolution || null);
    let styles = {};

    if (activeComponent && activeComponent.styles && resolution) {
        styles = activeComponent.styles[resolution] || {};
    }

    if (activeComponent && activeComponent.styles && !resolution) {
        styles = activeComponent.styles.common || {};
    }

    
    return (
        <Wrapper isActive={activeComponent}>
            {/* Выбор разрешения */}
            <Resolutions activeComponent={activeComponent} />

            {/* Типографика */}
            <PropsFont styles={styles} />

            {/* Границы */}
            <PropsBorder styles={styles} />
                
            {/* Размеры */}
            <PropsWidth styles={styles} />
            
            {/* Внешние отступы */}
            <PropsMargin styles={styles} />
            
            {/* Внутренние отступы */}
            <PropsPadding styles={styles} />
            
            {/* Позиционирование */}
            <PropsPosition styles={styles} />

            {/* Отображение */}
            <PropsDisplay styles={styles} />
            
            {/* Фон */}
            <PropsBackground styles={styles} />
            
            {/* Эффекты */}
            <PropsEffects />
        </Wrapper>
    )
}
