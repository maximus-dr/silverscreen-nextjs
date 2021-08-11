import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props'
import { propsList } from '../../../../../../core/variables/variables'
import InputNum from '../InputNum/InputNum'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select'



export default function PropsPosition(props) {

    const {styles} = props;

    return (
        <Section>
            <Header>
                Позиционирование
            </Header>
            <Body style={{marginBottom: '21px'}}>
                <Item>
                    <ItemKey>position: </ItemKey>
                    <ItemValue>
                        <Select parsedProp={parseProp(styles, 'position')} options={propsList.position.options} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>z-index: </ItemKey>
                    <ItemValue>
                        <InputNum parsedProp={parseProp(styles, 'zIndex')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>top: </ItemKey>
                    <ItemValue>
                        <InputNum units={propsList.top.units} parsedProp={parseProp(styles, 'top')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>right: </ItemKey>
                    <ItemValue>
                        <InputNum units={propsList.right.units} parsedProp={parseProp(styles, 'right')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>bottom: </ItemKey>
                    <ItemValue>
                        <InputNum units={propsList.bottom.units} parsedProp={parseProp(styles, 'bottom')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>left: </ItemKey>
                    <ItemValue>
                        <InputNum units={propsList.left.units} parsedProp={parseProp(styles, 'left')} />
                    </ItemValue>
                </Item>
            </Body>

            <Body>
                <Item>
                    <ItemKey>display:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.display.options} parsedProp={parseProp(styles, 'display')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>flex-direction:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.flexDirection.options} parsedProp={parseProp(styles, 'flexDirection')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>justify-content:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.justifyContent.options} parsedProp={parseProp(styles, 'justifyContent')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>flex-wrap:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.flexWrap.options} parsedProp={parseProp(styles, 'flexWrap')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>flex-shrink:</ItemKey>
                    <ItemValue>
                        <InputNum step={1} parsedProp={parseProp(styles, 'flexShrink')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>flex-grow:</ItemKey>
                    <ItemValue>
                        <InputNum step={1} parsedProp={parseProp(styles, 'flexGrow')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>flex-basis:</ItemKey>
                    <ItemValue>
                        <InputNum min={0} step={5} units={propsList.flexBasis.units} parsedProp={parseProp(styles, 'flexBasis')} />
                    </ItemValue>
                </Item>

                <Item>
                    <ItemKey>align-items:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.alignItems.options} parsedProp={parseProp(styles, 'alignItems')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>align-self:</ItemKey>
                    <ItemValue>
                        <Select options={propsList.alignSelf.options} parsedProp={parseProp(styles, 'alignSelf')} />
                    </ItemValue>
                </Item>
                <Item>
                    <ItemKey>order:</ItemKey>
                    <ItemValue>
                        <InputNum step={1} parsedProp={parseProp(styles, 'order')} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>
    )
}
