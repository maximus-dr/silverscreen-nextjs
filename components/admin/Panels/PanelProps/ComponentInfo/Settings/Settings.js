import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearBuffer, setSettingsProp } from '../../../../../../store/actions/document';
import { SettingInput, SettingItem, SettingKey, SettingsTitle, SettingsWrapper, SettingTextarea, SettingValue } from './SettingsStyled'


export default function Settings(props) {

    const {settings} = props;
    const buffer = useSelector(state => state.document.buffer);
    const dispatch = useDispatch();
    const activeComponent = useSelector(state => state.document.activeComponent);


    const onSettingChange = (prop) => {
        dispatch(setSettingsProp(prop));
    }

    const onSettingFocus = (e) => {
        if (buffer) dispatch(clearBuffer());
    }

    return (
        <SettingsWrapper>
            <SettingsTitle>settings:</SettingsTitle>
            {
                Object.keys(settings).map(key => {
                    return (
                        <SettingItem key={key}>
                            <SettingKey>{key}</SettingKey>
                            <SettingInput
                                value={settings[key].toString() || ''}
                                onChange={(e) => onSettingChange({
                                    id: activeComponent.id,
                                    name: key,
                                    value: e.target.value
                                })}
                                onFocus={onSettingFocus}
                            />
                        </SettingItem>
                    )
                })
            }
        </SettingsWrapper>
    )
}
