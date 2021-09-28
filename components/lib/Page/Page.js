import React from 'react'
import { PageComponent } from './PageStyled';
import { useDispatch } from 'react-redux';
import { getChild, getComponent } from '../../../core/functions/common/components';
import { useEffect, useState } from 'react';
import { getHandler } from '../../../handlers';
import { useRouter } from 'next/router';
import { setFilters } from '../../../store/actions/filters';
import { clearURI, parseQuery } from '../../../core/functions/common/common';



export default function Page(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, dragendComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === id;
    const dispatch = useDispatch();
    const router = useRouter();

    const [allowDrop, setAllowDrop] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    const params = {
        id,
        state,
        componentData,
        isDropBox: true,
        allowDrop,
        setAllowDrop,
        setDragCounter,
        dispatch,
        mode
    }

    const checkAllowDrop = (dragendComponent, dropTarget) => {
        if (getChild(dragendComponent, dropTarget.id)) {
            return false;
        }
        if (dragendComponent.typeName === 'page') {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (dragendComponent) {
            if (dragCounter === 0) {
                setAllowDrop(false);
            }
            else if (dragendComponent) {
                setAllowDrop(checkAllowDrop(dragendComponent, componentData));
            }
        }
    }, [dragCounter, dragendComponent, componentData]);


    // проверяет фильтры в sessionStorage
    useEffect(() => {
        const queryFilter = router.query.filter;
        if (queryFilter) {
            const parsedFilters = parseQuery(queryFilter);
            dispatch(setFilters(parsedFilters));
            clearURI(router);
            sessionStorage.removeItem('filters');
        }

        const cachedFilters = sessionStorage.getItem('filters');
        if (cachedFilters) {
            const sessionFilters = cachedFilters.split(',');
            dispatch(setFilters(sessionFilters));
        }
    }, [dispatch, router]);



    return (
        <PageComponent
            {...props}
            id={id}
            componentData={componentData}
            onMouseEnter={props.onMouseEnter}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
            allowDrop={allowDrop}
            isActiveComponent={isActiveComponent}
            mode={mode}
        >
            {props.children}
        </PageComponent>
    )
}
