import React from 'react'
import { parseProp } from '../../../../../../core/functions/admin/props';
import { propsList } from '../../../../../../core/variables/props';
import InputText from '../InputText/InputText'
import { Body, Header, Item, ItemKey, ItemValue, Section } from '../PropsStyled'
import Select from '../Select/Select';
import { BackgroundSize } from './BackgroundSize/BackgroundSize';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import { BackgroundPosition } from './BackgroundPosition/BackgroundPosition';




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
