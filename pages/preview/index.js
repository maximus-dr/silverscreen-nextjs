import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../../core/functions/components';
import { renderComponents } from '../../core/functions/render';
import { setMode } from '../../store/actions/document';
import { initializeStore } from '../../store/store';



export default function PreviewPage() {

    const componentsData = useSelector(state => state.document.componentsData);
    const activePage = useSelector(state => state.document.page);
    const page = activePage ? getPage(componentsData, activePage) : null;
    const components = renderComponents(page);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMode('preview'));
    })

    return (
        <div>
            {components}
        </div>
    )
}
