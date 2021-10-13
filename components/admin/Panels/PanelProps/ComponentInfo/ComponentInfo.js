import React from 'react'
import { ComponentData, ComponentPropItem, ComponentPropKey, ComponentPropValue, ComponentSectionWrapper, ComponentInfoTextarea, ComponentName } from './ComponentInfoStyled'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setComponentName, setComponentValue, setComponentValueToActive, clearBuffer, setComponentLinkToActive, setComponentLink, setComponentUrl, setComponentFor, setComponentRole, setComponentDatalist } from '../../../../../store/actions/document';
import { getComponent } from '../../../../../core/functions/common/components';
import Settings from './Settings/Settings';



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

    const onRoleInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onRoleChange = (e) => {
        dispatch(setComponentRole(
            e.target.value,
            activeComponent.id
        ));
    }

    const onNameChange = (e) => {
        dispatch(setComponentName(
            e.target.value,
            activeComponent.id
        ));
    }

    const onUrlChange = (e) => {
        dispatch(setComponentUrl(
            activeComponent.id,
            e.target.value
        ));
    }

    const onForChange = (e) => {
        dispatch(setComponentFor(
            activeComponent.id,
            e.target.value
        ));
    }

    const onValueChange = (e) => {
        dispatch(setComponentValueToActive(e.target.value));
        dispatch(setComponentValue(
            e.target.value,
            componentData.id
        ));
    }

    const onLinkChange = (e) => {
        dispatch(setComponentLinkToActive(e.target.value));
        dispatch(setComponentLink(
            e.target.value,
            componentData.id
        ));
    }

    const onDataListChange = (e) => {
        dispatch(setComponentDatalist(
            e.target.value,
            activeComponent.id
        ));
    }


    return (
        <ComponentSectionWrapper>
            <ComponentData>
                {entries && entries.map(entrie => {

                    if (entrie[0] === 'childrenList') return;
                    if (entrie[0] === 'styles') return;

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



                    if (entrie[0] === 'link') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentInfoTextarea
                                        value={componentData.link || ''}
                                        onFocus={onValueInputFocus}
                                        onChange={onLinkChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'url') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.url || ''}
                                        onFocus={onValueInputFocus}
                                        onChange={onUrlChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'for') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.for || ''}
                                        onFocus={onValueInputFocus}
                                        onChange={onForChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'placeholder') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.placeholder || ''}
                                        onFocus={onValueInputFocus}
                                        onChange={onForChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'role') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.role || ''}
                                        onFocus={onRoleInputFocus}
                                        onChange={onRoleChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'dataList') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>
                                    <ComponentName
                                        type="text"
                                        value={componentData.dataList || ''}
                                        onFocus={onRoleInputFocus}
                                        onChange={onDataListChange}
                                    />
                                </ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }

                    if (entrie[0] === 'settings') {
                        const key = entrie[0];
                        return (
                            <Settings key={key} settings={entrie[1]} >

                            </Settings>
                        );
                    }

                    if (typeof entrie[1] === 'string') {
                        return (
                            <ComponentPropItem key={entrie[0]}>
                                <ComponentPropKey>{entrie[0]}:</ComponentPropKey>
                                <ComponentPropValue>{entrie[1]}</ComponentPropValue>
                            </ComponentPropItem>
                        );
                    }
                })}

            </ComponentData>
        </ComponentSectionWrapper>
    )
}
