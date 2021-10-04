import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { getPage } from '../../../core/functions/common/components'
import { post } from '../../../core/rest/api'
import { API_PREVIEW } from '../../../core/rest/paths'
import Navbar from '../Navbar/Navbar'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './HeaderStyled'
import { useRouter } from 'next/router';



export default function Header() {

    const pageID = useSelector(state => state.document.page);
    const componentsData = useSelector(state => state.document.componentsData);
    const page = getPage(componentsData, pageID);

    const onPreviewClick = (e) => {
        e.preventDefault();

        post(API_PREVIEW, {page}, {'Content-Type': 'application/json'}, 
        (res) => {
            if (res.status === 200) {
                window.open('/preview', '_blank');
            }
        },
        (err) => {
            console.log('REQUEST ERROR', err);
        });
    }

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Link href='/'><a>Home</a></Link>
            </HeaderLeft>
            <Navbar />
            <HeaderRight>
                <Link href="/preview">
                    <a target="_blank" 
                        onClick={(e) => {
                            localStorage.setItem('page_data', JSON.stringify(page));
                            // onPreviewClick(e);
                        }}
                    >
                        Предпросмотр
                    </a>
                </Link>
            </HeaderRight>
        </HeaderWrapper>
    )
}
