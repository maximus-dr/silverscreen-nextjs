import React from 'react'
import { PropsWrapper } from './PropsStyled'
import PropsBorder from './PropsBorder/PropsBorder'
import PropsWidth from './PropsWidth/PropsWidth'
import PropsMargin from './PropsMargin/PropsMargin'
import PropsPadding from './PropsPadding/PropsPadding'
import PropsPosition from './PropsPosition/PropsPosition'
import PropsFont from './PropsFont/PropsFont'
import PropsBackground from './PropsBackground/PropsBackground'
import PropsEffects from './PropsEffects/PropsEffects'
import Resolutions from './ToggleStyles/Resolutions/Resolutions'


export default function Props(props) {

    const {activeComponent, componentData} = props;
    const styles = componentData.styles.common || {};

    return (
        <PropsWrapper isActive={activeComponent}>
            {/* Выбор разрешения */}
            {/* <Resolutions activeComponent={activeComponent} /> */}

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

            {/* Позиционирование */}
            <PropsPosition
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Шрифт */}
            <PropsFont
                styles={styles}
                activeComponent={activeComponent}
            />

            {/* Границы */}
            <PropsBorder
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
        </PropsWrapper>
    )
}
