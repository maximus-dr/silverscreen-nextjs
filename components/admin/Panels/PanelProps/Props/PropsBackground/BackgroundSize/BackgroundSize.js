import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { clearBuffer, setProp } from "../../../../../../../store/actions/document";
import { ItemValue } from "../../PropsStyled";
import { BackgroundSizeInput, BackgroundSizeOutput, BackgroundSizeSelect, BackgroundSizeUnit, BackgroundSizeWrapper, ColumnLeft, ItemKey, ItemLabel, OutputGroup } from "./BackgroundSizeStyled";



export const BackgroundSize = (props) => {

    const {styles, activeComponent} = props;
    const parsedProp = parseProp(styles, 'backgroundSize');

    const dispatch = useDispatch();
    const resolution = useSelector(state => state.document.resolution);
    const buffer = useSelector(state => state.document.buffer);

    const isAuto = parsedProp.value && parsedProp.value === 'auto';
    const isAutoX = parsedProp.sizeX && parsedProp.sizeX.unit && parsedProp.sizeX.unit === 'auto';
    const isAutoY = parsedProp.sizeY && parsedProp.sizeY.unit && parsedProp.sizeY.unit === 'auto';
    const isUnit = parsedProp.value && parsedProp.value === 'unit';

    const onSelectChange = (e) => {
        if (e.target.value === 'default') {
            dispatch(setProp({
                name: 'backgroundSize',
                value: '',
                id: activeComponent.id
            }));
            return;
        };

        if (e.target.value === 'unit') {
            dispatch(setProp({
                name: 'backgroundSize',
                value: '100px 50px',
                id: activeComponent.id
            }));
            return;
        }

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
        if (parsedProp.sizeX && parsedProp.sizeX.unit !== 'auto'  && parsedProp.sizeY && parsedProp.sizeY.value && parsedProp.sizeY.unit) {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `${e.target.value}${parsedProp.sizeX.unit} ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                id: activeComponent.id
            }));
        }
        if (!parsedProp.sizeX && !parsedProp.sizeY) {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `${e.target.value}px 0px`,
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
        if (e.target.value === 'auto' && parsedProp.sizeY && parsedProp.sizeY.value && parseProp.sizeY.unit) {
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
                value: `px ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
                id: activeComponent.id
            }))
        }

        if (e.target.value === '%' && !parsedProp.sizeX.value) {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `% ${parsedProp.sizeY.value}${parsedProp.sizeY.unit}`,
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
                value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} px`,
                id: activeComponent.id
            }))
        }

        if (e.target.value === '%' && !parsedProp.sizeY.value) {
            dispatch(setProp({
                name: 'backgroundSize',
                value: `${parsedProp.sizeX.value}${parsedProp.sizeX.unit} % `,
                id: activeComponent.id
            }))
        }
    }


    return (
        <BackgroundSizeWrapper>
            <ColumnLeft>
                <ItemKey>background-size:</ItemKey>
                <ItemLabel>x</ItemLabel>
                <ItemLabel>y</ItemLabel>
            </ColumnLeft>
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

                <BackgroundSizeOutput>
                    <OutputGroup>
                        <BackgroundSizeInput
                            type="number"
                            min={0}
                            step={5}
                            value={parsedProp.sizeX && parsedProp.sizeX.value || ''}
                            onFocus={onInputFocus}
                            onChange={onInputXChange}
                            disabled={isAutoX || !isUnit}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeX && parsedProp.sizeX.unit || 'px'}
                            onChange={onUnitXChange}
                            disabled={!isUnit}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="auto">auto</option>
                        </BackgroundSizeUnit>
                    </OutputGroup>
                    <OutputGroup>
                        <BackgroundSizeInput
                            type="number"
                            min={0}
                            step={5}
                            value={parsedProp.sizeY && parsedProp.sizeY.value || ''}
                            onFocus={onInputFocus}
                            onChange={onInputYChange}
                            disabled={isAutoY || !isUnit}
                        />
                        <BackgroundSizeUnit
                            value={parsedProp.sizeY && parsedProp.sizeY.unit || 'px'}
                            onChange={onUnitYChange}
                            disabled={!isUnit}
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
