import styled, {css} from "styled-components";

export const PageHeader = styled.header`
    padding-top: 25px;
`;

export const MainNav = styled.nav`
    position: relative;
    z-index: 1;
    width: 1300px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MainLogo = styled.div`
    margin-right: 128px;
    width: 170px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainLogoIcon = styled.div`
    width: 40px;
    height: 52px;
`;

export const MainLogoTitle = styled.div`
    width: 170px;
    display: flex;
    justify-content: space-between;
`;

export const MainLogoTitleLeft = styled.div`
    width: 84px;
    height: 22px;
`;

export const MainLogoTitleRight = styled.div`
    width: 84px;
    height: 22px;
`;

export const MainLogoSubtitle = styled.div`
    width: 78px;
    height: 10px;
`;

export const PlaceSelect = styled.div`
    margin-right: 120px;
`;

export const HeaderMenu = styled.div`
    margin-right: 50px;
    width: 295px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderPromo = styled.div`
    width: 104px;
    height: 36px;
    margin-right: 60px;
    background: url('https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/newCinemaHeader.png') no-repeat;
`;

export const Rcc = styled.div`
    width: 158px;
    height: 68px;
    padding: 9px 5px;
    

    & > svg {
        width: 158px;
        height: 20px;
        border: 1px dashed;
    }
`;

export const Search = styled.div`
    width: 22px;
    height: 22px;
    margin-left: auto;
`;

export const HeaderSectionWrapper = styled.div`
    position: relative;
    margin-top: -115px;
    padding-top: 115px;
    background: #181818;
    background-image: linear-gradient(
    15deg
    ,#51102b,#000 66%,#000);

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.35;
        background: url('http://localhost:3000/static/media/menu-bg.7a3d5432.svg') no-repeat left bottom / 55% auto;
    }
`;

export const HeaderSectionWrapper2 = styled.div`
    position: relative;
    padding-top: 115px;
    background: #181818;
    background-image: linear-gradient(
15deg
,#411d47,#000 66%,#000);

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.35;
        background: url('http://localhost:3000/static/media/menu-bg.7a3d5432.svg') no-repeat left bottom / 55% auto;
    }
`;

export const HeaderSectionWrapper3 = styled.div`
    position: relative;
    padding-top: 115px;
    background: #181818;
    background-image: linear-gradient(
15deg
,#213711,#000 66%,#000);

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.35;
        background: url('http://localhost:3000/static/media/menu-bg.7a3d5432.svg') no-repeat left bottom / 55% auto;
    }
`;

export const HeaderSectionWrapper4 = styled.div`
    position: relative;
    padding-top: 115px;
    background: #181818;
    background-image: linear-gradient(
15deg
,red,#000 66%,#000);

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.35;
        background: url('http://localhost:3000/static/media/menu-bg.7a3d5432.svg') no-repeat left bottom / 55% auto;
    }
`;

export const HeaderSectionWrapper5 = styled.div`
    position: relative;
    background: #181818;

    &::before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.35;
        background: url('http://localhost:3000/static/media/menu-bg.7a3d5432.svg') no-repeat left bottom / 55% auto;
    }
`;

export const HeaderSection = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    padding: 40px 30px 30px 10px;
`;

export const AfishaMenuColumn1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 30px;

    & > img {
        width: 230px;
        height: 150px;
    }

    a {
        color: rgba(200,199,198,0.8);
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        cursor: pointer;
        border: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: .2s;
        transition: .2s;
        outline: 0;
    }

    h2 {
        margin-bottom: 14px;
        font-size: 1.47em;
        text-size-adjust: 100%;
        white-space: pre-line;
        font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
        font-size: 1.47em;
        font-weight: 700;
        line-height: 30px;
    }
`;

export const AfishaColumnImg = styled.div`
    width: 230px;
    height: 150px;
`;

export const Button1 = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: 2px solid #fff;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    width: 144px;
    background: transparent;
    color: #fff;
`;

export const Button2 = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: 2px solid #fff;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    background: transparent;
    color: #fff;
    width: 205px;
`;

export const Button3 = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: none;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    background: rgba(255,255,255,0);
    color: inherit;
    font-size: 1.0em;
    line-height: 1.625em;
    width: 105px;
    box-shadow: 0 0 0 2px #d40754 inset;
`;

export const LoginInput = styled.input`
    height: 3.325em;
    padding: 1.1875em 0.9375em 0.4375em;
    box-sizing: border-box;
    display: block;
    width: 436px;
    height: 50px;
    max-width: 100%;
    border: none;
    border-radius: 5px;
    background: rgba(255,255,255,.1);
    box-shadow: 0 0 0 1px rgb(255 255 255 / 35%) inset;
    color: #fff;
    outline: 0;
    margin-bottom: 20px;
`;

export const LoginIcon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid #fff;
    padding: 10px;
    color: #fff;
`;

export const LoginSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LoginIcons = styled.div`
    padding: 10px;
    margin-top: 10px;
    width: 100px;
    display: flex;
    justify-content: space-between;
`;


export const SliderWrapper = styled.div`
    width: 100%;
`;

export const SliderItem = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 670px;

    img {
        right: 0;
    }

    &:before {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(
    78deg
    ,rgba(9,9,10,.4) 0,rgba(9,9,10,.4) 44%,rgba(9,9,10,0) 60%,rgba(9,9,10,0));
        background: linear-gradient(
    78deg
    ,rgba(9,9,10,1) 0%,rgba(9,9,10,1) 44%,rgba(9,9,10,0) 60%,rgba(9,9,10,0))
    }
`;

export const SliderDescription = styled.div`
    position: absolute;
    z-index: 2;
    left: 360px;
    bottom: 100px;
    width: 605px;
`;

export const SliderTitle = styled.h2`
    text-size-adjust: 100%;
    white-space: pre-line;
    font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    font-size: 3.125em;
    font-weight: 700;
    line-height: 60px;
    margin: 0 0;
    margin-bottom: 30px;
`;

export const SliderSubtitle = styled.p`
    color: rgba(200,199,198,0.8);
    text-transform: uppercase;
`;

export const SliderButton = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: none;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    background: rgba(255,255,255,0);
    color: inherit;
    font-size: 1.0em;
    line-height: 1.625em;
    font-family: Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    text-overflow: ellipsis;
    text-align: center;
    text-decoration: none;
    outline: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: .2s;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 0 2px #d40754 inset;
`;

export const SliderPrev = styled.div`
    width: 331px;
    height: 670px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
`;

export const SliderNext = styled.div`
    width: 331px;
    height: 670px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

export const FilmSection = styled.div`
    width: 100%;
    padding: 15px 0px 60px 0;
    background: no-repeat url(https://portal.silverscreen.by:8448/meadiaStorage/imgsite/svg/posters-bg.svg) center top/100% auto,linear-gradient(to bottom,rgba(24,24,24,.8),#181818);
`;

export const FilmSectionHeader = styled.div`
    width: 1300px;
    margin: 0 auto;
`;

export const FilmSectionTitle = styled.h2`
    text-size-adjust: 100%;
    white-space: pre-line;
    font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    font-size: 3.125em;
    font-weight: 700;
    line-height: 60px;
    margin: 0 0;
    font-size: 3.125em;
    font-weight: 700;
    line-height: 60px;
    margin: 0 0;
`;

export const FilmSectionHeaderTop = styled.div`
    padding: 20px 30px 35px;
`;

export const FilmSectionHeaderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 7px;
        left: 15px;
        width: 1285px;
        height: 1px;
        background: rgba(255, 255, 255, 0.3);
    }
`;

export const FilmSectionTab = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 0 1.0625em 0.4375em;
    padding-bottom: 1.6875em;
    border-bottom: 3px solid rgba(144,144,143,0);
    color: rgba(144,144,143,0.8);
    transition: .2s;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.75em;
    box-sizing: border-box;
    cursor: pointer;
    color: rgba(255,255,255,0.8);
    border-bottom-color: rgba(255,255,255,0.8);
    border-bottom: 3px solid;
    cursor: default;
`;

export const FilmSectionShedule = styled.div`
    flex: 0 0 auto;
    padding: 0px 15px 20px 15px;
    display: inline-flex;
    vertical-align: middle;
    color: rgba(255,255,255,0.8);
    transition: .2s;
    cursor: pointer;
    font-weight: 500;
    text-align: left;

    a {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
    }
`;

export const PromoSectionWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const PromoSectionBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: no-repeat center / 0 0;
    z-index: 0;
    pointer-events: none;
    background-image: url('https://portal.silverscreen.by:8448/meadiaStorage/imgsite/img/b3d38034f2dffd9a33714e1da0c48eff.png');

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        content: '';
        background: inherit;
        background-size: cover;
        -webkit-filter: blur(20px);
        filter: blur(20px);
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        content: '';
        background: rgba(0,0,0,.7);
    }
`;

export const PromoSection = styled.div`
    padding-left: 20px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    min-width: 1300px;
    text-align: start;
    position: relative;
    padding: 70px 30px;
    display: flex;
`;

export const PromoImgWrapper = styled.div`
    width: 600px;
    height: 337px;
    border-radius: 22px;
    overflow: hidden;
`;

export const PromoColumn = styled.div`
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PromoSubtitle = styled.span`
    display: inline-block;
    text-size-adjust: 100%;
    white-space: pre-line;
    font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    color: rgba(200,199,198,.8);
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const PromoTitle = styled.h2`
    text-size-adjust: 100%;
    white-space: pre-line;
    font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    font-size: 2.25em;
    font-weight: 700;
    line-height: 42px;
    margin: 0 0;
    margin-bottom: 25px;
`;

export const PromoText = styled.p`
    white-space: pre-line;
    font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 42px;
    margin: 0 0;
    margin-bottom: 25px;
    line-height: 32px;
`;

export const PromoButton = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: none;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    background: rgba(255,255,255,0);
    color: inherit;
    font-size: 1.0em;
    line-height: 1.625em;
    font-family: Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    text-overflow: ellipsis;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: .2s;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 0 2px #d40754 inset;
    width: 146px;
    height: 44px;
`;

export const InfoSectionHeader = styled.header`
    width: 100%;
    padding: 45px 0;
    display: flex;
    justify-content: center;

    a {
        border: none;
        border-radius: 22px;
        height: 44px;
        padding: 9px 30px;
        position: relative;
        background: rgba(255,255,255,0);
        color: inherit;
        font-size: 1.0em;
        line-height: 1.625em;
        font-family: Ubuntu,Roboto,Arial,Helvetica,sans-serif;
        text-overflow: ellipsis;
        text-align: center;
        text-decoration: none;
        outline: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: .2s;
        cursor: pointer;
        user-select: none;
        box-shadow: 0 0 0 2px #d40754 inset;
        box-shadow: none;
        color: #1c9cdf;
        display: block;
        cursor: pointer;
        border: none;
        text-decoration: none;
        transition: .2s;
        outline: 0;
    }
`;

export const InfoSectionMain = styled.div`
    width: 1300px;
    margin: 16px auto;
    padding: 45px 30px 0;
`;


export const SubscribeWrapper = styled.div`
    width: 100%;
    padding: 30px 0;
    background: #181818;
`;

export const SubscribeMain = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SubscribeEmail = styled.div`
    width: 540px;
    display: flex;
    justify-content: space-between;
    margin-left: 280px;
`;

export const SubscribeInput = styled.input`
    width: 456px;
    height: 44px;
    padding: 10px;
    font-size: 1.25em;
    display: block;
    height: 2.2em;
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 0.5em 0px 0.5em 0px;
    background: 0 0;
    color: #fff;
    font-weight: 400;
    font-family: Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    transition: .2s;
    box-sizing: border-box;
    line-height: 1.3em;
    outline: none;
    appearance: none;
`;

export const SubscribeButton = styled.button`
    display: inline-block;
    vertical-align: middle;
    border: none;
    border-radius: 22px;
    height: 44px;
    padding: 9px 30px;
    position: relative;
    background: rgba(255,255,255,0);
    color: inherit;
    font-size: 1.0em;
    line-height: 1.625em;
    font-family: Ubuntu,Roboto,Arial,Helvetica,sans-serif;
    text-overflow: ellipsis;
    text-align: center;
    text-decoration: none;
    outline: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: .2s;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 0 2px #d40754 inset;
    box-shadow: 0 0 0 2px rgb(200 199 198 / 80%) inset;
    color: rgba(200,199,198,0.8);
    font-weight: 500 !important;
    width: 160px;
    height: 44px;
    margin-right: 280px;
`;

export const Footer = styled.footer`
    width: 100%;
    padding: 0 0 45px 0;
`;

export const FooterWrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
`;

export const FooterTop = styled.section``;

export const FooterMiddle = styled.section`
    margin-top: 25px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const FooterMiddleLeft = styled.div`
    display: flex;
    justify-content: space-around;
    width: 180px;
    height: 77px;

    a {
        width: 36px;
        height: 36px;
        padding: 7px;
        color: rgba(255, 255, 255, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
    }
`;

export const FooterMiddleRight = styled.div`
    display: flex;
    justify-content: space-around;
    width: 644px;
    height: 77px;
`;

export const FooterBottom = styled.section``;

export const FooterHr = styled.hr`
    border: none;
    border-top: 1px solid rgba(255,255,255,.15);
    margin: 45px 0;
`;

export const FooterTopNav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const FooterTopColumn = styled.div`
    width: 216px;
    display: flex;
    flex-direction: column;

    h2 {
        text-size-adjust: 100%;
        white-space: pre-line;
        font: 400 1em/1.625em Ubuntu,Roboto,Arial,Helvetica,sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        margin: 0.875em 0;
        color: rgba(255,255,255,0.8);
    }

    a {
        margin-bottom: 10px;
        font-size: 14px;
        padding: 0;
        margin-left: 0;
        line-height: 24px;
        color: rgba(200,199,198,0.8);
    }
`;

export const FooterBottomTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterBottomTopLeft = styled.div`
    width: 207px;
    height: 24px;
    margin: 0 20px 10px;
    font-size: 14px;
`;

export const FooterBottomTopRight = styled.div`
    margin: 0 20px 10px;
    width: 352px;
    height: 24px;
    display: flex;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
`;

export const FooterBottomBottom = styled.p`
    width: 100%;
    cursor: default;
    margin-top: 45px;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
`;

export const NavLink = styled.a``;