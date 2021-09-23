import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { getPage } from '../../../core/functions/common/components'
import Navbar from '../Navbar/Navbar'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './HeaderStyled'



export default function Header() {

    const pageID = useSelector(state => state.document.page);
    const componentsData = useSelector(state => state.document.componentsData);
    const page = getPage(componentsData, pageID);

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Link href='/'><a>Home</a></Link>
            </HeaderLeft>
            <Navbar />
            <HeaderRight>
                <Link href="/preview"><a target="_blank" onClick={() => {localStorage.setItem('page_data', JSON.stringify(page))}}>Предпросмотр</a></Link>
            </HeaderRight>
        </HeaderWrapper>
    )
}
