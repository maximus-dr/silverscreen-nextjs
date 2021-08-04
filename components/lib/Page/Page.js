import React from 'react'
import { PageBody } from './PageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { generateNewId } from '../../../core/functions/components';
import { addComponent, deleteComponent, addComponentToList, unsetActiveComponent, setActiveComponent } from '../../../store/actions/document';
import { templates } from '../../admin/Panels/PanelDocument/DocumentTree/DocumentTree';
import { MODE } from '../../../core/config/site';



export default function Page(props) {

  const id = props.componentData.id;
  const activeComponent = useSelector(state => state.document.activeComponent);
  const isActiveComponent = activeComponent && activeComponent.id === id;
  const componentData = useSelector(state => state.document.components[id]);
  const components = useSelector(state => state.document.components);
  const dispatch = useDispatch();

  const onDrop = (e, targetId, componentsList) => {
    e.stopPropagation();
    const componentId = e.dataTransfer.getData('componentId');
    const parentId = e.dataTransfer.getData('parentId');
    const templateId = e.dataTransfer.getData('templateId');
    if (targetId === componentId) return;
    if (targetId === parentId) return;
    if (componentId) {
        if (activeComponent && componentId === activeComponent.id) {
            dispatch(unsetActiveComponent());
        }
        const component = componentsList[componentId];
        dispatch({type: 'UPDATE_COMPONENTS_LIST', componentId, parentId, targetId, component});
        dispatch(deleteComponent(componentId));
        dispatch(addComponent(targetId, component));
        if (activeComponent && componentId === activeComponent.id) {
            dispatch(setActiveComponent(component));
        }
    }
    if (templateId) {
        const template = templates[templateId];
        const id = generateNewId(10);
        dispatch(addComponentToList(targetId, {id, ...template}));
        dispatch(addComponent(targetId, {id, ...template}));
    }
  }

  return (
      <PageBody
	    id={id}
        {...props}
        componentData={componentData}
        isActiveComponent={isActiveComponent}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, props.componentData.id, components)}
        onClick={(e) => {
            if (MODE === 'admin') {
                e.stopPropagation();
                if (activeComponent && activeComponent.id === id) {
                    dispatch(unsetActiveComponent());
                    return;
                }
                dispatch(setActiveComponent(props.componentData));
            }
        }}
      >
        {props.children}
      </PageBody>
  )
}
