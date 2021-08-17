import React from 'react'
import { ComponentData, ComponentPropItem, ComponentPropKey, ComponentPropValue, ComponentSectionWrapper, ComponentInfoTextarea, ComponentName } from './ComponentInfoStyled'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteComponent, setComponentName, setComponentValue, unsetActiveComponent, deleteComponentFromList, setComponentValueToActive } from '../../../../../store/actions/document';
import { getComponent, getParent } from '../../../../../core/functions/components';



export default function ComponentSeciton(props) {

    const {activeComponent} = props;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, activeComponent.id);
    const entries = Object.entries(componentData);
    const dispatch = useDispatch();


    return (
        <ComponentSectionWrapper>
            <ComponentData>
                {entries && entries.map(entrie => {

                    if (entrie[0] === 'childrenList') return;
                    if (entrie[0] === 'styles') return;
                    if (typeof entrie[1] !== 'string') return;

                    if (entrie[0] === 'name') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.name}
                                        onChange={(e) => {
                                            dispatch(setComponentName(
                                                e.target.value,
                                                activeComponent.id
                                            ))
                                        }}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'value') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentInfoTextarea
                                        value={componentData.value || ''}
                                        onChange={(e) => {
                                            dispatch(setComponentValue(
                                                e.target.value,
                                                componentData.id
                                            ));
                                            dispatch(setComponentValueToActive(e.target.value));
                                        }}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    return (
                        <ComponentPropItem key={entrie[0]}>
                            <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                            <ComponentPropValue>{entrie[1]}</ComponentPropValue>
                        </ComponentPropItem>
                    );
                })}

            </ComponentData>
        </ComponentSectionWrapper>
    )
}
