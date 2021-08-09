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
import { getComponent } from '../../../../../core/functions/components'



export default function Props(props) {

    const {activeComponent} = props;
    const id = activeComponent && activeComponent.id || '';
    const resolution = useSelector(state => state.document.resolution && state.document.resolution || null);
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);

    const styles = componentData.styles.common || {};


    return (
        <Wrapper isActive={activeComponent}>
            {/* Выбор разрешения */}
            <Resolutions activeComponent={activeComponent} />

            {/* Размеры */}
            <PropsWidth
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Внешние отступы */}
            <PropsMargin
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Внутренние отступы */}
            <PropsPadding
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Границы */}
            <PropsBorder
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Отображение */}
            <PropsDisplay
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Позиционирование */}
            <PropsPosition
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Типографика */}
            <PropsFont
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Фон */}
            <PropsBackground
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Эффекты */}
            <PropsEffects
                styles={styles}
                activeComponent={activeComponent}
            />
        </Wrapper>
    )
}
