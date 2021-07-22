import { useEffect } from "react";
import { useState } from "react";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { propsList } from "../../../../../../../core/variables/variables";
import InputNum from "../InputNum/InputNum";
import InputText from "../InputText/InputText";
import { Body, Header, Item, ItemKey, ItemValue, Section } from "../PropsStyled";
import { BorderColorInput, BorderProps, BorderPropsSpan, BorderWidthInput, BorderWidthUnit, PropsBorderInputs } from "./PropsBorderStyled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProp } from "../../../../../../../store/actions/document";



export default function PropsBorder(props) {

    const {styles} = props;
    const [prop, setPropName] = useState('border');
    const [custom, setCustom] = useState(false);
    const [borderWidth, setBorderWidth] = useState('');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderColor, setBorderColor] = useState('');
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);

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
                <Item style={{alignItems: 'flex-start', marginBottom: '15px'}}>
                    <ItemKey>
                        <select style={{width: '110px', marginBottom: '5px'}} value={prop} onChange={(e) => setPropName(e.currentTarget.value)}>
                            <option value="border">border</option>
                            <option value="borderTop">borderTop</option>
                            <option value="borderRight">borderRight</option>
                            <option value="borderBottom">borderBottom</option>
                            <option value="borderLeft">borderLeft</option>
                            <option value="outline">outline</option>
                        </select>
                        <BorderProps>
                            <BorderPropsSpan>width:</BorderPropsSpan>
                            <BorderPropsSpan>style:</BorderPropsSpan>
                            <BorderPropsSpan>color:</BorderPropsSpan>
                        </BorderProps>
                    </ItemKey>
                    <ItemValue>
                        <select 
                            style={{width: '110px', marginBottom: '5px'}} 
                            value={custom ? 'custom' : 'none'} 
                            onChange={(e) => {
                                setCustom(prev => !prev);
                                if (e.currentTarget.value === 'none') {
                                    dispatch(setProp({
                                        name: prop,
                                        value: '',
                                        resolution
                                    }))
                                }
                            }}
                        >
                            <option value="none">none</option>
                            <option value="custom">custom</option>
                        </select>

                        <PropsBorderInputs isActive={custom}>
                            <BorderWidthInput
                                type="number" 
                                min={0} 
                                units={[{id: 1, name: 'px'}]} 
                                parsedProp={{value: borderWidth}}
                                disabled={!custom}
                                value={borderWidth}
                                onChange={(e) => dispatch(setProp({
                                    name: prop,
                                    value: `${e.target.value}px ${borderStyle} ${borderColor}`,
                                    resolution
                                }))}
                            />
                            <BorderWidthUnit isDisabled={!custom}>
                                px
                            </BorderWidthUnit>
                            <div style={{marginTop: '5px', marginBottom: '5px'}}>
                                <select
                                    style={{height: '21px'}}
                                    value={borderStyle}
                                    disabled={!custom}
                                    onChange={(e) => {
                                        dispatch(setProp({
                                            name: prop,
                                            value: `${borderWidth}px ${e.currentTarget.value} ${borderColor}`,
                                            resolution
                                        }))
                                    }}
                                >
                                    <option value="solid">solid</option>
                                    <option value="dashed">dashed</option>
                                    <option value="dotted">dotted</option>
                                </select>
                            </div>
                            <div>
                                <BorderColorInput  
                                    disabled={!custom}
                                    value={borderColor}
                                    onChange={(e) => {
                                        dispatch(setProp({
                                            name: prop,
                                            value: `${borderWidth}px ${borderStyle} ${e.target.value}`
                                        }))
                                    }}
                                />
                            </div>
                        </PropsBorderInputs>
                    </ItemValue>
                </Item>

                <Item>
                    <ItemKey>border-radius:</ItemKey>
                    <ItemValue>
                        <InputNum min={0} units={propsList.borderRadius.units} parsedProp={parseProp(styles, 'borderRadius')} />
                    </ItemValue>
                </Item>
            </Body>
        </Section>        
    );
}
