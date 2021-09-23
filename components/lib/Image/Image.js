import React from 'react'
import { useDispatch } from 'react-redux';
import { getComponent } from '../../../core/functions/common/components';
import { ImageComponent } from './ImageStyled'
import { getHandler } from '../../../handlers';



export default function Image(props) {

    const id = props.componentData.id;
    const state = props.state;
    const {componentsData, activeComponent, mode} = state.document;
    const componentData = getComponent(componentsData, id);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const draggable = mode === 'admin' ? true : false;
    const dispatch = useDispatch();

    const params = {
        id,
        state,
        componentData,
        isDropBox: false,
        dispatch,
        mode
    }

    return (
        <ImageComponent
            id={id}
            draggable={draggable}
            componentData={componentData}
            alt={"alt"}
            src={componentData.link}
            width={componentData.width || '200px'}
            height={componentData.height || 'auto'}
            onClick={getHandler(params, 'onClick')}
            onMouseDown={getHandler(params, 'onMouseDown')}
            onDragStart={getHandler(params, 'onDragStart')}
            onDragEnter={getHandler(params, 'onDragEnter')}
            onDragLeave={getHandler(params, 'onDragLeave')}
            onDragOver={getHandler(params, 'onDragOver')}
            onDragEnd={getHandler(params, 'onDragEnd')}
            onDrop={getHandler(params, 'onDrop')}
            isActiveComponent={isActiveComponent}
        />
    )
}
