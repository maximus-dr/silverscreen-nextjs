import { propsList } from "../../variables/props";


const parseProp = (styles, propName) => {

    if (!styles) return {};

    const propData = propsList[propName];
    const propValue = styles[propName];

    const result = {
        name: propName
    }

    if (propData.default) {
        result.default = propData.default;
    }

    if (!propData) {
        console.log('Такое свойство не найдено');
        return null;
    }

    if (propData.type === 'select' || propData.type === 'text') {
        result.value = propValue;
    }


    if (propData.type === 'num' && !propData.units) {

        if (!Number(propValue) && propValue !== '0') return result;
        if (Number(propValue)) {
            result.value = propValue;
            return result;
        }
        if (propValue === '0') {
            result.value = '0';
            return result;
        }
    }

    if (propData.type === 'num' && propData.units) {

        if (propValue === '0') {
            result.value = '0';
            return result;
        }

        propData.units.forEach(unit => {
            if (String(propValue).includes(unit.name) && propValue) {
                result.value = propValue.replace(unit.name, '');
                result.unit = unit.name;
            }
        })
    }

    if (propData.type === 'border' && propValue) {

        if (propValue === 'none') return { custom: false, name: propName };

        let params = propValue.split(' ');

        if (propValue.indexOf('rgba') > 0) {
            const rgba = propValue.slice(propValue.indexOf('rgba'));
            params[2] = rgba;
        }

        result.custom = true;
        result.name = propName;
        result.borderWidth = params[0];
        result.borderStyle = params[1];
        result.borderColor = params[2];
    }

    if (propData.type === 'textShadow' && propValue) {
        if (propValue === 'none') return {custom: false}

        let params = propValue.split(' ');

        if (propValue.indexOf('rgba') > 0) {
            const rgba = propValue.slice(propValue.indexOf('rgba'));
            params[3] = rgba;
        }

        result.custom = true;
        result.offsetX = params[0];
        result.offsetY = params[1];
        result.blur = params[2];
        result.color = params[3];
    }

    if (propData.type === 'fontFamily' && propValue) {
        const params = propValue.split(',');

        if (params.length === 3) {
            result.primary = params[0].trim();
            result.secondary = params[1].trim();
            result.serif = params[2].trim();
        }

        if (params.length === 2) {
            result.primary = params[0].trim();
            result.secondary = null;
            result.serif = params[1].trim();
        }
    }

    if (propData.type === 'backgroundSize' && propValue) {
        if (propValue.includes('px') || propValue.includes('%') || propValue.includes('auto') && propValue.length > 4) {
            const params = propValue.split(' ');
            const x = params[0];
            const y = params[1];
            const sizeX = {
                value:
                    x.includes('px') && x.replace('px', '') ||
                    x.includes('%') && x.replace('%', '') ||
                    x === 'auto' && '' ||
                    '',
                unit:
                    x.includes('px') && 'px' ||
                    x.includes('%') && '%' ||
                    x === 'auto' && 'auto' ||
                    ''
            };
            const sizeY = {
                value:
                    y.includes('px') && y.replace('px', '') ||
                    y.includes('%') && y.replace('%', '') ||
                    y === 'auto' && '' ||
                    '',
                unit:
                    y.includes('px') && 'px' ||
                    y.includes('%') && '%' ||
                    y === 'auto' && 'auto' ||
                    ''
            }
            // if (sizeX.value === '') sizeX.value = '100';
            // if (sizeY.value === '') sizeY.value = '50';
            result.value = 'unit';
            result.sizeX = sizeX;
            result.sizeY = sizeY;

            return result;
        }

        if (propValue === 'unit') {

        }

        result.value = propValue;
    }


    if (propData.type === 'backgroundPositionX') {
        if (propValue) {
            const x = propValue;
            result.value =
                x.includes('px') && x.replace('px', '').trim() ||
                x.includes('%') && x.replace('%', '').trim() ||
                '';
            result.unit =
                x.includes('px') && 'px' ||
                x.includes('%') && '%';
            return result;
        }
        if (!propValue) {
            result.value = '';
            result.unit = 'default';
            return result;
        }
    }

    if (propData.type === 'backgroundPositionY') {
        if (propValue) {
            const y = propValue;
            result.value =
                y.includes('px') && y.replace('px', '').trim() ||
                y.includes('%') && y.replace('%', '').trim() ||
                '';
            result.unit =
                y.includes('px') && 'px' ||
                y.includes('%') && '%';
            return result;
        }
        if (!propValue) {
            result.value = '';
            result.unit = 'default';
            return result;
        }
    }


    if (propData.type === 'backgroundImage' && propValue) {
        if (propValue.includes('url')) {
            result.value = propValue.replace(`url('`, '').replace(`')`, '').trim();
            result.url = true;
        }

        if (propValue.includes('linear-gradient')) {
            const value = {
                deg: '',
                colors: {
                    0: {
                        value: '',
                        point: ''
                    },
                    1: {
                        value: '',
                        point: ''
                    },
                    2: {
                        value: '',
                        point: ''
                    },
                    3: {
                        value: '',
                        point: ''
                    }
                }
            }

            let colors = [];


            const splitted = propValue.trim().replace('linear-gradient(', '').replace(')', '').split(', ');

            splitted.forEach(item => {
                if (item.includes('deg')) {
                    value.deg = item.replace('deg', '');
                }
                if (item.includes('%')) {
                    const splitted = item.split(' ');
                    colors.push(splitted);
                }
                if (!item.includes('deg') && !item.includes('%')) {
                    colors.push(item);
                }
            });

            colors.forEach((item, i) => {
                if (Array.isArray(item)) {
                    value.colors[i].value = item[0];
                    value.colors[i].point = item[1].replace('%', '');
                }
                if (!Array.isArray(item)) {
                    value.colors[i].value = item;
                }
            });

            result.value = value;
            result.gradient = 'linear-gradient';
        }

        if (propValue.includes('radial-gradient')) {
            const value = {
                deg: '',
                colors: {
                    0: {
                        value: '',
                        point: ''
                    },
                    1: {
                        value: '',
                        point: ''
                    },
                    2: {
                        value: '',
                        point: ''
                    },
                    3: {
                        value: '',
                        point: ''
                    }
                }
            }

            const colors = propValue.trim().replace('radial-gradient(', '').replace(')', '').split(', ');
            colors.forEach((item, i) => {
                value.colors[i].value = item;
            });

            result.value = value;
            result.gradient = 'radial-gradient';
        }
    }
    return result;
}


const setPropToComponentsData = (componentsData, prop) => {
    if (componentsData.id === prop.id) {
        if (prop.subComponent) {
            console.log('subcomponent');
            return {...componentsData}
        }


        return {
            ...componentsData,
            styles: {
                ...componentsData.styles,
                common: {
                    ...componentsData.styles.common,
                    [prop.name]: prop.value
                }
            }
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setPropToComponentsData(child, prop);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}


const setSettingsPropToComponentsData = (componentsData, prop) => {
    if (componentsData.id === prop.id) {
        return {
            ...componentsData,
            settings: {
                ...componentsData.settings,
                [prop.name]: prop.value
            }
        }
    }
    const children = componentsData.childrenList.map(child => {
        return setSettingsPropToComponentsData(child, prop);
    });
    return {
        ...componentsData,
        childrenList: children
    }
}



export {
    parseProp,
    setPropToComponentsData,
    setSettingsPropToComponentsData
}
