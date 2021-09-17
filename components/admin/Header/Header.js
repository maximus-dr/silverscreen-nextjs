import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { getPage } from '../../../core/functions/common/components'
import Navbar from '../Navbar/Navbar'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './HeaderStyled'
import Router from 'next/router';


export default function Header() {

    const pageID = useSelector(state => state.document.page);
    const componentsData = useSelector(state => state.document.componentsData);
    const page = getPage(componentsData, pageID);


    return (
        <HeaderWrapper>
            <HeaderLeft>
                <button
                    onClick={() => {
                        Router.push({
                            pathname: '/admin',
                            query: {
                                shedule: 'soon',
                                'city': 'minsk;grodno;vitebsk',
                                genre: 'cartoon_family'
                            }
                        });
                    }}
                >
                    Click
                </button>
            </HeaderLeft>
            <Navbar />
            <HeaderRight>
                <Link href="/preview"><a target="_blank" onClick={() => {localStorage.setItem('page_data', JSON.stringify(page))}}>Предпросмотр</a></Link>
            </HeaderRight>
        </HeaderWrapper>
    )
}
