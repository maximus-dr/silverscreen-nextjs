import React from 'react'
import { ComponentData, ComponentPropItem, ComponentPropKey, ComponentPropValue, ComponentSectionWrapper, ComponentInfoTextarea, ComponentName, DeleteButton } from './ComponentInfoStyled'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteComponent, setComponentName, setComponentValue, unsetActiveComponent, deleteComponentFromList } from '../../../../../store/actions/document';



export default function ComponentSeciton(props) {

    const {activeComponent} = props;
    const componentData = useSelector(state => state.document.components[activeComponent.id]);
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
                                            ))
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

                {
                    activeComponent.typeName !== 'Document' &&
                    <DeleteButton
                        onClick={() => {
														dispatch(unsetActiveComponent());
                            dispatch(deleteComponent(activeComponent.id));
														dispatch(deleteComponentFromList(activeComponent.id));
                        }}
                    >
                        Delete
                    </DeleteButton>
                }

            </ComponentData>
        </ComponentSectionWrapper>
    )
}
