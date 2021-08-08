import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MODE } from '../../../core/config/site';
import { generateNewId, getComponent, getHandler } from '../../../core/functions/components';
import { getAttrs } from '../../../core/functions/styles';
import { setActiveComponent, setDragendComponent, unsetActiveComponent } from '../../../store/actions/document';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { LabelSpan, LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, InputLabel } from './LabelStyled'



export default function Label(props) {

    const attrs = getAttrs(props.componentData);

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();


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
                        onClick={(e) => {
                            getHandler(props, 'onClick')();
                            if (MODE === 'admin') {
                                e.stopPropagation();
                                if (activeComponent && activeComponent.id === id) {
                                    dispatch(unsetActiveComponent());
                                    return;
                                }
                                dispatch(setActiveComponent(props.componentData));
                            }
                        }}
                        onDragStart={(e) => onDragStart(e, id)}
                        onDragEnd={onDragEnd}
                        onDragOver={onDragOver}
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
