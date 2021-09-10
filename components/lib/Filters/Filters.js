import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setEventFilter } from '../../../store/actions/filters';
import { FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterSheduleWrapper, FiltersWrapper } from './FiltersStyled'


export default function Filters() {

    const state = useSelector(state => state);
    const filters = state.filters.events;
    const dispatch = useDispatch();
    const cities = [{name: 'minsk', acronym: 'Минск'}, {name: 'grodno', acronym: 'Гродно'}, {name: 'vitebsk', acronym: 'Витебск'}];
    const city = filters && filters.city ? filters.city : cities[0];


    return (
        <FiltersWrapper>
            <div style={{marginBottom: '15px'}}>
                <select
                    value={city || cities[0].name}
                    onChange={(e) => {
                        dispatch(setEventFilter('city', e.target.value));
                    }}
                >
                    {cities.map(item => (
                        <option
                            value={item.name}
                            key={item.name}
                        >
                            {item.acronym}
                        </option>
                    ))}
                </select>
            </div>

            <FilterSheduleWrapper>
                <FilterButton
                    onClick={() => {
                        dispatch(setEventFilter('shedule', 'now'));
                    }}
                    isActive={filters && filters.shedule === 'now'}
                >
                    Сейчас
                </FilterButton>
                <FilterButton
                    onClick={() => {
                        dispatch(setEventFilter('shedule', 'soon'));
                    }}
                    isActive={filters && filters.shedule === 'soon'}
                >
                    Скоро
                </FilterButton>
            </FilterSheduleWrapper>

            <FilterCinemaWrapper>
                <FilterCinemaSelect
                    onChange={(e) => {

                    }}
                >
                    <FilterCinemaOption value='all'>Все кинотеатры</FilterCinemaOption>
                    <FilterCinemaOption value='voka'>Voka</FilterCinemaOption>
                    <FilterCinemaOption value='arena'>Arena</FilterCinemaOption>
                    <FilterCinemaOption value='moon'>Moon</FilterCinemaOption>
                </FilterCinemaSelect>
            </FilterCinemaWrapper>


        </FiltersWrapper>
    )
}
