import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/variables'
import InputNum from '../InputNum/InputNum'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'



export default function PropsMargin(props) {

    const {styles} = props;

    return (
        <Section>
            <Header>
                Внешние отступы
            </Header>
            <Body>
                <Item>
                    <ItemKey>margin-top:</ItemKey>
                    <ItemValue>
                        <InputNum  units={propsList.marginTop.units} parsedProp={parseProp(styles, 'marginTop')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>margin-right:</ItemKey>
                    <ItemValue>
                        <InputNum  units={propsList.marginRight.units} parsedProp={parseProp(styles, 'marginRight')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>margin-bottom:</ItemKey>
                    <ItemValue>
                        <InputNum  units={propsList.marginBottom.units} parsedProp={parseProp(styles, 'marginBottom')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>margin-left:</ItemKey>
                    <ItemValue>
                        <InputNum  units={propsList.marginLeft.units} parsedProp={parseProp(styles, 'marginLeft')} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
