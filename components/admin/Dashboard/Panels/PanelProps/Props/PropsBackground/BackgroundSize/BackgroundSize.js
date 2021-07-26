import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { parseProp } from "../../../../../../../../core/functions/admin/props";
import { Item, ItemKey, ItemValue } from "../../PropsStyled";
import { BackgroundSizeOutput } from "./BackgroundSizeStyled";




export const BackgroundSize = (props) => {
    
    const {styles, activeComponent} = props;
    const parsedProp = parseProp(styles, 'backgroundSize');
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);

    const sizeX = {
        value: parsedProp && parsedProp.sizeX && parsedProp.sizeX.value || '',
        unit: parsedProp && parsedProp.sizeX && parsedProp.sizeX.unit || ''
    }

    const sizeY = {
        value: parsedProp && parsedProp.sizeY && parsedProp.sizeY.value || '',
        unit: parsedProp && parsedProp.sizeY && parsedProp.sizeY.unit || ''
    }

    const [select, setSelect] = useState('default');
    const [custom, setCustom] = useState(false);
    const [x, setX] = useState(sizeX);
    const [y, setY] = useState(sizeY);


    useEffect(() => {
        const prop = parseProp(styles, 'backgroundSize')
        if (prop && prop.value) {
            setSelect(prop.value);
        }

        if (!prop || !prop.value) setSelect('default');

        if (prop.value && prop.value === 'unit unit') {
            setCustom(true);
        }

        if (prop.value && prop.value !== 'unit unit') {
            setCustom(false);
        }
    }, [styles]);

    return (
        <Item style={{alignItems: 'flex-start'}}>
            <ItemKey>background-size:</ItemKey>
            <ItemValue>
                <select 
                    style={{width: '110px'}} 
                    value={custom ? 'unit unit' : parsedProp.value} 
                    onChange={(e) => {
                        if (e.target.value !== 'unit unit' && e.target.value !== 'default') {
                            dispatch(setProp({
                                id: activeComponent.id,
                                name: 'backgroundSize',
                                value: e.target.value,
                                resolution
                            }));
                        }

                        if (e.target.value === 'default') {
                            dispatch(setProp({
                                id: activeComponent.id,
                                name: 'backgroundSize',
                                value: '',
                                resolution
                            }));
                        }

                        if (e.target.value === 'unit unit') {
                            setCustom(true);
                        }
                    }}
                >
                    <option value="default">default</option>
                    <option value="auto auto">auto auto</option>
                    <option value="cover">cover</option>
                    <option value="contain">contain</option>
                    <option value="unit unit">unit unit</option>
                </select>
                
                <BackgroundSizeOutput isActive={custom}>
                    <div style={{marginTop: '5px', marginBottom: '5px'}}>
                        <input 
                            type="number" 
                            style={{width: '55px', marginRight: '5px'}} 
                            value={x.value}
                            onChange={(e) => {
                                dispatch(setProp({
                                    id: activeComponent.id,
                                    name: 'backgroundSize',
                                    value: `${e.target.value}${sizeX.unit} ${sizeY.value}${sizeY.unit}`
                                }))
                            }}
                        />
                        <select 
                            style={{width: '50px'}}
                            value={parsedProp.sizeX && parsedProp.sizeX.unit || 'px'}
                            onChange={(e) => {
                                sizeX.unit = e.target.value;
                            }}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                    <div style={{marginTop: '5px', marginBottom: '5px'}}>
                        <input 
                            type="number" 
                            style={{width: '55px', marginRight: '5px'}} 
                            value={parsedProp.sizeY && parsedProp.sizeY.value || ''}
                            onChange={() => {}}
                        />
                        <select 
                            style={{width: '50px'}}
                            value={parsedProp.sizeY && parsedProp.sizeY.unit || 'px'}
                            onChange={() => {}}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                </BackgroundSizeOutput>
            </ItemValue>
        </Item>
    );
}
