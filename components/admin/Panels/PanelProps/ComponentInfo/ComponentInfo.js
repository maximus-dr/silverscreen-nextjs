import React from 'react'
import { ComponentData, ComponentPropItem, ComponentPropKey, ComponentPropValue, ComponentSectionWrapper, ComponentInfoTextarea, ComponentName } from './ComponentInfoStyled'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setComponentName, setComponentValue, setComponentValueToActive, clearBuffer } from '../../../../../store/actions/document';
import { getComponent } from '../../../../../core/functions/components';



export default function ComponentSeciton(props) {

    const {activeComponent} = props;
    const componentsData = useSelector(state => state.document.componentsData);
    const componentData = getComponent(componentsData, activeComponent.id);
    const buffer = useSelector(state => state.document.buffer);
    const entries = Object.entries(componentData);
    const dispatch = useDispatch();

    const onNameInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onValueInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onNameChange = (e) => {
        dispatch(setComponentName(
            e.target.value,
            activeComponent.id
        ));
    }

    const onValueChange = (e) => {
        dispatch(setComponentValueToActive(e.target.value));
        dispatch(setComponentValue(
            e.target.value,
            componentData.id
        ));
    }


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
                                        onFocus={onNameInputFocus}
                                        onChange={onNameChange}
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
                                        onFocus={onValueInputFocus}
                                        onChange={onValueChange}
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
