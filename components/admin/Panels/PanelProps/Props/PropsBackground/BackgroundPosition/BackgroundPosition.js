import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { parseProp } from "../../../../../../../core/functions/admin/props";
import { setProp } from "../../../../../../../store/actions/document";
import { Item, ItemKey, ItemValue } from "../../PropsStyled";
import { BackgroundPositionOutput, BackgroundPositionSelect, PositionInput, PositionUnit } from "./BackgroundPositionStyled";



export const BackgroundPosition = (props) => {

    const {styles} = props;
    const parsedPropX = styles && parseProp(styles, 'backgroundPositionX') || {};
    const parsedPropY = styles && parseProp(styles, 'backgroundPositionY') || {};
    const activeComponent = useSelector(state => state.document.activeComponent);
    const dispatch = useDispatch();
    console.log('parsedPropX', parsedPropX);
    console.log('parsedPropY', parsedPropY);

    const onSelectChange = (e) => {
        if (e.target.value === 'default') {
            dispatch(setProp({
                name: 'backgroundPosition',
                value: '',
                id: activeComponent.id
            }));
        }
        if (e.target.value === 'custom') {
            dispatch(setProp({
                name: 'backgroundPosition',
                value: 'px px',
                id: activeComponent.id
            }));
        }
    }

    const onInputXChange = (e) => {
        dispatch(setProp({
            name: 'backgroundPositionX',
            value: `${e.target.value}${parsedPropX.unit}`,
            id: activeComponent.id
        }));
    }

    const onInputYChange = (e) => {
        dispatch(setProp({
            name: 'backgroundPositionY',
            value: `${e.target.value}${parsedPropY.unit}`,
            id: activeComponent.id
        }));
    }

    const onUnitXChange = (e) => {
        if (e.target.value === 'default') {
            dispatch(setProp({
                name: 'backgroundPositionX',
                value: '',
                id: activeComponent.id
            }));
        }
        if (e.target.value !== 'default') {
            dispatch(setProp({
                name: 'backgroundPositionX',
                value: `${parsedPropX.value}${e.target.value}`,
                id: activeComponent.id
            }));
        }
    }

    const onUnitYChange = (e) => {
        if (e.target.value === 'default') {
            dispatch(setProp({
                name: 'backgroundPositionY',
                value: '',
                id: activeComponent.id
            }));
        }
        if (e.target.value !== 'default') {
            dispatch(setProp({
                name: 'backgroundPositionY',
                value: `${parsedPropY.value}${e.target.value}`,
                id: activeComponent.id
            }));
        }
    }


    return (
        <Item style={{alignItems: 'flex-start', marginTop: '10px', marginBottom: '10px'}}>
            <ItemKey>background-position:</ItemKey>
            <ItemValue>
                <BackgroundPositionOutput isActive={true}>
                    <PositionInput
                        type="number"
                        step={5}
                        value={parsedPropX.value || ''}
                        onChange={onInputXChange}
                        disabled={parsedPropX.unit === 'default'}
                    />
                    <PositionUnit
                        value={parsedPropX.unit || 'default'}
                        onChange={onUnitXChange}
                    >
                        <option value="default">default</option>
                        <option value="px">px</option>
                        <option value="%">%</option>
                    </PositionUnit>
                </BackgroundPositionOutput>
                <BackgroundPositionOutput isActive={true}>
                    <PositionInput
                        type="number"
                        step={5}
                        value={parsedPropY.value || ''}
                        onChange={onInputYChange}
                        disabled={parsedPropY.unit === 'default'}
                    />
                    <PositionUnit
                        value={parsedPropY.unit || 'default'}
                        onChange={onUnitYChange}
                    >
                        <option value="default">default</option>
                        <option value="px">px</option>
                        <option value="%">%</option>
                    </PositionUnit>
                </BackgroundPositionOutput>
            </ItemValue>
        </Item>
    );
}
