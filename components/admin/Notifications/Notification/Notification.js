import React from 'react'
import { NotificationFixWrapper, NotificationWrapper, NotificationCaption, NotificationMessage } from './NotificationStyled'

export default function Notification() {
    return (
        <NotificationWrapper>
                <NotificationFixWrapper>
                    <NotificationCaption>Ctrl + C</NotificationCaption>
                    <NotificationMessage>Копировать</NotificationMessage>
                </NotificationFixWrapper>
        </NotificationWrapper>
    )
}
