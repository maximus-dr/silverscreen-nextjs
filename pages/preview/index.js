import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderComponents } from '../../core/functions/render';
import { setDocumentComponentsData, setMode } from '../../store/actions/document';



export default function PreviewPage() {

    const componentsData = useSelector(state => state.document.componentsData);
    const mode = useSelector(state => state.document.mode);
    const components = renderComponents(componentsData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (mode !== 'preview') {
            dispatch(setMode('preview'));
        }
        const data = JSON.parse(localStorage.getItem('page_data'));
        if (!componentsData) {
            dispatch(setDocumentComponentsData(data));
        }
    })

    return (
        <div>
            {components}
        </div>
    )
}
