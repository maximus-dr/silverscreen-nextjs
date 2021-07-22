import { propsList } from "../../variables/variables";


export function parseProp(styles, propName) {

    if (!styles) return {};
    
    const propData = propsList[propName];
    const propValue = styles[propName];

    const result = {
        name: propName
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

        if (propValue === 'none') return { custom: false };

        let params = propValue.split(' ');

        if (propValue.indexOf('rgba') > 0) {
            const rgba = propValue.slice(propValue.indexOf('rgba'));
            params[2] = rgba;
        }

        result.custom = true;
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
        if (propValue.includes('px') || propValue.includes('%')) {
            const params = propValue.split(' ');
            const x = params[0];
            const y = params[1];
            const sizeX = {
                value: 
                    x.includes('px') && x.replace('px', '') || 
                    x.includes('%') && x.replace('%', '') || 
                    x === 'auto' && '',
                unit: 
                    x.includes('px') && 'px' || 
                    x.includes('%') && '%' || 
                    x === 'auto' && 'auto'
            };
            const sizeY = {
                value: 
                    y.includes('px') && y.replace('px', '') || 
                    y.includes('%') && y.replace('%', '') || 
                    y === 'auto' && '',
                unit: 
                    y.includes('px') && 'px' || 
                    y.includes('%') && '%' || 
                    y === 'auto' && 'auto'
            }
            result.value = 'unit unit';
            result.sizeX = sizeX;
            result.sizeY = sizeY;

            return result;
        }

        result.value = propValue;
    }

    if (propData.type === 'backgroundPosition' && propValue) {
        if (propValue.includes('px') || propValue.includes('%')) {
            const params = propValue.split(' ');
            const x = params[0];
            const y = params[1];
            const posX = {
                value: 
                    x.includes('px') && x.replace('px', '').trim() ||
                    x.includes('%') && x.replace('%', '').trim() ||
                    x,
                unit:
                    x.includes('px') && 'px' ||
                    x.includes('%') && '%' ||
                    ''
            }
            const posY = {
                value: 
                    y.includes('px') && y.replace('px', '').trim() ||
                    y.includes('%') && y.replace('%', '').trim() ||
                    y,
                unit:
                    y.includes('px') && 'px' ||
                    y.includes('%') && '%' ||
                    ''
            }
            result.posX = posX;
            result.posY = posY;
            return result;
        }
    }

    return result;
}