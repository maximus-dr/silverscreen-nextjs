import React from 'react'
import InputNum from '../InputNum/InputNum'
import InputText from '../InputText/InputText'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select'



export default function PropsEffects() {
    return (
        <Section>
            <Header>Эффекты</Header>
            <Body>
                <Item>
                    <ItemKey>opacity:</ItemKey>
                    <ItemValue>
                        <InputNum />
                    </ItemValue>
                </Item>
                <Item style={{alignItems: 'flex-start'}}>
                    <ItemKey>box-shadow:</ItemKey>
                    <ItemValue>
                        <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                        <div style={{margin: '5px 0'}}>
                            <InputNum units={[{id: 1, name: 'px'}]} />
                        </div>
                        <div>
                            <InputNum units={[{id: 1, name: 'px'}]} />
                        </div>
                        <div style={{margin: '5px 0'}}>
                            <InputNum units={[{id: 1, name: 'px'}]} />
                        </div>
                        <div>
                            <InputNum units={[{id: 1, name: 'px'}]} />
                        </div>
                        <div style={{margin: '5px 0'}}>
                            <InputText />
                        </div>
                    </ItemValue>
                </Item>
                <Item style={{alignItems: 'flex-start'}}>
                    <ItemKey>transform:</ItemKey>
                    <ItemValue>
                        <Select options={[{id: 1, name: 'none'}, {id: 2, name: 'custom'}]} />
                        <div style={{margin: '5px 0'}}>
                            <InputText />
                        </div>
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>filter</ItemKey>
                    <ItemValue>
                        <InputText />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>transitions</ItemKey>
                    <ItemValue>
                        <InputText />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
