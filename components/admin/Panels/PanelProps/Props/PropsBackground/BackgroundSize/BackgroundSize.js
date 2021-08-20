import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { clearBuffer, setProp } from "../../../../../../../store/actions/document";
import { ItemKey, ItemValue } from "../../PropsStyled";
import { BackgroundSizeInput, BackgroundSizeOutput, BackgroundSizeSelect, BackgroundSizeUnit, BackgroundSizeWrapper, OutputGroup } from "./BackgroundSizeStyled";



export const BackgroundSize = (props) => {

    const {styles, activeComponent} = props;
    const parsedProp = parseProp(styles, 'backgroundSize');

    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);
    const buffer = useSelector(state => state.document.buffer);

    const isAuto = parsedProp.value && parsedProp.value === 'auto';
    const isAutoX = parsedProp.sizeX && parsedProp.sizeX.unit && parsedProp.sizeX.unit === 'auto';
    const isAutoY = parsedProp.sizeY && parsedProp.sizeY.unit && parsedProp.sizeY.unit === 'auto';

    const onSelectChange = (e) => {
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
    }

    const onInputFocus = () => {
        if (buffer) dispatch(clearBuffer());
    }

    const onInputXChange = (e) => {
        if (parsedProp.sizeX && parsedProp.sizeX.unit !== 'auto') {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `${e.target.value}${parsedProp.sizeX.unit} ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                id: activeComponent.id
            }));
        }
    }

    const onInputYChange = (e) => {
        if (parsedProp.sizeY && parsedProp.sizeY.unit !== 'auto') {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} ${e.target.value}${parsedProp.sizeY.unit}`,
                id: activeComponent.id
            }));
        }
    }

    const onUnitXChange = (e) => {
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
    }

    const onUnitYChange = (e) => {
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
    }


    return (
        <BackgroundSizeWrapper>
            <ItemKey>background-size:</ItemKey>
            <ItemValue>
                <BackgroundSizeSelect
                    value={parsedProp.value}
                    onChange={onSelectChange}
                >
                    <option value="default">default</option>
                    <option value="cover">cover</option>
                    <option value="unit">unit</option>
                    <option value="contain">contain</option>
                    <option value="auto">auto</option>
                </BackgroundSizeSelect>

                <BackgroundSizeOutput disabled={isAuto}>
                    <OutputGroup>
                        <BackgroundSizeInput
                            type="number"
                            value={parsedProp.sizeX && parsedProp.sizeX.value || ''}
                            onFocus={onInputFocus}
                            onChange={onInputXChange}
                            disabled={isAutoX}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeX && parsedProp.sizeX.unit || 'px'}
                            onChange={onUnitXChange}
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
                            onFocus={onInputFocus}
                            onChange={onInputYChange}
                            disabled={isAutoY}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeY && parsedProp.sizeY.unit || 'px'}
                            onChange={onUnitYChange}
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
