import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/props'
import InputNum from '../InputNum/InputNum'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'



export default function PropsPadding(props) {

    const {styles} = props;

    return (
        <Section>
            <Header>
                Внутренние отступы
            </Header>
            <Body>
                <Item>
                    <ItemKey>padding-top:</ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.paddingTop.units}
                            parsedProp={parseProp(styles, 'paddingTop')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>padding-right:</ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.paddingRight.units}
                            parsedProp={parseProp(styles, 'paddingRight')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>padding-bottom:</ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.paddingBottom.units}
                            parsedProp={parseProp(styles, 'paddingBottom')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>padding-left:</ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.paddingLeft.units}
                            parsedProp={parseProp(styles, 'paddingLeft')}
                        />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
