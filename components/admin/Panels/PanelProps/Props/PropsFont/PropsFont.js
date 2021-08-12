import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/props'
import InputNum from '../InputNum/InputNum'
import InputText from '../InputText/InputText'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select'



const TextShadowOutput = styled.div`
    display: none;
    margin-top: 5px;
    ${props => {
        return props.isActive && css`
            display: block;
        `
    }}
`;

export const TextShadow = (props) => {

    const [custom, setCustom] = useState(false);
    const {styles} = props;

    const parsedProp = parseProp(styles, 'textShadow');

    const offsetX = parsedProp && parsedProp.offsetX && parsedProp.offsetX.replace('px', '') || null;
    const offsetY = parsedProp &&  parsedProp.offsetY && parsedProp.offsetY.replace('px', '') || null;
    const blur = parsedProp &&  parsedProp.blur && parsedProp.blur.replace('px', '') || null;
    const color = parsedProp &&  parsedProp.color && parsedProp.color || null;

    useEffect(() => {
        const prop = parseProp(styles, 'textShadow');
        if (prop && prop.custom) {
            setCustom(true);
        }
        if (prop && !prop.custom) {
            setCustom(false);
        }
    }, [styles]);

    return (
        <Item style={{alignItems: 'flex-start'}}>
            <ItemKey>text-shadow:</ItemKey>
            <ItemValue>
                <select value={custom ? 'custom' : 'none'} onChange={() => setCustom(prev => !prev)}>
                    <option value="none">none</option>
                    <option value="custom">custom</option>
                </select>
                <TextShadowOutput isActive={custom}>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum units={[{id: 1, name: 'px'}]} parsedProp={{value: offsetX}} />
                    </div>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum units={[{id: 1, name: 'px'}]} parsedProp={{value: offsetY}} />
                    </div>
                    <div style={{marginBottom: '5px'}}>
                        <InputNum units={[{id: 1, name: 'px'}]} parsedProp={{value: blur}} />
                    </div>
                    <InputText parsedProp={{value: color}} />
                </TextShadowOutput>
            </ItemValue>
        </Item>
    );
}




export default function PropsFont(props) {
    const {styles} = props;
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);

    return (
        <Section>
            <Header>Шрифт</Header>
            <Body>
                <Item>
                    <ItemKey>color:</ItemKey>
                    <ItemValue>
                        <InputText parsedProp={parseProp(styles, 'color')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>font-size:</ItemKey>
                    <ItemValue>
                        <InputNum min={0} step={1} units={propsList.fontSize.units} parsedProp={parseProp(styles, 'fontSize')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>font-weight:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.fontWeight.options} parsedProp={parseProp(styles, 'fontWeight')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>font-style:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.fontStyle.options} parsedProp={parseProp(styles, 'fontStyle')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>line-height:</ItemKey>
                    <ItemValue>
                        <InputNum min={0} step={1} units={propsList.lineHeight.units} parsedProp={parseProp(styles, 'lineHeight')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>text-align:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.textAlign.options} parsedProp={parseProp(styles, 'textAlign')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>text-indent:</ItemKey>
                    <ItemValue>
                        <InputNum
                            step={1}
                            min={0}
                            units={propsList.textIndent.units}
                            parsedProp={parseProp(styles, 'textIndent')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>text-transform:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.textTransform.options} parsedProp={parseProp(styles, 'textTransform')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>text-decoration:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.textDecoration.options} parsedProp={parseProp(styles, 'textDecoration')} />
                    </ItemValue>
                </Item>


                {/* <TextShadow styles={styles} /> */}

                <Item>
                    <ItemKey>user-select:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.userSelect.options} parsedProp={parseProp(styles, 'userSelect')} />
                    </ItemValue>
                </Item>
                {/* <Item style={{alignItems: 'flex-start'}}>
                    <ItemKey>font-family:</ItemKey>
                    <ItemValue>
                        <div style={{marginBottom: '5px'}}>
                            <FontFamilyPrimary
                                type="text"
                                value={parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').primary || ''}
                                onChange={(e) => {

                                }}
                            />
                        </div>
                        <div style={{marginBottom: '5px'}}>
                            <FontFamilySecondary
                                type="text"
                                value={parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').secondary || ''}
                                onChange={(e) => {
                                    dispatch(setProp({
                                        name: 'fontFamily',
                                        value: `${parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').primary + ', ' || ''}${e.target.value + ','}${parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').serif || ''}`,
                                        resolution
                                    }))
                                }}
                            />
                        </div>
                        <select
                            style={{width: '110px'}}
                            value={parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').serif || "default"}
                            onChange={(e) => {
                                dispatch(setProp({
                                    name: 'fontFamily',
                                    value: `${parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').primary + ', ' || ''}${parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').secondary + ',' || ''}, ${e.target.value}`,
                                    resolution
                                }))
                            }}
                        >
                            <option value="default">default</option>
                            <option value="serif">serif</option>
                            <option value="sans-serif">sans-serif</option>
                            <option value="monospace">monospace</option>
                            <option value="cursive">cursive</option>
                            <option value="fantasy">fantasy</option>
                        </select>
                    </ItemValue>
                </Item> */}
            </Body>
        </Section>
    )
}
