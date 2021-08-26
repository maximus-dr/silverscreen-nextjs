import React from 'react'
import { BulletStyled } from './BulletStyled'



export default function Bullet(props) {
    const {children, isSelected} = props;

    return (
        <BulletStyled
            isSelected={isSelected}
            onClick={props.onClick}
        >
            {children}
        </BulletStyled>
    )
}
