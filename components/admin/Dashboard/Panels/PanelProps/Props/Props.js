import React from 'react'
import InputNum from './InputNum/InputNum'
import { Section, Body, Header, Item, ItemKey, ItemValue, Wrapper } from './PropsStyled'
import Select from './Select/Select'
import InputText from './InputText/InputText'
import Resolutions from './ToggleStyles/Resolutions/Resolutions'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, {css} from 'styled-components'
import PropsBorder from './PropsBorder/PropsBorder'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/variables'
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
            
            {/* Типографика */}
            <PropsFont styles={styles} />
            
            {/* Фон */}
            <PropsBackground styles={styles} />
            
            {/* Эффекты */}
            <PropsEffects />
        </Wrapper>
    )
}
