import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MODE } from '../../../core/config/site';
import { onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop } from '../../../core/functions/admin/components';
import { getComponent, getHandler, getParent } from '../../../core/functions/components';
import { setActiveComponent, setDragendComponent, unsetActiveComponent, unsetDragendComponent, updateComponentChildrenList } from '../../../store/actions/document';
import { LabelComponent } from './LabelStyled'



export default function Label(props) {

    const id = props.componentData.id;
    const activeComponent = useSelector(state => state.document.activeComponent);
    const isActiveComponent = activeComponent && activeComponent.id === props.componentData.id;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, id);
    const dragendComponent = useSelector(state => state.document.dragendComponent);
    const dispatch = useDispatch();
    const text = componentData.value || '';
    const isDropBox = false;

    const component = {
        id,
        componentsData,
        componentData,
        activeComponent,
        dragendComponent,
        isDropBox,
        dispatch,
        setDragendComponent() {
            dispatch(setDragendComponent(componentData))
        },
        unsetDragendComponent() {
            dispatch(unsetDragendComponent())
        },
        updateComponentChildrenList(id, children) {
            dispatch(updateComponentChildrenList(id, children))
        },
        deleteComponent(id) {
            dispatch(deleteComponent(id))
        },
        addComponent(id, data) {
            dispatch(addComponent(id, data))
        },
        addComponentToActive(component) {
            dispatch(addComponentToActive(component))
        }
    }

    return (
        <LabelComponent
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
            onDragStart={(e) => onDragStart(e, component)}
            onDragEnter={(e) => onDragEnter(e, component)}
            onDragLeave={(e) => onDragLeave(e, component)}
            onDragOver={(e) => onDragOver(e, component)}
            onDragEnd={(e) => onDragEnd(e, component)}
            onDrop={(e) => onDrop(e, component)}
        >
            {text}
            {props.children}
        </LabelComponent>
    );
}
