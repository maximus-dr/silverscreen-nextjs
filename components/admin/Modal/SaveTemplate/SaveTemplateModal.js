import React from 'react'
import { SaveTemplateButton, SaveTemplateButtons, SaveTemplateFixWrapper, SaveTemplateInput, SaveTemplateLabel, SaveTemplateTitle, SaveTemplateWrapper } from './SaveTemplateModalStyled'

export default function SaveTemplateModal() {
    return (
        <SaveTemplateWrapper isOpen={true}>
            <SaveTemplateFixWrapper>
                <SaveTemplateTitle>
                    Сохранить шаблон
                </SaveTemplateTitle>
                <SaveTemplateLabel>Категория</SaveTemplateLabel>
                <SaveTemplateInput />
                <SaveTemplateLabel>Название шаблона</SaveTemplateLabel>
                <SaveTemplateInput />
                <SaveTemplateButtons>
                    <SaveTemplateButton>Сохранить</SaveTemplateButton>
                    <SaveTemplateButton isCancel>Отмена</SaveTemplateButton>
                </SaveTemplateButtons>
            </SaveTemplateFixWrapper>
        </SaveTemplateWrapper>
    )
}
