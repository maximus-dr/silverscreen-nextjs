import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { setProp } from "../../../../../../../store/actions/document";
import { Item, ItemKey, ItemValue } from "../../PropsStyled";
import { BackgroundSizeInput, BackgroundSizeOutput, BackgroundSizeSelect, BackgroundSizeUnit, BackgroundSizeWrapper, OutputGroup } from "./BackgroundSizeStyled";




export const BackgroundSize = (props) => {

    const {styles, activeComponent} = props;
    const parsedProp = parseProp(styles, 'backgroundSize');
    console.log('parsedProp', parsedProp);
    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);

    const isAutoX = parsedProp.sizeX && parsedProp.sizeX.unit && parsedProp.sizeX.unit === 'auto';
    const isAutoY = parsedProp.sizeY && parsedProp.sizeY.unit && parsedProp.sizeY.unit === 'auto';


    return (
        <BackgroundSizeWrapper>
            <ItemKey>background-size:</ItemKey>
            <ItemValue>
                <BackgroundSizeSelect
                    value={parsedProp.value}
                    onChange={(e) => {
                        if (e.target.value === 'default') {
                            dispatch(setProp({
                                name: 'backgroundSize',
                                value: '',
                                id: activeComponent.id
                            }));
                            return;
                        };

                        dispatch(setProp({
                            name: 'backgroundSize',
                            value: e.target.value,
                            id: activeComponent.id
                        }));
                    }}
                >
                    <option value="default">default</option>
                    <option value="cover">cover</option>
                    <option value="unit">unit</option>
                    <option value="contain">contain</option>
                    <option value="auto auto">auto</option>
                </BackgroundSizeSelect>

                <BackgroundSizeOutput isActive={true}>
                    <OutputGroup>
                        <BackgroundSizeInput
                            type="number"
                            value={parsedProp.sizeX && parsedProp.sizeX.value || ''}
                            onChange={(e) => {
                                if (parsedProp.sizeX.unit !== 'auto') {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${e.target.value}${parsedProp.sizeX.unit} ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }));
                                }
                            }}
                            disabled={isAutoX}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeX && parsedProp.sizeX.unit || 'auto'}
                            onChange={(e) => {
                                if (e.target.value === 'auto') {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `auto ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === 'px' && parsedProp.sizeX.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}px ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === '%' && parsedProp.sizeX.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}% ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === 'px' && !parsedProp.sizeX.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `100px ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }))
                                }

                                if (e.target.value === '%' && !parsedProp.sizeX.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `100% ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }))
                                }
                            }}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="auto">auto</option>
                        </BackgroundSizeUnit>
                    </OutputGroup>
                    <OutputGroup>
                        <BackgroundSizeInput
                            type="number"
                            value={parsedProp.sizeY && parsedProp.sizeY.value || ''}
                            onChange={(e) => {
                                if (parsedProp.sizeY.unit !== 'auto') {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} ${e.target.value}${parsedProp.sizeY.unit}`,
                                        id: activeComponent.id
                                    }));
                                }
                            }}
                            disabled={isAutoY}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeY && parsedProp.sizeY.unit || 'auto'}
                            onChange={(e) => {
                                if (e.target.value === 'auto') {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} auto`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === '%' && parsedProp.sizeY.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} ${parsedProp.sizeY.value}%`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === 'px' && parsedProp.sizeY.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} ${parsedProp.sizeY.value}px`,
                                        id: activeComponent.id
                                    }));
                                }

                                if (e.target.value === 'px' && !parsedProp.sizeY.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} 100px`,
                                        id: activeComponent.id
                                    }))
                                }

                                if (e.target.value === '%' && !parsedProp.sizeY.value) {
                                    dispatch(setProp({
                                        name: 'backgroundSize',
                                        value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} 100% `,
                                        id: activeComponent.id
                                    }))
                                }
                            }}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="auto">auto</option>
                        </BackgroundSizeUnit>
                    </OutputGroup>
                </BackgroundSizeOutput>
            </ItemValue>
        </BackgroundSizeWrapper>
    );
}
