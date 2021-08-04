import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { generateNewId, getHandler } from '../../../core/functions/components';
import { getAttrs } from '../../../core/functions/styles';
import { addComponent, addComponentToList } from '../../../store/actions/document';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, InputLabel } from './LabelStyled'



export default function Label(props) {

    const attrs = getAttrs(props.componentData);

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentData = useSelector(state => state.document.components[id]);
    const dispatch = useDispatch();


    const onDragStart = (e, componentId) => {
        e.stopPropagation();
        e.target.style.opacity = '0.4';
        const parentId = e.target.parentElement.id;
        e.dataTransfer.setData('componentId', componentId);
        e.dataTransfer.setData('parentId', parentId);
    }

    const onDragEnd = (e) => {
        e.target.style.opacity = '1';
    }

    const onDrop = (e, targetId) => {
        e.stopPropagation();
        const templateId = e.dataTransfer.getData('templateId');
        if (templateId) {
            const template = templates[templateId];
            const id = generateNewId(10);
            dispatch(addComponentToList({id, ...template}));
            dispatch(addComponent(targetId, {id, ...template}));
        }
    }


    const label = (heading) => {

        const text = componentData.value || '';
        const htmlFor = attrs && componentData.attrs['for'] || '';

        switch(heading) {
            case 'h1':
                return (
                    <LabelH1
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH1>
                );
            case 'h2':
                return (
                    <LabelH2
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH2>
                );
            case 'h3':
                return (
                    <LabelH3
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH3>
                );
            case 'h4':
                return (
                    <LabelH4
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH4>
                );
            case 'h5':
                return (
                    <LabelH5
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH5>
                );
            case 'h6':
                return (
                    <LabelH6
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </LabelH6>
                );
            case 'label':
                return (
                    <InputLabel
                        htmlFor={htmlFor}
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        onClick={getHandler(props, 'onClick')}
                    >
                        {text}
                        {props.children}
                    </InputLabel>
                );
            default:
                return (
                    <LabelSpan
                        id={id}
                        draggable
                        {...props}
                        componentData={componentData}
                        isActiveComponent={isActiveComponent}
                        {...props.handlers}
                        onClick={getHandler(props, 'onClick')}
                        onDragStart={(e) => onDragStart(e, id)}
                        onDragEnd={onDragEnd}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDrop(e, id)}
                    >
                        {text}
                        {props.children}
                    </LabelSpan>
                );
        }
    }

    return (
        <>
            {label(componentData.heading)}
        </>
    );
}
