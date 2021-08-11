import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseProp } from '../../../../../../../core/functions/admin/props';
import { setProp } from '../../../../../../../store/actions/document';
import { BackgroundImageLabel, BackgroundImageRadio, BackgroundImageRow, BackgroundImageTextarea, BackgroundImageWrapper, GradientDegInput, GradientDegInputWrapper, GradientInput, GradientInputsWrapper, GradientLabel, GradientRow, GradientSelect, GradientStopInput } from './BackgroundImageStyled';



export default function BackgroundImage(props) {
    const {parsedProp, activeComponent} = props;
    const resolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const [type, setType] = useState('url');
    const isGradient = type === 'gradient';
    const isRadialGradient = parsedProp && parsedProp.gradient && parsedProp.gradient === 'radial-gradient' || false;


    useEffect(() => {
        if (parsedProp && parsedProp.url) {
            setType('url');
        }

        if (parsedProp && parsedProp.gradient) {
            setType('gradient');
        }
    }, [parsedProp]);




    const gradient = {
        type: parsedProp.gradient || '',
        deg: parsedProp.gradient && parsedProp.value && parsedProp.value.deg || '',
        color1: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[0].value || '',
        color2: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[1].value || '',
        color3: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[2].value || '',
        color4: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[3].value || '',
        point1: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[0].point || '',
        point2: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[1].point || '',
        point3: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[2].point || '',
        point4: parsedProp.gradient && parsedProp.value && parsedProp.value.colors[3].point || ''
    }




    const onGradientDegChange = (e, gradient) => {
        const type = gradient.type || 'linear-gradient';
        const color1 = gradient.color1;
        const point1 = gradient.point1 ? ' ' + gradient.point1 + '%' : '';
        const color2 = gradient.color2 ? ', ' + gradient.color2 : '';
        const point2 = gradient.point2 ? ' ' + gradient.point2 + '%' : '';
        const color3 = gradient.color3 ? ', ' + gradient.color3 : '';
        const point3 = gradient.point3 ? ' ' + gradient.point3 + '%' : '';
        const color4 = gradient.color4 ? ', ' + gradient.color4 : '';
        const point4 = gradient.point4 ? ' ' + gradient.point4 + '%' : '';

        const value = e.target.value ? e.target.value + 'deg, ' : '';

        const prop = `${type}(${value}${color1}${point1}${color2}${point2}${color3}${point3}${color4}${point4})`;
        dispatch(setProp({
            name: 'backgroundImage',
            value: prop,
            resolution,
            id: activeComponent.id
        }));
    };

    const onGradientColorChange = (e, gradient, colorName) => {
        const type = gradient.type || 'linear-gradient';
        const deg = gradient.deg ? gradient.deg + 'deg, ' : '';
        let color1 = gradient.color1;
        let color2 = gradient.color2 ? ', ' + gradient.color2 : '';
        let color3 = gradient.color3 ? ', ' + gradient.color3 : '';
        let color4 = gradient.color4 ? ', ' + gradient.color4 : '';
        const point1 = gradient.point1 ? ' ' + gradient.point1 + '%' : '';
        const point2 = gradient.point2 ? ' ' + gradient.point2 + '%' : '';
        const point3 = gradient.point3 ? ' ' + gradient.point3 + '%' : '';
        const point4 = gradient.point4 ? ' ' + gradient.point4 + '%' : '';

        if (colorName === 'color1') color1 = e.target.value;
        if (colorName === 'color2') color2 = e.target.value ? ', ' + e.target.value : '';
        if (colorName === 'color3') color3 = e.target.value ? ', ' + e.target.value : '';
        if (colorName === 'color4') color4 = e.target.value ? ', ' + e.target.value : '';

        const prop = `${type}(${deg}${color1}${point1}${color2}${point2}${color3}${point3}${color4}${point4})`;
        dispatch(setProp({
            name: 'backgroundImage',
            value: prop,
            resolution,
            id: activeComponent.id
        }));
    }

    const onGradientPointChange = (e, gradient, pointName) => {
        const type = gradient.type || 'linear-gradient';
        const deg = gradient.deg ? gradient.deg + 'deg, ' : '';
        let color1 = gradient.color1;
        let color2 = gradient.color2 ? ', ' + gradient.color2 : '';
        let color3 = gradient.color3 ? ', ' + gradient.color3 : '';
        let color4 = gradient.color4 ? ', ' + gradient.color4 : '';
        let point1 = gradient.point1 ? ' ' + gradient.point1 + '%' : '';
        let point2 = gradient.point2 ? ' ' + gradient.point2 + '%' : '';
        let point3 = gradient.point3 ? ' ' + gradient.point3 + '%' : '';
        let point4 = gradient.point4 ? ' ' + gradient.point4 + '%' : '';

        if (pointName === 'point1') point1 = e.target.value ? ' ' + e.target.value + '%' : '';
        if (pointName === 'point2') point2 = e.target.value ? ' ' + e.target.value + '%' : '';
        if (pointName === 'point3') point3 = e.target.value ? ' ' + e.target.value + '%' : '';
        if (pointName === 'point4') point4 = e.target.value ? ' ' + e.target.value + '%' : '';

        const prop = `${type}(${deg}${color1}${point1}${color2}${point2}${color3}${point3}${color4}${point4})`;
        dispatch(setProp({
            name: 'backgroundImage',
            value: prop,
            resolution,
            id: activeComponent.id
        }));
    }

    const onGradientSelect = (e, gradient) => {
        const deg = gradient.deg ? gradient.deg + 'deg, ' : '';
        const color1 = gradient.color1;
        const point1 = gradient.point1 ? ' ' + gradient.point1 + '%' : '';
        const color2 = gradient.color2 ? ', ' + gradient.color2 : '';
        const point2 = gradient.point2 ? ' ' + gradient.point2 + '%' : '';
        const color3 = gradient.color3 ? ', ' + gradient.color3 : '';
        const point3 = gradient.point3 ? ' ' + gradient.point3 + '%' : '';
        const color4 = gradient.color4 ? ', ' + gradient.color4 : '';
        const point4 = gradient.point4 ? ' ' + gradient.point4 + '%' : '';

        const isLinearGradient = e.target.value === 'linear-gradient';

        const prop = `${e.target.value}(${isLinearGradient ? deg : ''}${color1}${isLinearGradient ? point1 : ''}${color2}${isLinearGradient ? point2 : ''}${color3}${isLinearGradient ? point3 : ''}${color4}${isLinearGradient ? point4 : ''})`;
        dispatch(setProp({
            name: 'backgroundImage',
            value: prop,
            resolution,
            id: activeComponent.id
        }));
    }


    return (
        <BackgroundImageWrapper>
            <BackgroundImageRow>
                <BackgroundImageRadio
                    type="radio"
                    name="backgroundImageType"
                    id="bgImageType-1"
                    checked={type === "url"}
                    onChange={() => {
                        setType('url')
                    }}
                />
                <BackgroundImageLabel htmlFor="bgImageType-1">url</BackgroundImageLabel>
                <BackgroundImageTextarea
                    value={parsedProp && parsedProp.value && parsedProp.url && parsedProp.value || ''}
                    onChange={(e) => {
                        dispatch(setProp({
                            name: 'backgroundImage',
                            value: `url('${e.target.value}')`,
                            resolution,
                            id: activeComponent.id
                        }))
                    }}
                    disabled={type !== 'url'}
                />
            </BackgroundImageRow>
            <BackgroundImageRow>
                <BackgroundImageRadio
                    type="radio"
                    name="backgroundImageType"
                    id="bgImageType-2"
                    checked={type === "gradient"}
                    onChange={() => {
                        setType('gradient')
                    }}
                />

                <BackgroundImageLabel
                    htmlFor="bgImageType-2"
                >
                    gradient
                </BackgroundImageLabel>


                <GradientInputsWrapper>
                    <GradientSelect
                        value={parsedProp.gradient}
                        onChange={(e) => onGradientSelect(e, gradient)}
                        disabled={!isGradient}
                    >
                        <option value="linear-gradient">linear-gradient</option>
                        <option value="radial-gradient">radial-gradient</option>
                    </GradientSelect>
                    <GradientDegInputWrapper>
                        <GradientDegInput
                            type="number"
                            min={0}
                            max={360}
                            step={5}
                            disabled={!isGradient || isRadialGradient}
                            value={parsedProp.value && parsedProp.value.deg || ''}
                            onChange={(e) => onGradientDegChange(e, gradient)}
                        />
                        <GradientLabel disabled={!isGradient}>deg</GradientLabel>
                    </GradientDegInputWrapper>

                    <GradientRow>
                        <GradientInput
                            type="text"
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[0].value || ''}
                            onChange={(e) => onGradientColorChange(e, gradient, 'color1')}
                            disabled={!isGradient}
                        />
                        <GradientLabel disabled={!isGradient}>color1</GradientLabel>
                        <GradientStopInput
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[0].point || ''}
                            onChange={(e) => onGradientPointChange(e, gradient, 'point1')}
                            disabled={!isGradient || isRadialGradient}
                        />
                        <GradientLabel disabled={!isGradient}>%</GradientLabel>
                    </GradientRow>

                    <GradientRow>
                        <GradientInput
                            type="text"
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[1].value || ''}
                            onChange={(e) => onGradientColorChange(e, gradient, 'color2')}
                            disabled={!isGradient}
                        />
                        <GradientLabel disabled={!isGradient}>color2</GradientLabel>
                        <GradientStopInput
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[1].point || ''}
                            onChange={(e) => onGradientPointChange(e, gradient, 'point2')}
                            disabled={!isGradient || isRadialGradient}
                        />
                        <GradientLabel disabled={!isGradient}>%</GradientLabel>
                    </GradientRow>

                    <GradientRow>
                        <GradientInput
                            type="text"
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[2].value || ''}
                            onChange={(e) => onGradientColorChange(e, gradient, 'color3')}
                            disabled={!isGradient}
                        />
                        <GradientLabel disabled={!isGradient}>color3</GradientLabel>
                        <GradientStopInput
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[2].point || ''}
                            onChange={(e) => onGradientPointChange(e, gradient, 'point3')}
                            disabled={!isGradient || isRadialGradient}
                        />
                        <GradientLabel disabled={!isGradient}>%</GradientLabel>
                    </GradientRow>

                    <GradientRow>
                        <GradientInput
                            type="text"
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[3].value || ''}
                            onChange={(e) => onGradientColorChange(e, gradient, 'color4')}
                            disabled={!isGradient}
                        />
                        <GradientLabel disabled={!isGradient}>color4</GradientLabel>
                        <GradientStopInput
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={parsedProp.gradient && parsedProp.value && parsedProp.value.colors[3].point || ''}
                            onChange={(e) => onGradientPointChange(e, gradient, 'point4')}
                            disabled={!isGradient || isRadialGradient}
                        />
                        <GradientLabel disabled={!isGradient}>%</GradientLabel>
                    </GradientRow>

                </GradientInputsWrapper>
            </BackgroundImageRow>
        </BackgroundImageWrapper>
    );
}
