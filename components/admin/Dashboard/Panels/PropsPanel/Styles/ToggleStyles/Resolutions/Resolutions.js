import React, { useEffect, useState } from 'react'
import { screenItems } from './Items';
import { ResolutionsIcon, ResolutionsItem, ResolutionsBody, ResolutionsValue, ResolutionsWrapper, ResolutionRow, ResolutionsCheckbox, ResolutionsCaption, ResolutionsColumn } from './ResolutionsStyled'
import StatesSection from '../PseudoClasses/PseudoClasses'
import { useDispatch, useSelector } from 'react-redux';
import { setResolution } from '../../../../../../../../store/actions/document';


const items = screenItems;


export default function Resolutions(props) {

    const currentResolution = useSelector(state => state.document.resolution);
    const dispatch = useDispatch();
    const {activeComponent} = props;
    const resolution = useSelector(state => state.document.resolution);

    useEffect(() => {
        if (!resolution && activeComponent) {
            dispatch(setResolution('screen_mobile'));
        }
    }, [dispatch, resolution, activeComponent]);

    const onItemClick = (e, value) => {
        dispatch(setResolution(value));
    }

    const [activeRadio, setActiveRadio] = useState('res-radio-1');


    return (
        <>
            <ResolutionsWrapper>

                <ResolutionRow>
                    <ResolutionsCheckbox type="radio" name="res-radio" id="res-radio-1" onChange={() => setActiveRadio('res-radio-1')} checked={activeRadio === 'res-radio-1'} />
                    <ResolutionsCaption htmlFor="res-radio-1">Общие стили</ResolutionsCaption>
                </ResolutionRow>

                <ResolutionRow>
                    <ResolutionsCheckbox type="radio" name="res-radio" id="res-radio-2" onChange={() => setActiveRadio('res-radio-2')}  checked={activeRadio === 'res-radio-2'}/>
                    <ResolutionsColumn>
                        <ResolutionsCaption htmlFor="res-radio-2">Стили для разрешений</ResolutionsCaption>
                        <ResolutionsBody>
                            {items && items.map(item => {
                                return (
                                    <ResolutionsItem 
                                        key={item.id} 
                                        id={item.id}
                                        showItem={activeRadio === 'res-radio-2'}
                                        isActive={item.id === currentResolution && activeRadio === 'res-radio-2'}
                                        onClick={(e) => onItemClick(e, item.id)}
                                    >
                                        <ResolutionsIcon style={item.style}>
                                            {item.icon && <item.icon />}
                                        </ResolutionsIcon>
                                        <ResolutionsValue>{item.value}</ResolutionsValue>
                                    </ResolutionsItem>
                                );
                            })}
                        </ResolutionsBody>
                    </ResolutionsColumn>
                    
                </ResolutionRow>
                    
                <ResolutionRow>
                    <ResolutionsCheckbox type="radio" name="res-radio" id="res-radio-3" checked={activeRadio === 'res-radio-3'} onChange={() => setActiveRadio('res-radio-3')} />
                    <ResolutionsColumn>
                        <ResolutionsCaption htmlFor="res-radio-3">Стили для состояний</ResolutionsCaption>
                        <StatesSection isActive={activeRadio === 'res-radio-3'} />
                    </ResolutionsColumn>
                </ResolutionRow>
            </ResolutionsWrapper>
        </>
    )
}
