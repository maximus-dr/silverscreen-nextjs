import React from 'react'
import { useDispatch } from 'react-redux';
import { getComponent } from '../../../core/functions/common/components';
import { ImageComponent } from './ImageStyled'
import { actionProvider } from '../../../actions';



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
        dispatch
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
            onClick={(e) => actionProvider('component', 'onClick')(e, params)}
            onMouseDown={(e) => actionProvider('component', 'onMouseDown')(e, params)}
            onDragStart={(e) => actionProvider('component', 'onDragStart')(e, params)}
            onDragEnter={(e) => actionProvider('component', 'onDragEnter')(e, params)}
            onDragLeave={(e) => actionProvider('component', 'onDragLeave')(e, params)}
            onDragOver={(e) => actionProvider('component', 'onDragOver')(e, params)}
            onDragEnd={(e) => actionProvider('component', 'onDragEnd')(e, params)}
            onDrop={(e) => actionProvider('component', 'onDrop')(e, params)}
            isActiveComponent={isActiveComponent}
        />
    )
}
