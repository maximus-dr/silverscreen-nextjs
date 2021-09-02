import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './HeaderStyled'


export default function Header() {
    const dispatch = useDispatch();

    return (
        <HeaderWrapper>
            <HeaderLeft>

            </HeaderLeft>
            <Navbar />
            <HeaderRight>
                <Link href="/preview"><a>Предпросмотр</a></Link>
            </HeaderRight>
        </HeaderWrapper>
    )
}
