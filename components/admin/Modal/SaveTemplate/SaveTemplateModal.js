import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { generateNewId } from '../../../../core/functions/common/components';
import { get, post } from '../../../../core/rest/api';
import { API_TEMPLATES } from '../../../../core/rest/paths';
import { closeModal, setTemplates, unsetModal } from '../../../../store/actions/document';
import { SaveTemplateButton, SaveTemplateButtons, SaveTemplateFixWrapper, SaveTemplateInput, SaveTemplateLabel, SaveTemplateTitle, SaveTemplateWrapper } from './SaveTemplateModalStyled'



export default function SaveTemplateModal(props) {

    const dispatch = useDispatch();
    const activeComponent = useSelector(state => state.document.activeComponent);

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');


    const onSave = () => {
        const id = 'template' + generateNewId(10);
        const template = {
            category,
            name,
            data: {...activeComponent, id}
        }
        post(API_TEMPLATES, {template}, {'Content-Type': 'application/json'}, (res) => {
                if (res.status === 200) {
                    dispatch(closeModal());

                    get('/api/templates', {}, (res) => {
                        const templates = res.data;
                        dispatch(setTemplates(templates));
                    });
                }
            },
            (err) => {
                console.log('REQEST ERROR', err);
            }
        );
    }

    const onCancel = () => {
        dispatch(closeModal());
    }

    return (
        <SaveTemplateWrapper isOpen={props.isOpen} onMouseDown={(e) => e.stopPropagation()}>
            <SaveTemplateFixWrapper>
                <SaveTemplateTitle>
                    Сохранить шаблон
                </SaveTemplateTitle>
                <SaveTemplateLabel>Категория</SaveTemplateLabel>
                <SaveTemplateInput
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <SaveTemplateLabel>Название шаблона</SaveTemplateLabel>
                <SaveTemplateInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <SaveTemplateButtons>
                    <SaveTemplateButton
                        onClick={onSave}
                    >
                        Сохранить
                    </SaveTemplateButton>
                    <SaveTemplateButton
                        isCancel
                        onClick={onCancel}
                    >
                        Отмена
                    </SaveTemplateButton>
                </SaveTemplateButtons>
            </SaveTemplateFixWrapper>
        </SaveTemplateWrapper>
    )
}
