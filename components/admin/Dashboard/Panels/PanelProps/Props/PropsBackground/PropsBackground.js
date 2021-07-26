import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled, {css} from 'styled-components';
import { parseProp } from '../../../../../../../core/functions/admin/props';
import { propsList } from '../../../../../../../core/variables/variables';
import InputNum from '../InputNum/InputNum';
import InputText from '../InputText/InputText'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { setProp } from '../../../../../../../store/actions/document';
import { BackgroundSize } from './BackgroundSize/BackgroundSize';



const BackgroundPositionOutput = styled.div`
    margin-bottom: 5px;
    display: none;

    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;


export const BackgroundPosition = (props) => {
    
    const [selectX, setSelectX] = useState('unit');
    const [selectY, setSelectY] = useState('unit');

    const {styles} = props;
    const parsedProp = styles && parseProp(styles, 'backgroundPosition') || {};

    return (
        <Item style={{alignItems: 'flex-start', marginTop: '10px', marginBottom: '10px'}}>
            <ItemKey>background-position:</ItemKey>
            <ItemValue>
                <BackgroundPositionOutput isActive={true}>
                    <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} parsedProp={parsedProp && parsedProp.posX} />
                </BackgroundPositionOutput>
                <BackgroundPositionOutput isActive={true}>
                    <InputNum units={[{id: 1, name: 'px'}, {id: 2, name: '%'}]} parsedProp={parsedProp && parsedProp.posY} />
                </BackgroundPositionOutput>
            </ItemValue>
        </Item>
    );
}


export const BackgroundImageWrapper = styled.div`
    width: 100%;
`;

export const BackgroundImageRow = styled.div`

`;

export const BackgroundImageTextarea = styled.textarea`
    width: 230px;
    resize: none;
    margin-bottom: 10px;
    min-height: 75px;
`;

export const BackgroundImageRadio = styled.input`
    cursor: pointer;
`;

export const BackgroundImageLabel = styled.label`
    cursor: pointer;
    padding: 0 25px 0 5px;
    margin-bottom: 5px;
    display: inline-block;
`;


export const BackgroundImage = (props) => {
    const {parsedProp, activeComponent} = props;
    const resolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const [type, setType] = useState('url');


    useEffect(() => {
        if (parsedProp && parsedProp.url) {
            setType('url');
        }

        if (parsedProp && parsedProp.gradient) {
            setType('gradient');
        }
    }, [parsedProp])

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
                <BackgroundImageLabel htmlFor="bgImageType-2">gradient</BackgroundImageLabel>
                <div style={{display: 'flex'}}>
                    <input 
                        type="text" 
                        style={{width: '110px', marginRight: '10px'}} 
                        value={parsedProp && parsedProp.gradient && parsedProp.value && parsedProp.value[0] || ''}
                        onChange={(e) => {
                            dispatch(setProp({
                                name: 'backgroundImage',
                                value: `linear-gradient(${e.target.value}, ${parsedProp.value && parsedProp.value[1] || ''})`,
                                resolution,
                                id: activeComponent.id
                            }));
                        }}
                        disabled={type !== 'gradient'}
                    />
                    <input 
                        type="text" 
                        style={{width: '110px'}} 
                        value={parsedProp && parsedProp.gradient && parsedProp.value && parsedProp.value[1] || ''}
                        onChange={(e) => {
                            dispatch(setProp({
                                name: 'backgroundImage',
                                value: `linear-gradient(${parsedProp.value && parsedProp.value[0] || ''}, ${e.target.value})`,
                                resolution,
                                id: activeComponent.id
                            }));
                        }}
                        disabled={type !== 'gradient'}
                    />
                </div>
            </BackgroundImageRow>  
        </BackgroundImageWrapper>
    );
}



export default function PropsBackground(props) {

    const {styles, activeComponent} = props;
    
    
    return (
        <Section>
            <Header>Фон</Header>
            <Body>
                <Item style={{marginBottom: '10px'}}>
                    <ItemKey>background-color:</ItemKey>
                    <ItemValue>
                        <InputText parsedProp={parseProp(styles, 'backgroundColor')} />
                    </ItemValue>
                </Item>

                <div style={{marginBottom: '10px'}}>
                    <div style={{marginBottom: '5px'}}>background-image:</div>
                    <BackgroundImage parsedProp={parseProp(styles, 'backgroundImage')} activeComponent={activeComponent} />
                </div>

                <BackgroundSize styles={styles} activeComponent={activeComponent} />

                
                <BackgroundPosition styles={styles} />

                <Item>
                    <ItemKey>background-repeat:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.backgroundRepeat.options} parsedProp={parseProp(styles, 'backgroundRepeat')} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
