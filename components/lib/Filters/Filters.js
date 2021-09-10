import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setEventFilter, setShowFilter } from '../../../store/actions/filters';
import { FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterSheduleWrapper, FiltersWrapper } from './FiltersStyled'


export default function Filters() {

    const state = useSelector(state => state);
    const eventFilters = state.filters.events;
    const showFilters = state.filters.shows;
    const dispatch = useDispatch();
    const cities = [{name: 'minsk', acronym: 'Минск'}, {name: 'grodno', acronym: 'Гродно'}, {name: 'vitebsk', acronym: 'Витебск'}];
    const city = eventFilters && eventFilters.city ? eventFilters.city : cities[0];


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
                    isActive={eventFilters && eventFilters.shedule === 'now'}
                >
                    Сейчас
                </FilterButton>
                <FilterButton
                    onClick={() => {
                        dispatch(setEventFilter('shedule', 'soon'));
                    }}
                    isActive={eventFilters && eventFilters.shedule === 'soon'}
                >
                    Скоро
                </FilterButton>
            </FilterSheduleWrapper>

            <FilterCinemaWrapper>
                <FilterCinemaSelect
                    value={showFilters && showFilters.cinema || 'all'}
                    onChange={(e) => {
                        dispatch(setShowFilter('cinema', e.target.value));
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
