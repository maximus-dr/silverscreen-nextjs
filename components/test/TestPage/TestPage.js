import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import PlaceSelection from './PlaceSelection/PlaceSelection'
import Link from 'next/link'
import FilmGallery from '../FilmGallery/FilmGallery'
import { AfishaColumnImg, AfishaMenuColumn1, Button1, Button2, Button3, FilmSection, FilmSectionHeader, FilmSectionHeaderBottom, FilmSectionHeaderTop, FilmSectionShedule, FilmSectionTab, FilmSectionTitle, Footer, FooterBottom, FooterBottomBottom, FooterBottomTop, FooterBottomTopLeft, FooterBottomTopRight, FooterHr, FooterMiddle, FooterMiddleLeft, FooterMiddleRight, FooterTop, FooterTopColumn, FooterTopNav, FooterWrapper, HeaderMenu, HeaderPromo, HeaderSection, HeaderSectionWrapper, HeaderSectionWrapper2, HeaderSectionWrapper3, HeaderSectionWrapper4, HeaderSectionWrapper5, InfoSectionHeader, InfoSectionMain, LoginIcon, LoginIcons, LoginInput, LoginSection, MainLogo, MainLogoIcon, MainLogoSubtitle, MainLogoTitle, MainLogoTitleLeft, MainLogoTitleRight, MainNav, NavLink, PageHeader, PlaceSelect, PromoButton, PromoColumn, PromoImgWrapper, PromoSection, PromoSectionBackground, PromoSectionWrapper, PromoSubtitle, PromoText, PromoTitle, Rcc, Search, SliderButton, SliderDescription, SliderItem, SliderItemDescription, SliderNext, SliderPrev, SliderSubtitle, SliderTitle, SliderWrapper, SubscribeButton, SubscribeEmail, SubscribeInput, SubscribeMain, SubscribeWrapper } from './TestPageStyled'


export default function TestPage(props) {

    const events = useSelector(state => state.events)

    return (
        <div>
            <PageHeader>

                {/* header top */}
                <MainNav>
                    {/* logo */}
                    <MainLogo>
                        <MainLogoIcon>
                            <svg id="svg-icon-logo-s" viewBox="65 0 40 52" width="40px" height="52px"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M75,25.9c2.5,1.2,5.2,2.1,7.9,3.1c2.3,0.8,4.6,1.5,6.8,2.7c2,1.1,3.8,2.4,5,4.4c1.6,2.7,1.1,5.7-1.4,7.7 c-1.3,1-2.7,1.6-4.3,1.9c-2,0.4-4.1,0.4-6.2,0.2c-2.5-0.3-4.9-0.9-7.2-2.1c-2.7-1.4-4.6-3.4-5.3-6.5c-0.2-0.9-0.3-1.8-0.4-2.8h-1 c0,0.1,0,0.1,0,0.2c0,1.8-0.1,3.5-0.1,5.3c0.1,2.7,0.2,5.4,0.3,8.1c0,0.3,0.1,0.4,0.4,0.4c2.6,0.5,5.1,1,7.7,1.4 c4,0.6,8,0.7,12.1,0.2c2.3-0.3,4.5-0.9,6.6-2c2.4-1.2,4.4-2.7,5.6-5.1c1.9-3.6,1.8-8.2-1.3-11.5c-1.8-1.9-3.9-3.2-6.3-4.1 c-3-1.2-6.2-1.9-9.4-2.7c-3-0.7-5.9-1.4-8.8-2.5c-2.4-1-4.6-2.2-6.3-4.2c-0.9-1.1-1.6-2.3-2.2-3.6c0,0.3-0.1,0.6-0.1,0.9 c-0.1,2.1,0.5,4.1,1.8,5.8C70.3,23.3,72.6,24.7,75,25.9z M75.1,23.5c2.8,1.1,5.7,1.8,8.5,2.5l1.1,0.3c2.9,0.7,5.8,1.4,8.5,2.5 c2.4,1,4.3,2.2,5.8,3.8c2.5,2.6,2.9,6.5,1.1,9.9c-1,1.9-2.6,3.3-5.1,4.6c-1.8,0.9-3.8,1.5-6.2,1.8c-1.7,0.2-3.4,0.4-5.1,0.4 c-2.1,0-4.3-0.2-6.5-0.5c-1.7-0.3-3.4-0.6-5.1-0.9c-0.6-0.1-1.2-0.2-1.8-0.4c0-0.8-0.1-1.6-0.1-2.4c-0.1-1.4-0.1-2.8-0.2-4.3 c1.1,1.8,2.7,3.3,4.9,4.4c2.2,1.1,4.7,1.8,7.7,2.2c1,0.1,1.9,0.2,2.8,0.2c1.3,0,2.6-0.1,3.8-0.4c2-0.4,3.6-1.1,4.9-2.2 c3.1-2.4,3.7-6.1,1.7-9.5c-1.2-2-2.9-3.5-5.6-4.9c-1.9-1-3.9-1.7-5.9-2.4c-0.4-0.1-0.7-0.3-1.1-0.4l-0.7-0.2 c-2.4-0.8-4.8-1.7-7.1-2.8c-1.8-0.9-3.9-2.1-5.4-4C71.5,21.8,73.1,22.7,75.1,23.5z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M71.9,18.4c2.1,1.6,4.4,2.6,6.9,3.3c3.4,0.9,6.8,1.8,10.2,2.6c2.7,0.7,5.4,1.4,7.9,2.7 c2.4,1.2,4.4,2.8,5.6,5.3c0.1,0.3,0.3,0.6,0.4,0.9c0.1-0.5,0.2-1,0.2-1.5c0.1-2-0.4-3.9-1.7-5.5c-1.4-1.7-3.2-2.9-5.1-3.8 c-3-1.4-6.1-2.2-9.3-3.1c-2.2-0.6-4.3-1.1-6.5-1.8c-2-0.6-3.7-1.8-5-3.5c-1.7-2.3-1.9-6,1.8-7.7C79,5.7,80.8,5.2,82.6,5 c2.1-0.2,4.2-0.2,6.4,0.1c2.2,0.3,4.3,0.8,6.3,1.8c2.6,1.4,4.4,3.4,4.9,6.4c0.1,0.6,0.1,1.2,0.2,1.9h1c0-0.1,0-0.2,0-0.3 c0-2,0.1-3.9,0-5.9c0-2-0.2-3.9-0.2-5.9c0-0.3-0.1-0.4-0.4-0.4c-5-1.1-10-2.1-15.1-2.4c-2.7-0.2-5.4,0-8.1,0.7 c-2.5,0.7-4.9,1.8-6.8,3.7c-2.2,2.2-3,4.9-2.6,8C68.6,15.2,70,17,71.9,18.4z"></path></svg>
                        </MainLogoIcon>
                        <MainLogoTitle>
                            <MainLogoTitleLeft>
                                <svg id="svg-icon-logo-silver" viewBox="0 58 84 22" width="84px" height="22px"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M7.4,65.5c-0.4-0.2-1.2-0.5-2.3-0.9c-1.2-0.4-2-0.8-2.4-1.1c-0.4-0.3-0.6-0.6-0.6-1.1c0-0.4,0.2-0.8,0.7-1.1 c0.5-0.3,1.1-0.5,1.9-0.5c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1,1.1,1,1.9h0.2c0-0.3,0-0.5,0-0.7c0-0.3,0-0.6,0-1c0-0.3,0-0.6,0-0.8 l0-0.4v-0.1C7.1,60,6,59.8,5.2,59.8c-1.7,0-4,0.7-4.8,2.4C0.1,62.7,0,63.1,0,63.6c0,0.5,0.1,1,0.4,1.4c0.3,0.4,0.6,0.7,1.1,1 c0.4,0.2,1.1,0.5,2.1,0.8c1.2,0.4,2,0.7,2.4,1.1c0.4,0.3,0.6,0.8,0.6,1.3c0,0.5-0.2,1-0.7,1.4c-0.4,0.4-1,0.6-1.7,0.6 c-0.9,0-1.7-0.3-2.4-0.9c-0.7-0.6-1.1-1.4-1.1-2.3H0.5c0,0.2,0,0.5,0,0.8c0,0.2,0,0.6,0.1,1.1c0,0.5,0.1,0.9,0.1,1.1 c0,0.2,0,0.4,0,0.5l0.1,0.1c0.4,0,0.9,0.1,1.6,0.2c0.8,0.2,1.5,0.3,1.9,0.3c0.2,0,0.4,0,0.7,0C6.6,71.8,9,70.3,9,68.3 c0-0.6-0.2-1.2-0.5-1.7C8.2,66.1,7.8,65.8,7.4,65.5z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M11.4,59.9v0.2c0.6,0.1,1,0.4,1.2,0.9c0.2,0.5,0.3,1.2,0.3,2.1v5c0,1.3-0.1,2.2-0.3,2.7 c-0.2,0.5-0.6,0.8-1.2,1v0.2c1.8-0.1,4-0.2,5.7,0v-0.2c-0.4-0.1-0.8-0.4-1.1-0.7c-0.3-0.4-0.5-1.2-0.5-2.3v-5.3 c0-1.3,0.1-2.1,0.4-2.5c0.3-0.4,0.7-0.6,1.1-0.7v-0.2C15.5,60.2,13.1,60.1,11.4,59.9z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M30.9,70.6c-0.5,0.3-1.2,0.4-2,0.4h-2.3c-0.3,0-0.6,0-0.6-0.1c-0.1-0.1-0.2-0.4-0.2-1 c-0.1-0.6-0.1-1.2-0.1-1.9V63c0-0.9,0.1-1.6,0.4-2c0.2-0.4,0.6-0.7,1.2-0.9v-0.2c0,0-0.2,0-0.8,0c-1.7,0.2-3.1,0.1-4.8,0v0.2 c0.3,0.1,0.7,0.3,1,0.7c0.3,0.4,0.4,1.1,0.4,2.3v5.3c0,1.1-0.1,1.8-0.3,2.3c-0.2,0.5-0.6,0.8-1.1,1v0.2c2.4-0.3,6-0.1,8.3-0.1 c0.7,0,1.3,0,1.9,0.1c0.1-0.3,0.2-0.7,0.4-1.2c0.3-0.8,0.4-1.3,0.5-1.7h-0.2C31.9,69.8,31.4,70.3,30.9,70.6z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M42.5,60c-0.4,0-0.6-0.1-0.6-0.1v0.2c0.6,0.2,0.9,0.6,0.9,1.2c0,0.4-0.2,1-0.5,1.7l-2.6,5.5l-2.8-5.3 c-0.5-1.1-0.8-1.8-0.8-2.3c0-0.4,0.2-0.7,0.6-0.8v-0.2c-1.9,0.2-3.5,0.1-5.4,0v0.2c0.9,0.2,1.6,1,2.4,2.4l5,9.5h0.2 c1.5-3,2.9-6,4.3-9c0.5-1.1,0.9-1.8,1.2-2.1c0.3-0.3,0.7-0.6,1.2-0.8v-0.2c-0.8,0.1-1.4,0.2-1.7,0.2C43.5,60.1,43,60,42.5,60z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M56,70.7c-0.5,0.2-1.2,0.3-2.1,0.3h-1.7c-0.4,0-0.7,0-1-0.1c-0.1-0.7-0.2-1.5-0.2-2.5V66h2.8 c0.7,0,1.2,0.1,1.6,0.4c0.3,0.2,0.5,0.7,0.6,1.3h0.2c0-0.4,0-0.7-0.1-0.9c0-0.5-0.1-0.9-0.1-1.2c0-0.5,0-1.1,0.1-1.7H56 c-0.2,0.6-0.4,1-0.7,1.1c-0.3,0.2-0.9,0.2-1.8,0.2h-2.4v-1.8l0-0.8c0-0.9,0.1-1.5,0.2-1.8c0.2,0,0.5-0.1,0.8-0.1h1.8 c0.9,0,1.6,0.1,1.9,0.3c0.3,0.2,0.6,0.6,0.9,1.2h0.2v-0.3c0,0,0-0.2,0-0.6c0-0.5-0.1-0.9-0.1-1c0-0.1,0-0.3,0-0.5 c-1.7,0.1-2.8,0.1-3.5,0.1c-2.3,0-4.2,0-6.4-0.1v0.2c0.4,0.1,0.7,0.3,1,0.7c0.3,0.4,0.4,1.1,0.4,2.2v4.7c0,1.2,0,2.1-0.1,2.4 c-0.1,0.4-0.2,0.7-0.4,1c-0.2,0.3-0.5,0.5-0.9,0.6v0.2c2.4-0.3,5.2-0.1,7.7-0.1c0.7,0,1.4,0,2.3,0.1c0.1-0.4,0.2-0.9,0.4-1.5 c0.2-0.4,0.3-0.8,0.4-1.2h-0.2C57,70,56.5,70.5,56,70.7z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M82.1,77.3c-1.9,0.9-4.5,0-5.7-0.8c-4.8-3-4.8-9-9.3-10.4l0.1,0c0.5-0.2,1.7-0.4,2.1-0.6l0,0 C70.4,65,71,64.1,71,63c0-1.1-0.6-2-1.8-2.5c-0.1,0-0.2-0.1-0.3-0.1c-0.8-0.4-2.5-0.5-2.6-0.4v0c-0.1,0-0.1,0-0.2,0 c-0.4,0-0.8,0-1.4,0.1c-1.4,0.1-3.5,0.1-4.8-0.1v0.2c1.1,0.2,1.6,1.1,1.6,2.8v5.7c0,1.2-0.2,2-0.5,2.4c-0.3,0.4-0.7,0.6-1.2,0.7 v0.2c0.5,0,0.9,0,1.2-0.1c0.4,0,0.7-0.1,0.9-0.1h0.3h0.2h0.8h0.2h0.1c0.6,0,1.3,0,2.2,0.1v-0.2c-1.1-0.2-1.6-1.1-1.6-2.9v-0.9V67 c5,0.5,4.9,11.6,12.7,11.8c1.3,0,3.8-0.7,5.2-1.1L82.1,77.3z M65.6,65.7c-0.5,0-1-0.1-1.4-0.2v-2.4c0-1.1,0.1-1.8,0.2-2.1 c0.3-0.2,0.7-0.3,1.2-0.3c1.6,0,2.5,0.8,2.5,2.4C68.1,64.8,67.2,65.7,65.6,65.7z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M72.5,67.3c-0.4-0.5-1-0.8-1.6-1.1l-0.2,0c1.2,0.9,2.2,2.2,3,3.5c0.9,1.4,2,3.3,3.2,4.5 c0.6,0.7,1.4,1.3,2.3,1.5c0.2,0,0.4,0.1,0.6,0.1c-2-0.7-3.7-3.1-4.7-4.7C74.3,69.8,73.4,68.3,72.5,67.3z"></path></svg>
                            </MainLogoTitleLeft>
                            <MainLogoTitleRight>
                                <svg id="svg-icon-logo-screen" viewBox="86 58 84 22" width="84px" height="22px"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M94.9,68.3c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.1c-0.4-0.2-1.2-0.5-2.3-0.9c-1.2-0.4-2-0.8-2.4-1.1 c-0.4-0.3-0.6-0.6-0.6-1.1c0-0.4,0.2-0.8,0.7-1.1c0.5-0.3,1.1-0.5,1.9-0.5c0.9,0,1.7,0.2,2.4,0.6c0.7,0.4,1,1.1,1,1.9h0.2 c0-0.3,0-0.5,0-0.7c0-0.3,0-0.6,0-1c0-0.3,0-0.6,0-0.8l0-0.4v-0.1c-1.2-0.3-2.3-0.4-3.1-0.4c-2.2,0-5.2,1.2-5.2,3.8 c0,0.5,0.1,1,0.4,1.4c0.3,0.4,0.6,0.7,1.1,1c0.4,0.2,1.1,0.5,2.1,0.8c1.2,0.4,2,0.7,2.4,1.1c0.4,0.3,0.6,0.8,0.6,1.3 c0,0.5-0.2,1-0.7,1.4c-0.4,0.4-1,0.6-1.7,0.6c-0.9,0-1.7-0.3-2.4-0.9c-0.7-0.6-1.1-1.4-1.1-2.3h-0.3c0,0.2,0,0.5,0,0.8 c0,0.2,0,0.6,0.1,1.1c0,0.5,0.1,0.9,0.1,1.1c0,0.2,0,0.4,0,0.5l0.1,0.1c0.4,0,0.9,0.1,1.6,0.2c0.8,0.2,1.5,0.3,1.9,0.3 c0.2,0,0.4,0,0.7,0C92.5,71.8,94.9,70.3,94.9,68.3z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M109,71.3l0.4-1.9h-0.2c-0.4,0.5-1,1-1.7,1.3c-0.7,0.3-1.5,0.5-2.4,0.5c-1.6,0-2.7-0.5-3.5-1.4 c-0.8-1-1.2-2.2-1.2-3.7c0-1.7,0.4-3.1,1.3-4c0.8-0.9,2-1.4,3.4-1.4c2.1,0,3.4,1.1,3.9,3.4h0.2c0-0.3,0.1-0.7,0.1-1.1v-0.3 c0-0.2,0-0.3,0-0.5c0-0.2,0-0.7,0.1-1.7c-3.4-1.2-8.5-1.2-10.6,2.1c-1.3,1.7-1.3,4.5-0.4,6.3c0.9,1.6,2.9,2.5,4.9,2.9 c1.4,0.2,2.7,0.2,3.8,0C107.6,71.7,108.3,71.5,109,71.3z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M136.6,70.7c-0.5,0.2-1.2,0.3-2.1,0.3h-1.7c-0.4,0-0.7,0-1-0.1c-0.1-0.7-0.2-1.5-0.2-2.5V66h2.8 c0.7,0,1.2,0.1,1.6,0.4c0.3,0.2,0.5,0.7,0.6,1.3h0.2c0-0.4,0-0.7-0.1-0.9c0-0.5-0.1-0.9-0.1-1.2c0-0.5,0-1.1,0.1-1.7h-0.2 c-0.2,0.6-0.4,1-0.7,1.1c-0.3,0.2-0.9,0.2-1.8,0.2h-2.4v-1.8l0-0.8c0-0.9,0.1-1.5,0.2-1.8c0.2,0,0.5-0.1,0.8-0.1h1.8 c0.9,0,1.6,0.1,1.9,0.3c0.3,0.2,0.6,0.6,0.9,1.2h0.2v-0.3c0,0,0-0.2,0-0.6c0-0.5-0.1-0.9-0.1-1c0-0.1,0-0.3,0-0.5 c-1.7,0.1-2.8,0.1-3.5,0.1c-2.3,0-4.2,0-6.4-0.1v0.2c0.4,0.1,0.7,0.3,1,0.7c0.3,0.4,0.4,1.1,0.4,2.2v4.7c0,1.2,0,2.1-0.1,2.4 c-0.1,0.4-0.2,0.7-0.4,1c-0.2,0.3-0.5,0.5-0.9,0.6v0.2c2.4-0.3,5.2-0.1,7.6-0.1c0.7,0,1.4,0,2.3,0.1c0.1-0.4,0.2-0.9,0.4-1.5 c0.2-0.4,0.3-0.8,0.4-1.2h-0.2C137.6,70,137.1,70.5,136.6,70.7z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M150.2,70.7c-0.5,0.2-1.2,0.3-2.1,0.3h-1.7c-0.4,0-0.7,0-1-0.1c-0.1-0.7-0.2-1.5-0.2-2.5V66h2.8 c0.7,0,1.2,0.1,1.6,0.4c0.3,0.2,0.5,0.7,0.6,1.3h0.2c0-0.4,0-0.7-0.1-0.9c0-0.5-0.1-0.9-0.1-1.2c0-0.5,0-1.1,0.1-1.7h-0.2 c-0.2,0.6-0.4,1-0.7,1.1c-0.3,0.2-0.9,0.2-1.8,0.2h-2.4v-1.8l0-0.8c0-0.9,0.1-1.5,0.2-1.8c0.2,0,0.5-0.1,0.8-0.1h1.8 c0.9,0,1.6,0.1,1.9,0.3c0.3,0.2,0.6,0.6,0.9,1.2h0.2v-0.3c0,0,0-0.2,0-0.6c0-0.5-0.1-0.9-0.1-1c0-0.1,0-0.3,0-0.5 c-1.7,0.1-2.8,0.1-3.5,0.1c-2.3,0-4.2,0-6.4-0.1v0.2c0.4,0.1,0.7,0.3,1,0.7c0.3,0.4,0.4,1.1,0.4,2.2v4.7c0,1.2,0,2.1-0.1,2.4 c-0.1,0.4-0.2,0.7-0.4,1c-0.2,0.3-0.5,0.5-0.9,0.6v0.2c2.4-0.3,5.2-0.1,7.6-0.1c0.7,0,1.4,0,2.3,0.1c0.1-0.4,0.2-0.9,0.4-1.5 c0.2-0.4,0.3-0.8,0.4-1.2h-0.2C151.1,70,150.6,70.5,150.2,70.7z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M126.5,70.8c-0.9,0-2.1-0.7-3.5-2.2c-1-1-1.7-1.6-2.1-1.9c-0.4-0.3-1-0.5-1.6-0.6c0.5-0.2,1.7-0.4,2.1-0.6l0,0 c1.1-0.5,1.7-1.3,1.7-2.5c0-1.2-0.6-2-1.9-2.5c-0.1,0-0.2-0.1-0.3-0.1c-0.8-0.4-2.5-0.5-2.6-0.4v0c-0.1,0-0.1,0-0.2,0 c-0.4,0-0.8,0-1.4,0.1c-1.4,0.1-3.5,0.1-4.8-0.1v0.2c1.1,0.2,1.6,1.2,1.6,2.8v5.7c0,1.2-0.2,2-0.5,2.4c-0.3,0.4-0.7,0.6-1.2,0.7 v0.2c0.5,0,0.9,0,1.2-0.1c1.4-0.2,3.4-0.1,4.7,0.1v-0.2c-1.1-0.2-1.6-1.1-1.6-2.9v-2.6c0.4,0.1,0.9,0.4,1.3,0.7 c0.4,0.3,1.1,1,2,1.9c0.6,0.7,1.1,1.2,1.6,1.6c0.4,0.4,0.8,0.7,1.1,0.9c0.5,0.4,1.2,0.6,1.9,0.6c0.2,0,0.4,0,0.6-0.1 c0.5-0.1,1.1-0.3,1.5-0.5c0.1,0,0.3-0.1,0.4-0.1h0c0.2-0.1,0.3-0.2,0.5-0.4l0-0.2C126.9,70.7,126.7,70.8,126.5,70.8z M117.6,65.7 c-0.5,0-1-0.1-1.4-0.2v-2.4c0-1.1,0.1-1.8,0.2-2.1c0.3-0.2,0.7-0.3,1.2-0.3c1.7,0,2.5,0.8,2.5,2.4 C120.1,64.8,119.3,65.7,117.6,65.7z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M167.7,60.1c-0.3,0-1,0-2-0.1c-0.3,0-0.4,0-0.4,0v0.2c0.5,0.1,0.9,0.3,1.2,0.5c0.3,0.3,0.5,0.6,0.6,1 c0.1,0.4,0.2,1,0.2,1.8V68l-9.4-8c-1.6,0-3,0-4.6-0.2v0.2c0.8,0.3,1.7,0.9,2.8,1.8l0.8,0.7l0,5.8c0,1.1-0.1,2-0.3,2.4 c-0.2,0.5-0.7,0.8-1.3,0.9v0.2c0.9-0.1,1.6-0.1,2.1-0.1c0.4,0,1.2,0,2.3,0.1v-0.2c-0.6-0.1-1.1-0.4-1.4-0.9 c-0.3-0.4-0.4-1.2-0.4-2.4v-5.2l10.1,8.6h0.2v-0.2V71v-7.9c0-0.7,0.1-1.2,0.2-1.6c0.1-0.4,0.3-0.7,0.6-0.9c0.3-0.3,0.6-0.4,1-0.5 v-0.2C168.8,60,168,60.1,167.7,60.1z"></path></svg>
                            </MainLogoTitleRight>
                        </MainLogoTitle>
                        <MainLogoSubtitle>
                            <svg id="svg-icon-logo-cinemas" viewBox="46 80 78 10" width="78px" height="10px"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M51.2,88.8c-0.7,0-1.2-0.2-1.6-0.7C49.2,87.6,49,87,49,86.3c0-0.7,0.2-1.3,0.5-1.7c0.4-0.4,0.9-0.6,1.5-0.6 c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.4,0.4,0.5,0.7l0.1-1.2c-0.1,0-0.4,0-0.7-0.1c-0.3,0-0.5-0.1-0.7-0.1c-0.9,0-1.7,0.3-2.2,0.8 c-0.5,0.5-0.8,1.3-0.8,2.2c0,0.9,0.2,1.5,0.7,2.1c0.5,0.5,1.1,0.8,1.9,0.8c0.5,0,0.9-0.1,1.3-0.4c0.4-0.2,0.6-0.6,0.7-1 c-0.2,0.2-0.4,0.4-0.7,0.5C51.8,88.7,51.5,88.8,51.2,88.8z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M61.3,86.1c0-1,0-1.6,0.1-1.9c0-0.3,0.1-0.5,0.2-0.6h-1.2c0.1,0.1,0.1,0.3,0.2,0.6c0,0.3,0.1,1,0.1,2.1v0.4 c0,1,0,1.7-0.1,2c0,0.3-0.1,0.5-0.2,0.6h1.2c-0.1-0.1-0.1-0.3-0.2-0.6c0-0.3-0.1-0.9-0.1-1.9v-0.3V86.1z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M73.4,84.2c0,0.3,0.1,0.8,0.1,1.6l0,2.5c-0.5-0.7-1.1-1.6-2-2.9c-0.3-0.5-0.6-0.9-0.8-1.2c0,0-0.1-0.1-0.1-0.2 c-0.2-0.3-0.4-0.5-0.6-0.5h-0.9c0.1,0.1,0.2,0.3,0.3,0.5c0,0.3,0.1,0.9,0.1,1.8c0,1,0,1.8-0.1,2.3c-0.1,0.5-0.1,0.9-0.3,1h1 c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.3-0.1-0.8-0.1-1.5l0-2.9c0.5,0.8,1.2,1.7,2,2.9c0.8,1.1,1.3,1.9,1.5,2.2h0.6v-1.8v-1.1 c0-1.1,0-1.8,0.1-2.1c0-0.4,0.1-0.6,0.2-0.6h-0.8C73.3,83.7,73.4,83.9,73.4,84.2z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M83.4,89h-0.5c0-0.1,0-0.3-0.1-0.6c0-0.3,0-0.7,0-1.3v-0.6c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0 c0.6,0,1.1,0,1.3-0.1c0.3-0.1,0.5-0.2,0.6-0.4c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.5,0-0.9,0c-0.2,0-0.4,0-0.4,0c-0.1,0-0.2,0-0.2,0 v-0.3c0-0.5,0-1,0-1.2c0-0.3,0-0.5,0.1-0.6h0.5c0.6,0,1,0,1.2,0.1c0.2,0.1,0.3,0.2,0.4,0.4l-0.1-0.8c-0.1,0-0.2,0-0.3,0 c0,0,0,0-0.1,0c-0.1,0-0.4,0-0.9,0c-0.5,0-0.9,0-1.3,0h-0.6c0.1,0.1,0.1,0.3,0.2,0.6c0,0.3,0.1,1,0.1,2.1v0.4c0,1,0,1.7-0.1,2 c0,0.3-0.1,0.5-0.2,0.6h0.7c0.3,0,0.6,0,1,0c0.4,0,0.7,0,0.8,0c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.4-0.1l0.2-0.9 c-0.2,0.2-0.4,0.4-0.7,0.5C84.4,88.9,83.9,89,83.4,89z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M98.5,85c0-0.4,0-0.7,0.1-0.9c0-0.2,0.1-0.4,0.2-0.5h-0.9c-0.1,0-0.1,0-0.2,0c0,0-0.1,0.1-0.1,0.2l-1.8,4.2 l-1.6-4.3c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0h-1c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.2,0.1,0.4c0,1.6,0,2.9-0.1,3.7 c-0.1,0.8-0.2,1.3-0.4,1.4h1c-0.1-0.1-0.1-0.2-0.2-0.4c0-0.1,0-0.4,0-0.6V88l0-3.9l2.1,5.3l2.2-5.3l0.1,3.1c0,0.2,0,0.5,0,0.7 c0,0,0,0.1,0,0.1c0,0.4,0,0.6-0.1,0.8c0,0.2-0.1,0.3-0.2,0.5h1.3c-0.2-0.2-0.3-0.6-0.3-1.2C98.5,87.5,98.5,86.5,98.5,85z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M109.2,83.6h-1.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0.1-0.1,0.4-0.2,0.8c-0.2,0.5-0.4,1-0.6,1.6 c-0.3,0.7-0.6,1.3-0.9,1.8c-0.3,0.5-0.5,0.9-0.8,1.2h1.1c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.3,0.1-0.7,0.4-1.2l0,0l0.4-0.9h2.1 l0.9,2.5h1c-0.3-0.4-0.6-1.1-1-2.1C110.1,86.3,109.7,85.1,109.2,83.6z M107.6,86.5l1-2.3l0.8,2.3H107.6z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M120.5,86.1L120.5,86.1c-0.8-0.4-1.2-0.9-1.2-1.3c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.5-0.2,0.9-0.2 c0.3,0,0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.5,0.4v-0.9h-0.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.2,0-0.4,0c-0.2,0-0.4,0-0.6,0 c-0.5,0-1,0.1-1.3,0.4c-0.3,0.3-0.5,0.6-0.5,1.1c0,0.6,0.5,1.1,1.5,1.7l0.1,0.1c0.3,0.2,0.6,0.4,0.7,0.6c0.1,0.2,0.2,0.4,0.2,0.7 c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.7-0.1-0.9-0.2c-0.3-0.2-0.5-0.4-0.7-0.7v1c0.3,0.1,0.6,0.2,0.8,0.3 c0.3,0.1,0.5,0.1,0.7,0.1c0.6,0,1.1-0.2,1.4-0.5c0.4-0.3,0.6-0.7,0.6-1.2c0-0.3-0.1-0.6-0.3-0.9C121.3,86.6,121,86.3,120.5,86.1z"></path></svg>
                        </MainLogoSubtitle>
                    </MainLogo>

                    {/* city selection */}
                    <PlaceSelect>
                        <PlaceSelection />
                    </PlaceSelect>
                    
                    <HeaderMenu>
                        <span>??????????</span>
                        <span>????????????????????</span>
                        <span>????????</span>
                    </HeaderMenu>

                    <HeaderPromo>

                    </HeaderPromo>

                    <Rcc>
                        <svg id="svg-icon-rcc" viewBox="0 0 150 12" width="150" height="12"><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M10.1,5.4c0.3-0.5,0.4-1.1,0.4-1.8c0-1-0.4-1.9-1.1-2.5C8.6,0.5,7.5,0.2,6.2,0.2H0v11.6h3.6V7.4h1.1l1.7,4.5h4 L8.4,6.7C9.2,6.4,9.8,5.9,10.1,5.4z M6.3,4.6C6,4.8,5.6,4.9,5.2,4.9H3.6V2.7h1.7c0.9,0,1.4,0.4,1.4,1.1C6.7,4.1,6.6,4.4,6.3,4.6z"></path><polygon fillRule="evenodd" clipRule="evenodd" fill="currentColor" points="12.2,11.8 21.1,11.8 21.1,9 15.8,9 15.8,7.1 20.1,7.1 20.1,4.6 15.8,4.6 15.8,2.9 21.1,2.9 21.1,0.2 12.2,0.2 "></polygon><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M27.1,0.2h-4.6v11.6h4.8c1.7,0,3.1-0.5,4.1-1.6c1.1-1.1,1.6-2.5,1.6-4.2c0-1.5-0.5-2.9-1.5-4 C30.6,0.8,29.1,0.2,27.1,0.2z M28.6,8.3c-0.4,0.6-0.9,0.9-1.5,0.9h-0.9V2.8h0.9c0.7,0,1.2,0.3,1.6,0.9c0.4,0.6,0.5,1.3,0.5,2.2 C29.3,6.9,29.1,7.7,28.6,8.3z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M43.9,2.6c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.9,0.5,1.7l3.4-0.2c-0.1-1.4-0.6-2.5-1.4-3.4 c-0.8-0.9-2-1.3-3.6-1.3c-1.7,0-3,0.6-3.9,1.7c-0.9,1.1-1.4,2.6-1.4,4.4c0,1.8,0.5,3.3,1.5,4.3c1,1,2.3,1.6,3.9,1.6 c1.3,0,2.5-0.4,3.4-1.1c0.9-0.8,1.4-1.9,1.6-3.3l-3.3-0.2c-0.1,1.3-0.7,1.9-1.6,1.9c-0.5,0-1-0.2-1.2-0.7c-0.3-0.5-0.4-1.3-0.4-2.6 C42.2,3.8,42.8,2.6,43.9,2.6z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M52.6,0.2L49,11.8h2.9l0.7-2.3h3.2l0.7,2.3h3.7L56.5,0.2H52.6z M53.3,7l1-3.4l1,3.4H53.3z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M71.3,5.4c0.3-0.5,0.4-1.1,0.4-1.8c0-1-0.4-1.9-1.1-2.5c-0.8-0.6-1.8-0.9-3.2-0.9h-6.2v11.6h3.6V7.4H66 l1.7,4.5h4l-2.1-5.1C70.5,6.4,71,5.9,71.3,5.4z M67.5,4.6c-0.3,0.2-0.6,0.3-1.1,0.3h-1.5V2.7h1.7C67.5,2.7,68,3,68,3.8 C68,4.1,67.8,4.4,67.5,4.6z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M81.4,0.6c-0.7-0.3-1.6-0.4-2.9-0.4h-5v11.6h3.7V7.6h2.1c1.3,0,2.4-0.3,3.1-1c0.8-0.7,1.2-1.6,1.2-2.7 c0-0.7-0.2-1.4-0.6-2C82.6,1.3,82.1,0.9,81.4,0.6z M78.3,5.1h-1.2V2.8h1.3c1,0,1.5,0.4,1.5,1.1C79.9,4.7,79.4,5.1,78.3,5.1z"></path><polygon fillRule="evenodd" clipRule="evenodd" fill="currentColor" points="84.9,11.8 93.8,11.8 93.8,9 88.5,9 88.5,7.1 92.8,7.1 92.8,4.6 88.5,4.6 88.5,2.9 93.8,2.9 93.8,0.2 84.9,0.2 "></polygon><polygon fillRule="evenodd" clipRule="evenodd" fill="currentColor" points="94.2,3 96.6,3 96.6,11.8 100.1,11.8 100.1,3 102.5,3 102.5,0.2 94.2,0.2 "></polygon><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M112.9,2.6c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.9,0.5,1.7l3.4-0.2c-0.1-1.4-0.6-2.5-1.4-3.4 c-0.8-0.9-2-1.3-3.6-1.3c-1.7,0-3,0.6-3.9,1.7c-0.9,1.1-1.4,2.6-1.4,4.4c0,1.8,0.5,3.3,1.5,4.3c1,1,2.3,1.6,3.9,1.6 c1.3,0,2.5-0.4,3.4-1.1c0.9-0.8,1.4-1.9,1.6-3.3l-3.3-0.2c-0.1,1.3-0.7,1.9-1.6,1.9c-0.5,0-1-0.2-1.2-0.7c-0.3-0.5-0.4-1.3-0.4-2.6 C111.2,3.8,111.8,2.6,112.9,2.6z"></path><polygon fillRule="evenodd" clipRule="evenodd" fill="currentColor" points="122.8,0.2 119.1,0.2 119.1,11.8 127.4,11.8 127.4,9 122.8,9 "></polygon><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M135.3,7c0,0.7,0,1.1-0.1,1.4c-0.1,0.2-0.2,0.4-0.5,0.6c-0.3,0.2-0.6,0.3-1.1,0.3c-0.5,0-0.9-0.1-1.1-0.4 c-0.2-0.3-0.4-0.7-0.4-1.2V0.2h-3.7v7.9c0,1.4,0.5,2.4,1.4,3c0.9,0.6,2.1,0.9,3.6,0.9c1.4,0,2.6-0.3,3.4-1c0.9-0.6,1.3-1.7,1.3-3.2 V0.2h-2.9V7z"></path><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M147.7,5.8c0.7-0.2,1.2-0.5,1.5-1c0.3-0.5,0.5-1,0.5-1.6c0-0.8-0.3-1.5-0.9-2.1c-0.6-0.6-1.5-0.9-2.7-0.9h-6 v11.6h5.6c1.8,0,2.9-0.3,3.5-1c0.5-0.7,0.8-1.5,0.8-2.3C150,7,149.2,6.1,147.7,5.8z M143.4,2.7h1.6c0.8,0,1.2,0.3,1.2,1 c0,0.2-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-0.9,0.3h-1.7V2.7z M146.2,8.9c-0.2,0.2-0.5,0.3-1,0.3h-1.8V7.1h1.6c0.5,0,0.9,0.1,1.1,0.3 c0.2,0.2,0.3,0.5,0.3,0.7C146.5,8.5,146.4,8.7,146.2,8.9z"></path></svg>
                        <span>???????? ?? ????????????????????</span>
                    </Rcc>

                    <Search>
                        <svg id="svg-icon-search" viewBox="0 0 22 22" width="22" height="22"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21.7,20.5l-4.8-4.8c3.1-3.8,3-9.4-0.6-12.9c-3.7-3.7-9.8-3.7-13.5,0c-3.7,3.7-3.7,9.8,0,13.5 c3.5,3.5,9.1,3.7,12.9,0.6l4.8,4.8c0.3,0.3,0.9,0.3,1.2,0C22.1,21.4,22.1,20.9,21.7,20.5z M4.2,15c-3-3-3-7.8,0-10.8 c3-3,7.8-3,10.8,0c3,3,3,7.8,0,10.8C12,18,7.1,18,4.2,15z"></path></svg>
                    </Search>
                </MainNav>

                {/* Afisha header menu */}
                <HeaderSectionWrapper>
                
                    {/* column 1 */}
                    <HeaderSection>
                        <AfishaMenuColumn1>
                            <AfishaColumnImg>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/gif/screenx_gif.gif"
                                    alt="creenx"
                                    width="230"
                                    height="150"
                                />
                            </AfishaColumnImg>
                            <h2>ScreenX</h2>
                            <Button1>??????????????????</Button1>

                        </AfishaMenuColumn1>

                        {/* column 2 */}
                        <AfishaMenuColumn1>
                            <h2>??????????</h2>
                            <Link href="/">
                                <a>???????????? ?? ????????</a>
                            </Link>
                            <Link href="/">
                                <a>??????????</a>
                            </Link>
                            <Link href="/">
                                <a>ScreenX</a>
                            </Link>
                        </AfishaMenuColumn1>

                        <AfishaMenuColumn1>
                            <h2>???? ????????????????????</h2>
                            <Link href="/">
                                <a>?????????????? ?????????? 17:00</a>
                            </Link>
                            <Link href="/">
                                <a>???????????? 3D</a>
                            </Link>
                            <Link href="/">
                                <a>???????? Dolby Atmos</a>
                            </Link>
                            <Link href="/">
                                <a>???? ?????????? ??????????????????</a>
                            </Link>
                        </AfishaMenuColumn1>


                        <AfishaMenuColumn1>
                            <h2>???? ??????????????????????</h2>
                            <Link href="/">
                                <a>VOKA CINEMA by SILVERSCREEN ?? ?????? Dana Mall</a>
                            </Link>
                            <Link href="/">
                                <a>Silver Screen ?? ?????? Arena City</a>
                            </Link>
                            <Link href="/">
                                <a>MOOON ?? ?????? Triniti</a>
                            </Link>
                        </AfishaMenuColumn1>
                    </HeaderSection>
                </HeaderSectionWrapper>

                {/* Cinemas header menu */}
                <HeaderSectionWrapper2>
                    <HeaderSection>
                        {/* column 1 */}
                        <AfishaMenuColumn1>
                            <AfishaColumnImg>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/vokaHeader.jpg"
                                    alt="creenx"
                                    width="700"
                                    height="467"
                                />
                            </AfishaColumnImg>
                            <h2>???????????????????? Silver Screen cinemas</h2>
                            <p>
                                ???????????????????? ???????????? ?????????????????????? Sony 4K ?? Real D 3D. ???????????????? ???????????????????? Dolby, DCP, Crown, JBL.
                            </p>
                        </AfishaMenuColumn1>

                        {/* column 2 */}
                        <AfishaMenuColumn1>
                            <div>
                                <h2>??????????</h2>
                                <Link href="/">
                                    <a>VOKA CINEMA by SILVERSCREEN ?? ?????? Dana Mall</a>
                                </Link>
                                <Link href="/">
                                    <a>Silver Screen ?? ?????? Arena City</a>
                                </Link>
                            </div>
                            <div>
                                <h2>????????????</h2>
                                <Link href="/">
                                    <a>Moon ?? ?????? Triniti</a>
                                </Link>
                            </div>
                            <div>
                                <h2>????????????????????????</h2>
                                <Link href="/">
                                    <a>Dolby Atmos</a>
                                </Link>
                                <Link href="/">
                                    <a>3D-????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????? ????????????????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????????????????? ????????????????</a>
                                </Link>
                            </div>
                        </AfishaMenuColumn1>

                        {/* column 3 */}
                        <AfishaMenuColumn1>
                            <h2>????????????????????????????</h2>
                            <Link href="/">
                                <a>???????????? ??????????</a>
                            </Link>
                            <Link href="/">
                                <a>?????????????? ?? ??????????????????????</a>
                            </Link>
                        </AfishaMenuColumn1>
                    </HeaderSection>
                </HeaderSectionWrapper2>

                {/* Info header menu */}
                <HeaderSectionWrapper3>
                    <HeaderSection>
                        {/* column 1 */}
                        <AfishaMenuColumn1>
                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/0a212637255d7103efa06d6f199e2959.jpg"
                                    alt="info"
                                    width="230"
                                    height="150"
                                />
                            </div>
                            <h2>????????????????????</h2>
                            <p>
                                Silver Screen cinemas ??? ???????? ?????????????????????? ?? ?????????????????????????????????????? ??????????????????????????, ?????????????????????? ???????????????? ?? ???????????????? ??????????????????????????.
                            </p>
                        </AfishaMenuColumn1>

                        {/* column 2 */}
                        <AfishaMenuColumn1>
                            <div>
                                <h2>?? Silver Screen</h2>
                                <Link href="/">
                                    <a>?????????????? ?? SilverScreen</a>
                                </Link>
                                <Link href="/">
                                    <a>????????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>????????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>????????????????????</a>
                                </Link>
                            </div>
                            <div>
                                <h2>??????????????????????</h2>
                                <Link href="/">
                                    <a>??????????</a>
                                </Link>
                                <Link href="/">
                                    <a>??????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>????????</a>
                                </Link>
                                <Link href="/">
                                    <a>?????????????? ???????????????? ??????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????????????? ?? ???????????? ????????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>?????????????? ?????????????????? ??????????????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????????????????? ??????????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????????????????? ??????????</a>
                                </Link>
                                <Link href="/">
                                    <a>???????????????? ??????????</a>
                                </Link>
                            </div>
                        </AfishaMenuColumn1>

                        {/* column 3 */}
                        <AfishaMenuColumn1>
                            <h2>????????????????????????????</h2>
                            <Link href="/">
                                <a>???????????? ?????????? ?????? ?????????????????????? ??????</a>
                            </Link>
                            <Link href="/">
                                <a>???????????? ?????????? ?????? ???????????????????? ??????</a>
                            </Link>
                            <Link href="/">
                                <a>?????????????? ?? ??????????????????????</a>
                            </Link>
                        </AfishaMenuColumn1>
                    </HeaderSection>
                </HeaderSectionWrapper3>

                {/* Login and RCC header menu */}
                <HeaderSectionWrapper4>
                    <HeaderSection>
                    {/* column 1 */}
                    <AfishaMenuColumn1>
                        <div>
                            <Link href="/">
                                <a>RED CARPET CLUB</a>
                            </Link>
                        </div>
                        <h2>Red Carper Club</h2>
                        <p>
                            ??????????????????????????????, ???????????????????? ?????????? ?? ?????????????? ???????????? ???? ???????????? ?? ??????????????.
                        </p>
                        <Button2>????????????????????????????????????</Button2>
                    </AfishaMenuColumn1>

                    {/* column 2 */}
                    <AfishaMenuColumn1>
                        <h2>?? ?????????????????? ????????????????????</h2>
                        <Link href="/">
                            <a>?? Red Carpet Club</a>
                        </Link>
                        <Link href="/">
                            <a>?????? ?????????? ????????????????????</a>
                        </Link>
                        <Link href="/">
                            <a>?????????????? Red Carpet Club</a>
                        </Link>
                        <Link href="/">
                            <a>?????????? ???????????????????? ??????????????</a>
                        </Link>
                        <Link href="/">
                            <a>????????????????????????</a>
                        </Link>
                    </AfishaMenuColumn1>

                    {/* column 3 */}
                    <AfishaMenuColumn1>
                        <h2>???????? ?? ???????????? ??????????????</h2>
                        <LoginInput type="email" name="email" placeholder="E-mail"/>
                        <LoginInput type="email" name="password" placeholder="????????????"/>
                        <div>
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">?????????????????? ????????</label>
                        </div>
                        <LoginSection>
                            <Button3>??????????</Button3>
                            <LoginIcons>
                                <Link href="/" passHref>
                                    <NavLink style={{display: 'block', width: '44px', height: '44px', fontSize: '0', lineHeight: '0'}} aria-label="fb-login">
                                        <span>
                                            fb
                                            <LoginIcon>
                                                <svg id="svg-icon-soc-facebook" viewBox="0 0 40 40" width="100%" height="100%"><path fill="currentColor" d="M22.265 34.996v-13.7h4.4l.66-5.317h-5.06v-3.41c0-1.547.4-2.6 2.526-2.6h2.716V5.197a36.06 36.06 0 0 0-3.956-.2c-3.913 0-6.59 2.474-6.59 7.04v3.936h-4.446v5.317h4.444v13.7h5.307z"></path></svg>
                                            </LoginIcon> 
                                        </span>
                                    </NavLink>
                                </Link>
                                <Link href="/" passHref>
                                    <NavLink style={{display: 'block', width: '44px', height: '44px', fontSize: '0', lineHeight: '0'}} aria-label="vk-login">
                                        <span>
                                            <LoginIcon>
                                                <svg id="svg-icon-soc-vkontakte" viewBox="0 0 40 40" width="100%" height="100%"><path fill="currentColor" d="M30.914 19.8s4.348-6.35 4.78-8.436a.85.85 0 0 0-.922-1.162H31a1.378 1.378 0 0 0-1.44.954 35.583 35.583 0 0 1-4.52 7.332c-.8.916-1.2 1.193-1.642 1.193-.355 0-.518-.306-.518-1.133V11.31c0-1.01-.116-1.31-.922-1.31H15.91a.67.67 0 0 0-.748.656c0 .954 1.41 1.17 1.41 3.756v5.335c0 1.073-.057 1.49-.546 1.49-1.3 0-4.377-4.618-6.1-9.865A1.516 1.516 0 0 0 8.222 10H4.45a.915.915 0 0 0-.95.954c0 1.046 1.18 5.87 5.817 12.338C12.427 27.644 16.517 30 20.2 30c2.246 0 2.793-.387 2.793-1.37v-3.34c0-.837.317-1.194.777-1.194.518 0 1.433.173 3.57 2.355 2.537 2.505 2.71 3.55 4.092 3.55h4.233a.8.8 0 0 0 .835-.956c0-.983-1.238-2.74-3.14-4.828-.776-1.073-2.043-2.236-2.447-2.773-.575-.625-.403-.983 0-1.643z"></path></svg>
                                            </LoginIcon>
                                        </span>
                                    </NavLink>
                                </Link>
                            </LoginIcons>
                        </LoginSection>
                    </AfishaMenuColumn1>
                    </HeaderSection>
                </HeaderSectionWrapper4>

                {/* Search header menu */}
                <HeaderSectionWrapper5>
                    <HeaderSection>
                        <AfishaMenuColumn1 style={{marginLeft: '200px'}}>
                            <h2>???????????????????? ????????????</h2>
                            <span>??????????</span>
                            <span>??????????????</span>
                            <span>?????????? ????????????????????</span>
                            <hr style={{width: '85px', height: '1px', marginLeft: '5px', opacity: '0.35'}} />
                            <span>???????????????????? ??????????????</span>
                            <span>Red Carpet Club</span>
                        </AfishaMenuColumn1>
                    </HeaderSection>
                </HeaderSectionWrapper5>

            </PageHeader>

            {/* slider */}
            <SliderWrapper>
                {/* slider item 1 */}
                <SliderItem>
                    <SliderPrev />
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1624275922952black_widow.jpg"
                        alt="widow"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderSubtitle>????????????, ????????????????????, ??????????????????????, 16+</SliderSubtitle>
                        <SliderTitle>???????????? ??????????</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                    <SliderNext />
                </SliderItem>
                
                {/* slider item 2 */}
                <SliderItem>
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1624527600968rock_dog.jpg"
                        alt="rock"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderSubtitle>??????????????, ????????????????????, ?????????????????????? 16+</SliderSubtitle>
                        <SliderTitle>??????-?????? 2</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                </SliderItem>

                {/* slider item 3 */}
                <SliderItem>
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1624527680767sound_of_metal.jpg"
                        alt="metal"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderSubtitle>????????????, ?????????? 18+</SliderSubtitle>
                        <SliderTitle>???????? ??????????????</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                </SliderItem>
                
                {/* slider item 4 */}
                <SliderItem>
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1623681423620family.jpg"
                        alt="family"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderTitle>?????????????????????? ???????????? ?? ???????????????? ?????????????? ???? Silver Screen</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                </SliderItem>

                {/* slider item 5 */}
                <SliderItem>
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1620138464943ediny_bilet.jpg"
                        alt="bilet"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderSubtitle>?????? ?????????????????? ??????????????????</SliderSubtitle>
                        <SliderTitle>???????????? ?????????? VOKA+ Silver Screen</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                </SliderItem>
                
                {/* slider item 6 */}
                <SliderItem>
                    <Image 
                        src="https://portal.silverscreen.by:8448/meadiaStorage/bin/system/sitev2/componenthasdescription/photo/1624010117179bloger.jpg"
                        alt="bilet"
                        width="1427"
                        height="670"
                    />
                    <SliderDescription>
                        <SliderSubtitle>??????????????????????, 16+</SliderSubtitle>
                        <SliderTitle>?????????????? ?? ????????????</SliderTitle>
                        <SliderButton>???????????? ??????????</SliderButton>
                    </SliderDescription>
                </SliderItem>
            </SliderWrapper>
            
            {/* Films section */}
            <FilmSection>

                    <FilmSectionHeader>
                        {/* header top */}
                        <FilmSectionHeaderTop>
                            <FilmSectionTitle>???????????????????? Silver Screen</FilmSectionTitle>
                        </FilmSectionHeaderTop>
                        {/* header bottom */}
                        <FilmSectionHeaderBottom>
                            <div>
                                <FilmSectionTab>???????????? ?? ????????</FilmSectionTab>
                                <FilmSectionTab>??????????</FilmSectionTab>
                            </div>
                            <FilmSectionShedule>
                                <Link href="/">
                                    <a>???????????????????? ??????????????</a>
                                </Link>
                            </FilmSectionShedule>
                        </FilmSectionHeaderBottom>
                    </FilmSectionHeader>

                    {/* films gallery */}

                    <FilmGallery events={events} />


            </FilmSection>

            {/* ?????????? 1 */}
            <PromoSectionWrapper>
                <PromoSectionBackground />
                <PromoSection>
                    <PromoColumn style={{width: '740px'}}>
                        <PromoImgWrapper>
                            <Image 
                                src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/db91eb2a57bf57a5a97be78b4b529108.jpg"
                                alt="card"
                                width="600"
                                height="337"
                            />
                        </PromoImgWrapper>
                    </PromoColumn>
                    <PromoColumn style={{width: '500px'}}>
                        <PromoSubtitle>??????????</PromoSubtitle>
                        <PromoTitle>?????? ???????????????????? VISA</PromoTitle>
                        <PromoText>
                            ?????? ???????????? ?????????????? ?? ???????????????????? Silver Screen cinemas ???????????????????? ???????????????????? Visa ???? ?????????????????? ????????????!
                        </PromoText>
                        <PromoButton>??????????????????</PromoButton>
                    </PromoColumn>
                </PromoSection>
            </PromoSectionWrapper>

            {/* ?????????? 2 */}
            <PromoSectionWrapper>
                <PromoSectionBackground />
                <PromoSection>
                    <PromoColumn style={{width: '500px'}}>
                        <PromoSubtitle>??????????</PromoSubtitle>
                        <PromoTitle>
                            ?????????????????????? ???????????? ?? ???????????????? ?????????????? ???? Silver Screen
                        </PromoTitle>
                        <PromoText>
                            ???????? ?????? ???????????????? ?????????????? ???????????????????? ????????????. ???? ?????? ?????
                            ?? ???????????????? ?????????????? ???? Silver Screen ???? ?????????? ???????????? ?????????????????? ?? ??????????????. ???????????????? ?????????? ???? ???????? ????????????????!
                        </PromoText>
                        <PromoButton>
                            ??????????????????
                        </PromoButton>
                    </PromoColumn>
                    <PromoColumn  style={{marginLeft: 'auto'}}>
                        <PromoImgWrapper>
                            <Image 
                                src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/semeinyi-bilet.jpg"
                                alt="bilet"
                                width="600"
                                height="337"
                            />
                        </PromoImgWrapper>
                    </PromoColumn>
                </PromoSection>
            </PromoSectionWrapper>

            {/* Info section */}
            <section>
                <InfoSectionHeader>
                    <Link href="/">
                        <a>?????????? ?? ??????????</a>
                    </Link>
                    <Link href="/">
                        <a>??????????????</a>
                    </Link>
                    <Link href="/">
                        <a>Red Carpet Club</a>
                    </Link>
                </InfoSectionHeader>

                <InfoSectionMain>
                    <p>
                        Silver Screen cinemas ??? ???????????? ?? ???????????????? ???????? ?????????????????????? ??????????????????????????.
                    </p>
                    <p>
                        <Link href="/"><a>?????????????????? ?? ???????? ????????</a></Link> ???? ?????????????????? ?????????????????????????? ?????????????????? ?????????? ?????????????????? ???????????? ???????? ?? ????????????????. ???????????? ?????????? ???????? ?????? ?? ?????????????????????? ???????????? ?????????????????????? ???? 270 ???????????????? ??? Screen X. ?????????? ???????????? ?????????????????? ?????????????????? ?????????????????? ?????????????? ?? ?????????? ????????????, ?????????????? ?????????? ???? ???????????????????????? ????????????????????.
                    </p>
                    <p>
                        <Link href="/"><a>?????????????????? ?? ?????????? ???????? </a></Link> ???? ?????????????????? ?????????????????????? ?????????????? ???????????? ?????? ?????????????????????? ???????????? ?? ?????????? ????????????, ?????????????? ???????????????? ?????????????????? ????????????????, ?????????????? ?????????????????? ????????????????????????, ????????????????-???????????????????????? ?? ???????????? ?? ??????????????????.
                    </p>
                    <p>
                        <Link href="/"><a>???????????????????????????????? MOOON ?? ????????????</a></Link> ??? ?????? ???????????????????? ?????????????????? ?????????? ?? ??????????, ?????????????????? ?????????????? ???? ???????????????? ???????????????????????? ?????????????????????? ???? ???????????? ????????????!
                    </p>
                    <p>
                        <Link href="/"><a>??????????????????</a></Link> ?? Silver Screen ?????????????????????? ???? ??????????????????. ??????????????????????, ???????????????? ??????????????????????, ?????????????????? ????????, ???????????????????????????? ????????????, ?????????????????? ???????????? ????????????????????, ???????????????????? ?????????????????? ?? ???????????????????? ????????????, ?????????????????????? ?? ?????????????????? ?? ???????????????? ???????????????????? ??? ???? ?????????????????? ?? ????????, ?????????? ?????????????????????? ?????????????? ?????????????? ??????????????????????????.
                    </p>
                    <p>
                        ?????????? ????????, ???? ???????????????????????????? ?????????????? ?? ????????????????, ??????????????????????, ?????????????????? ???? ???????????????????????????? ?? ?????????????????????????????? ?????????????? ?????????????? ??????????????.
                    </p>
                    <p>
                        ?? ???????????? ?????????????????????????? ????????????????, ???????????? ?????? <Link href="/"><a>info@silverscreen.by</a></Link>
                    </p>
                </InfoSectionMain>
            </section>

            {/* Subscribtion section */}
            <SubscribeWrapper>
                <SubscribeMain>
                    <SubscribeEmail>
                        <div style={{marginRight: '50px'}}>
                            <Image 
                                src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/CVB.svg"
                                alt="mail"
                                width="44"
                                height="44"
                            />
                        </div>
                        <SubscribeInput type="email" placeholder="E-mail ?????? ?????????? ?? ????????????????"/>
                    </SubscribeEmail>
                    <div>
                        <SubscribeButton>??????????????????????</SubscribeButton>
                    </div>
                </SubscribeMain>
            </SubscribeWrapper>


            {/* footer */}
            <Footer>
                <FooterWrapper>
                    <FooterHr />
                {/* footer nav section */}
                    <FooterTop>
                        <FooterTopNav>
                            <FooterTopColumn>
                                <h2>??????????</h2>
                                <Link href="/">
                                    <a>
                                        ???????????? ?? ????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ScreenX
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ???????? Dolby Atmos
                                    </a>
                                </Link>
                            </FooterTopColumn>
                            
                            <FooterTopColumn>
                                <h2>????????????????????</h2>
                                <Link href="/">
                                    <a>
                                        VOKA CINEMA by Silver Screen ?? ?????? Dana Mall
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        Silver Screen ?? ?????? Arena City
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        MOOON ?? ?????? Triniti
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        Dolby Atmos
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        3D-????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ???????????????????? ??????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ????????????????
                                    </a>
                                </Link>
                            </FooterTopColumn>

                            <FooterTopColumn>
                                <h2>Red Carpet Club</h2>
                                <Link href="/">
                                    <a>
                                        ?? Red Carpet Club
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????? ?????????? ????????????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????????????? Red Carpet Club
                                    </a>
                                </Link>
                            </FooterTopColumn>

                            <FooterTopColumn>
                                <h2>?????? ?? ??????????????</h2>
                                <Link href="/">
                                    <a>
                                        ??????????-??????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????????????????? ?? ??????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        Healthy food
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????
                                    </a>
                                </Link>
                            </FooterTopColumn>

                            <FooterTopColumn>
                                <h2>????????</h2>
                                <Link href="/">
                                    <a>
                                        ??????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ??????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ???????????????????? ??????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????????????? ?????????????????? ??????????????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????????????? ?? ????????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ?????????????? ?? ????????????????????
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        ???????????????? ??????????
                                    </a>
                                </Link>
                            </FooterTopColumn>
                        </FooterTopNav>
                    </FooterTop>
                

                    {/* footer links section */}
                    <FooterMiddle>
                        {/* left */}
                        <FooterMiddleLeft>
                            <Link href="/" passHref>
                                <NavLink style={{fontSize: '0', lineHeight: '0'}} aria-label="social-vk">
                                    <span>
                                        vk
                                        <svg id="svg-icon-soc-vkontakte" viewBox="0 0 40 40" width="16" height="16"><path fill="currentColor" d="M30.914 19.8s4.348-6.35 4.78-8.436a.85.85 0 0 0-.922-1.162H31a1.378 1.378 0 0 0-1.44.954 35.583 35.583 0 0 1-4.52 7.332c-.8.916-1.2 1.193-1.642 1.193-.355 0-.518-.306-.518-1.133V11.31c0-1.01-.116-1.31-.922-1.31H15.91a.67.67 0 0 0-.748.656c0 .954 1.41 1.17 1.41 3.756v5.335c0 1.073-.057 1.49-.546 1.49-1.3 0-4.377-4.618-6.1-9.865A1.516 1.516 0 0 0 8.222 10H4.45a.915.915 0 0 0-.95.954c0 1.046 1.18 5.87 5.817 12.338C12.427 27.644 16.517 30 20.2 30c2.246 0 2.793-.387 2.793-1.37v-3.34c0-.837.317-1.194.777-1.194.518 0 1.433.173 3.57 2.355 2.537 2.505 2.71 3.55 4.092 3.55h4.233a.8.8 0 0 0 .835-.956c0-.983-1.238-2.74-3.14-4.828-.776-1.073-2.043-2.236-2.447-2.773-.575-.625-.403-.983 0-1.643z"></path></svg>
                                    </span>
                                </NavLink>
                            </Link>
                            <Link href="/" passHref>
                                <NavLink style={{fontSize: '0', lineHeight: '0'}} aria-label="social-fb">
                                    <span>
                                        <svg id="svg-icon-soc-facebook" viewBox="0 0 40 40" width="16" height="16"><path fill="currentColor" d="M22.265 34.996v-13.7h4.4l.66-5.317h-5.06v-3.41c0-1.547.4-2.6 2.526-2.6h2.716V5.197a36.06 36.06 0 0 0-3.956-.2c-3.913 0-6.59 2.474-6.59 7.04v3.936h-4.446v5.317h4.444v13.7h5.307z"></path></svg>
                                    </span>
                                </NavLink>
                            </Link>
                            <Link href="/" passHref>
                                <NavLink style={{fontSize: '0', lineHeight: '0'}} aria-label="social-inst">
                                    <span>
                                        <svg id="svg-icon-soc-instagram" viewBox="0 0 40 40" width="16" height="16"><path fill="currentColor" d="M26.875 35h-13.75A8.134 8.134 0 0 1 5 26.874v-13.75A8.134 8.134 0 0 1 13.125 5h13.75A8.134 8.134 0 0 1 35 13.123v13.75A8.134 8.134 0 0 1 26.875 35zM32.5 13.123A5.63 5.63 0 0 0 26.875 7.5h-13.75A5.63 5.63 0 0 0 7.5 13.123v13.75a5.632 5.632 0 0 0 5.625 5.627h13.75a5.632 5.632 0 0 0 5.625-5.626v-13.75zm-4.53.626a1.72 1.72 0 1 1 1.718-1.72 1.72 1.72 0 0 1-1.72 1.72zM20 27.5a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5zM20 15a5 5 0 1 0 5 5 5.005 5.005 0 0 0-5-5z"></path></svg>
                                    </span>
                                </NavLink>
                            </Link>
                        </FooterMiddleLeft>

                        {/* right */}
                        <FooterMiddleRight>
                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/visa2.svg"
                                    alt="visa"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/visa1.svg"
                                    alt="visa-secure"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/mastercard1.svg"
                                    alt="mastercard"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/mastercard2.svg"
                                    alt="mastercard2"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/belcard1.svg"
                                    alt="belcard"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/belcard2.svg"
                                    alt="belcard2"
                                    width="62"
                                    height="32"
                                />
                            </div>

                            <div>
                                <Image 
                                    src="https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/CRz.svg"
                                    alt="assist"
                                    width="62"
                                    height="32"
                                />
                            </div>
                        </FooterMiddleRight>
                    </FooterMiddle>
                    
                    <FooterHr />
                    {/* Copyright section */}
                    <FooterBottom>
                        <FooterBottomTop>
                            <FooterBottomTopLeft>
                                <p>?? 2012???2021 ?????? ?????????? ??????????</p>
                            </FooterBottomTopLeft>
                            <FooterBottomTopRight>
                                <Link href="/"><a>?????????????????? ????????????</a></Link>
                                <Link href="/"><a>???????????????????? ?? ??????????????????????????</a></Link>
                            </FooterBottomTopRight>
                        </FooterBottomTop>

                        <FooterBottomBottom>
                            ???????????????????????????????? ???????????????? ???????????????? ?????????????????? ?????????????????????????????? ???????????????? ???? 13.11.2014 ??. ?? ???????????? ?????????????????????????????? ???????????????? ?????????????????????? ?????? ?? ???????????????????????????? ???????????????????????????????? ???? ???192376313. ?????? 192376313, ?????????????????????? ??????????: 220114, ??. ??????????, ????. ??. ????????????????????, ??.11, ??????. 5, ?????????? ??????. 5-11 ????????????????-?????????????? silverscreen.by. ?????????? ????????????: ??????????????????????????. ???????? ?????????????????????? ?? ???????????????? ??????????????: 01.12.2020 ??.
                            <br />e-mail: info@silverscreen.by.
                        </FooterBottomBottom>
                    </FooterBottom>
                </FooterWrapper>
            </Footer>
        </div>
    )
}
