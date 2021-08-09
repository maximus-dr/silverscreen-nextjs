import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { OutlinesContext } from '../../../context/outlinesContext'
import { getComponent, getHandler } from '../../../core/functions/components';
import { setDragendComponent } from '../../../store/actions/document';
import { ImageBody, ImageWrapper } from './ImageStyled'


export default function Image(props) {

    const {id} = props;
    const outlines = useContext(OutlinesContext);
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);

    const onDragStart = (e, componentId) => {
        dispatch(setDragendComponent(componentData));
        e.stopPropagation();
        e.target.style.opacity = '0.4';
        e.dataTransfer.setData('componentId', componentId);
        e.dataTransfer.effectAllowed = 'move';
    }

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
    }

    const onDragOver = (e) => {
        e.dataTransfer.dropEffect =  dragendComponent && dragendComponent.id === id ? 'move' : 'none';
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <ImageWrapper
            {...props}
            {...props.componentData}
            showOutlines={outlines}
            onClick={getHandler(props, 'onClick')}
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
        >
            <ImageBody
                {...props}
                {...props.componentData}
            />
            {props.children}
        </ImageWrapper>
    )
}
