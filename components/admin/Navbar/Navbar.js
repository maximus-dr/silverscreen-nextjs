import React from 'react'
import Screens from '../Workspace/Screens/Screens'
import { ColumnCenter, CurrentPage, NavbarWrapper } from './NavbarStyled'


export default function Navbar() {
    return (
        <NavbarWrapper>
            <ColumnCenter>
                {/* <CurrentPage>Main Page</CurrentPage> */}
                <Screens />
            </ColumnCenter>
        </NavbarWrapper>
    )
}
