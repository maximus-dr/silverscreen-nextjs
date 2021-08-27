import React from 'react'
import { ToggleItem, ToggleLabel, ToggleRadio, ToggleWrapper } from './ToggleStylesStyled'



export default function ToggleStyles() {
    return (
        <ToggleWrapper>
            <ToggleItem>
                <ToggleRadio
                    id="toggle-slider"
                    type="radio"
                    name="toggle-slider-styles"
                    defaultChecked
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
                />
                <ToggleLabel
                    htmlFor="toggle-slider-button"
                >
                    Кнопка
                </ToggleLabel>
            </ToggleItem>
        </ToggleWrapper>
    )
}
