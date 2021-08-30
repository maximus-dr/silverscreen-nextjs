import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Props from '../Props/Props';
import PropBoolean from './PropBoolean/PropBoolean'
import PropNum from './PropNum/PropNum'
import PropSelect from './PropSelect/PropSelect';
import { PropsBody, PropsSection, PropsTitle } from './SliderPropsStyled'
import ToggleStyles from './ToggleStyles/ToggleStyles';


const SLIDER_INIT_SLIDE = 0;
const SLIDER_INTERVAL = 3000;
const SLIDER_TRANSITION = 350;
const SLIDER_TOLERANCE = 5;
const SLIDER_AXIS = 'horizontal';



export default function SliderProps(props) {

    const {componentData} = props;
    const settings = componentData.settings;
    const slides = componentData.childrenList;
    const activeComponent = useSelector(state => state.document.activeComponent);

    const [styledElement, setStyledElement] = useState('slider');

    const styles = {
        slider: componentData.styles.common,
        arrowPrev: componentData.styles.arrowPrev.common,
        arrowNext: componentData.styles.arrowNext.common,
        buttonsList: componentData.styles.buttonsList.common,
        buttons: componentData.styles.buttons.common,
        activeButton: componentData.styles.buttons.common.isActive
    }


    return (
        <>
            <PropsSection>
                <PropsTitle>Настройки</PropsTitle>
                <PropsBody>
                    <PropBoolean
                        name="arrows"
                        title="Стрелки"
                        value={settings.arrows}
                    />
                    <PropBoolean
                        name="buttons"
                        title="Кнопки"
                        value={settings.buttons}
                    />
                    <PropBoolean
                        name="swipeable"
                        title="Свайп"
                        value={settings.swipeable}
                    />
                    <PropBoolean
                        name="autoPlay"
                        title="Автопрокрутка"
                        value={settings.autoPlay}
                    />
                    <PropBoolean
                        name="infiniteLoop"
                        title="Бесконечная прокрутка"
                        value={settings.infiniteLoop}
                    />
                    <PropNum
                        name="selectedItem"
                        title="Начальный слайд"
                        min={0}
                        max={slides.length > 0 ? slides.length - 1 : 0}
                        value={settings.selectedItem || SLIDER_INIT_SLIDE}
                    />
                    <PropNum
                        name="interval"
                        title="Интервал"
                        min={300}
                        step={100}
                        value={settings.interval || SLIDER_INTERVAL}
                    />
                    <PropNum
                        name="transitionTime"
                        title="Переход"
                        min={100}
                        step={10}
                        value={settings.transitionTime || SLIDER_TRANSITION}
                    />
                    <PropNum
                        name="swipeScrollTolerance"
                        title="Чувствительность"
                        min={0}
                        step={5}
                        value={settings.swipeScrollTolerance || SLIDER_TOLERANCE}
                    />
                    <PropSelect
                        name='axis'
                        options={[{value: 'horizontal'}, {value: 'vertical'}]}
                        value={settings.axis || SLIDER_AXIS}
                    />
                </PropsBody>
            </PropsSection>

            <PropsSection>
                <PropsTitle>Стили</PropsTitle>
                <ToggleStyles
                    activeItem={styledElement}
                    setActiveItem={setStyledElement}
                />
            </PropsSection>

            <Props
                activeComponent={activeComponent}
                styles={styles[styledElement] || {}}
            />
        </>
    )
}
