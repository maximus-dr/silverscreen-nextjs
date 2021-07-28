import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/variables'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select'



export default function PropsDisplay(props) {

    const {styles} = props;

    return (
        <Section>
            <Header>
                Отображение
            </Header>
            <Body>
                <Item>
                    <ItemKey>display:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.display.options} parsedProp={parseProp(styles, 'display')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>overflow:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.overflow.options} parsedProp={parseProp(styles, 'overflow')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>overflow-x:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.overflowX.options} parsedProp={parseProp(styles, 'overflowX')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>overflow-y:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.overflowY.options} parsedProp={parseProp(styles, 'overflowY')} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
