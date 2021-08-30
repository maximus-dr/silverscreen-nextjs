import React from 'react'
import { ToggleItem, ToggleLabel, ToggleRadio, ToggleWrapper } from './ToggleStylesStyled'



export default function ToggleStyles(props) {

    const {activeItem, setActiveItem} = props;
    console.log(activeItem);
    return (
        <ToggleWrapper>
            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider"
                    type="radio"
                    name="toggle-slider-styles"
                    title="slider"
                    checked={activeItem === 'slider'}
                    onChange={() => {setActiveItem('slider')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider"
                >
                    Слайдер
                </ToggleLabel>
            </ToggleItem>

            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider-arrow-prev"
                    type="radio"
                    name="toggle-slider-styles"
                    title="arrowPrev"
                    checked={activeItem === 'arrowPrev'}
                    onChange={() => {setActiveItem('arrowPrev')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider-arrow-prev"
                >
                    Стрелка назад
                </ToggleLabel>
            </ToggleItem>

            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider-arrow-next"
                    type="radio"
                    name="toggle-slider-styles"
                    title="arrowNext"
                    checked={activeItem === 'arrowNext'}
                    onChange={() => {setActiveItem('arrowNext')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider-arrow-next"
                >
                    Стрелка вперед
                </ToggleLabel>
            </ToggleItem>

            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider-buttons-list"
                    type="radio"
                    name="toggle-slider-styles"
                    title="buttonsList"
                    checked={activeItem === 'buttonsList'}
                    onChange={() => {setActiveItem('buttonsList')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider-buttons-list"
                >
                    Список кнопок
                </ToggleLabel>
            </ToggleItem>

            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider-button"
                    type="radio"
                    name="toggle-slider-styles"
                    title="buttons"
                    checked={activeItem === 'buttons'}
                    onChange={() => {setActiveItem('buttons')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider-button"
                >
                    Кнопка
                </ToggleLabel>
            </ToggleItem>

            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider-active-button"
                    type="radio"
                    name="toggle-slider-styles"
                    title="buttons"
                    checked={activeItem === 'activeButton'}
                    onChange={() => {setActiveItem('activeButton')}}
                />
                <ToggleLabel
                    htmlFor="toggle-slider-active-button"
                >
                    Активная кнопка
                </ToggleLabel>
            </ToggleItem>
        </ToggleWrapper>
    )
}
