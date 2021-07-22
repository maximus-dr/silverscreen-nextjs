import { useEffect } from "react";
import { useState } from "react";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { propsList } from "../../../../../../../core/variables/variables";
import InputNum from "../InputNum/InputNum";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";
import { Body, Header, Item, ItemKey, ItemValue, Section } from "../PropsStyled";
import { PropsBorderInputs } from "./PropsBorderStyled";



export default function PropsBorder(props) {

    const {styles} = props;
    const [prop, setProp] = useState('border');
    const [custom, setCustom] = useState(false);
    const [borderWidth, setBorderWidth] = useState('');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderColor, setBorderColor] = useState('');

    useEffect(() => {
        const propsList = {
            border: parseProp(styles, 'border'),
            borderTop: parseProp(styles, 'borderTop'),
            borderRight: parseProp(styles, 'borderRight'),
            borderBottom: parseProp(styles, 'borderBottom'),
            borderLeft: parseProp(styles, 'borderLeft'),
            outline: parseProp(styles, 'outline')
        }

        if (propsList[prop] && propsList[prop].custom) {
            setCustom(true);
            setBorderWidth(propsList[prop].borderWidth.replace('px', ''));
            setBorderStyle(propsList[prop].borderStyle);
            setBorderColor(propsList[prop].borderColor);
        }
        if (propsList[prop] && !propsList[prop].custom) {
            setCustom(false);
            setBorderWidth('');
            setBorderStyle('solid');
            setBorderColor('');
        }
    }, [prop, styles]);

    return (
        <Section>
            <Header>Границы</Header>
            <Body>
                <Item>
                    <ItemKey>border-radius:</ItemKey>
                    <ItemValue>
                        <InputNum min={0} units={propsList.borderRadius.units} parsedProp={parseProp(styles, 'borderRadius')} />
                    </ItemValue>
                </Item>

                <Item style={{alignItems: 'flex-start'}}>
                    <ItemKey>
                        <select style={{width: '110px'}} value={prop} onChange={(e) => setProp(e.currentTarget.value)}>
                            <option value="border">border</option>
                            <option value="borderTop">borderTop</option>
                            <option value="borderRight">borderRight</option>
                            <option value="borderBottom">borderBottom</option>
                            <option value="borderLeft">borderLeft</option>
                            <option value="outline">outline</option>
                        </select>
                    </ItemKey>
                    <ItemValue>
                        <select style={{width: '110px', marginBottom: '5px'}} value={custom ? 'custom' : 'none'} onChange={() => setCustom(prev => !prev)}>
                            <option value="none">none</option>
                            <option value="custom">custom</option>
                        </select>

                        <PropsBorderInputs isActive={custom}>
                            <InputNum 
                                min={0} 
                                units={[{id: 1, name: 'px'}]} 
                                parsedProp={{value: borderWidth}}
                                isDisabled={!custom}
                            />
                            <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                <Select 
                                    options={[{id: 1, name: 'solid'}, {id: 2, name: 'dashed'}, {id: 3, name: 'dotted'}]} 
                                    parsedProp={{value: borderStyle}} 
                                    isDisabled={!custom}
                                />
                            </div>
                            <div>
                                <InputText 
                                    parsedProp={{value: borderColor}} 
                                    isDisabled={!custom}
                                />
                            </div>
                        </PropsBorderInputs>
                    </ItemValue>
                </Item>
            </Body>
        </Section>        
    );
}
