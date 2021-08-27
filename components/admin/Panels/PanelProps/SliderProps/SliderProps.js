import React from 'react'
import PropBoolean from './PropBoolean/PropBoolean'
import PropNum from './PropNum/PropNum'
import PropSelect from './PropSelect/PropSelect';
import { PropsBody, PropsHeader, PropsSection, PropsTitle } from './SliderPropsStyled'
import ToggleStyles from './ToggleStyles/ToggleStyles';



export default function SliderProps(props) {
    const {componentData} = props;

    return (
        <>
            <PropsSection>
                <PropsTitle>Настройки</PropsTitle>
                <PropsBody>
                    <PropBoolean name="Стрелки" />
                    <PropBoolean name="Индикаторы" />
                    <PropBoolean name="Свайп" />
                    <PropBoolean name="Автопрокрутка" />
                    <PropBoolean name="Бесконечная прокрутка" />
                    <PropNum
                        name="Начальный слайд"
                        min="1"
                        max={componentData.childrenList.length}
                    />
                    <PropNum
                        name="Интервал"
                        min={0}
                        step={10}
                    />
                    <PropNum
                        name="Переход"
                        min={0}
                        step={10}
                    />
                    <PropNum
                        name="Чувствительность"
                        min={0}
                        step={5}
                    />
                    <PropSelect
                        options={[{value: 'Горизонтальное'}, {value: 'Вертикальное'}]}
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
