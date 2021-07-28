import { IconDesktop, IconSmartphone, IconTablet } from "./Icons";


export const screenItems = [
    {
        id: 'screen_mobile',
        style: {
            width: '20px', height: '25px', marginBottom: '4px'
        },
        value: 320,
        icon: IconSmartphone
    },
    {
        id: 'screen_mobile_landscape',
        style: {
            width: '20px', height: '17px', transform: 'rotate(90deg)', marginRight: '3px'
        },
        value: 480,
        icon: IconSmartphone
    },
    {
        id: 'screen_tablet',
        style: {
            width: '23px', height: '23px', marginBottom: '3px'
        },
        value: 640,
        icon: IconTablet
    },
    {
        id: 'screen_tablet_landscape',
        style: {
            width: '20px', height: '17px', transform: 'rotate(90deg)', marginRight: '3px'
        },
        value: 1024,
        icon: IconTablet
    },
    {
        id: 'screen_desktop',
        style: {
            width: '30px', height: '30px'
        },
        value: 1200,
        icon: IconDesktop
    }
];
