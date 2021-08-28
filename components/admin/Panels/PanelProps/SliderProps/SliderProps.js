import React from 'react'
import PropBoolean from './PropBoolean/PropBoolean'
import PropNum from './PropNum/PropNum'
import PropSelect from './PropSelect/PropSelect';
import { PropsBody, PropsSection, PropsTitle } from './SliderPropsStyled'
import ToggleStyles from './ToggleStyles/ToggleStyles';


const SLIDER_INIT_SLIDE = 1;
const SLIDER_INTERVAL = 3000;
const SLIDER_TRANSITION = 350;
const SLIDER_TOLERANCE = 5;
const SLIDER_AXIS = 'horizontal';



export default function SliderProps(props) {
    const {componentData} = props;
    const settings = componentData.settings;
    const children = componentData.childrenList;
    console.log(componentData);

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
                        name="Начальный слайд"
                        min="1"
                        max={children.length}
                        value={settings.initItem || SLIDER_INIT_SLIDE}
                    />
                    <PropNum
                        name="Интервал"
                        min={0}
                        step={10}
                        value={settings.interval || SLIDER_INTERVAL}
                    />
                    <PropNum
                        name="Переход"
                        min={0}
                        step={10}
                        value={settings.transitionTime || SLIDER_TRANSITION}
                    />
                    <PropNum
                        name="Чувствительность"
                        min={0}
                        step={5}
                        value={settings.tolerance || SLIDER_TOLERANCE}
                    />
                    <PropSelect
                        options={[{value: 'horizontal'}, {value: 'vertical'}]}
                        value={settings.axis || SLIDER_AXIS}
                    />
                </PropsBody>
            </PropsSection>

            <PropsSection>
                <PropsTitle>Стили</PropsTitle>
                <ToggleStyles />
            </PropsSection>
        </>
    )
}
