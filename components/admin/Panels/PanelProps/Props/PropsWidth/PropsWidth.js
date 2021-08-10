import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/variables'
import InputNum from '../InputNum/InputNum'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'



export default function PropsWidth(props) {

    const {styles} = props;

    return (
        <Section>
            <Header>
                Размеры
            </Header>
            <Body>
                <Item>
                    <ItemKey>
                        width:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.width.units}
                            parsedProp={parseProp(styles, 'width')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>
                        height:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.height.units}
                            parsedProp={parseProp(styles, 'height')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>
                        min-width:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.minWidth.units}
                            parsedProp={parseProp(styles, 'minWidth')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>
                        max-width:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.maxWidth.units}
                            parsedProp={parseProp(styles, 'maxWidth')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>
                        min-height:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.minHeight.units}
                            parsedProp={parseProp(styles, 'minHeight')}
                        />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>
                        max-height:
                    </ItemKey>
                    <ItemValue>
                        <InputNum
                            step={5}
                            min={0}
                            units={propsList.maxHeight.units}
                            parsedProp={parseProp(styles, 'maxHeight')}
                        />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
