import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { parseProp } from '../../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../../core/variables/variables'
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

    return (
        <Section>
            <Header>Типографика</Header>
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
                        <InputNum units={propsList.fontSize.units} parsedProp={parseProp(styles, 'fontSize')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>font-weight:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.fontWeight.options} parsedProp={parseProp(styles, 'fontWeight')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>line-height:</ItemKey>
                    <ItemValue>
                        <InputNum units={propsList.lineHeight.units} parsedProp={parseProp(styles, 'lineHeight')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>text-align:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.textAlign.options} parsedProp={parseProp(styles, 'textAlign')} />
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
                

                <TextShadow styles={styles} />

                <Item>
                    <ItemKey>user-select:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.userSelect.options} parsedProp={parseProp(styles, 'userSelect')} />
                    </ItemValue>
                </Item>
                <Item style={{alignItems: 'flex-start'}}>
                    <ItemKey>font-family:</ItemKey>
                    <ItemValue>
                        <div style={{marginBottom: '5px'}}>
                            <InputText parsedProp={{value: parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').primary}} />
                        </div>
                        <div style={{marginBottom: '5px'}}>
                            <InputText parsedProp={{value: parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').secondary}} />
                        </div>
                        <Select options={propsList.fontFamily.serif.options} parsedProp={{value: parseProp(styles, 'fontFamily') && parseProp(styles, 'fontFamily').serif}} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
