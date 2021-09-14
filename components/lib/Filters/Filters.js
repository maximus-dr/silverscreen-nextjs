import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDate, setEventFilter, setShowFilter, unsetEventFilter } from '../../../store/actions/filters';
import { FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterDateOption, FilterDateSelect, FilterDateWrapper, FilterOption, FilterSelect, FilterSheduleWrapper, FiltersWrapper, FilterWrapper } from './FiltersStyled'


export default function Filters() {

    const state = useSelector(state => state);
    const eventFilters = state.filters.events;
    const showFilters = state.filters.shows;
    const filters = state.filters;
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

            <FilterDateWrapper>
                <FilterDateSelect
                    value={filters && filters.date || '2021-09-10'}
                    onChange={(e) => {
                        dispatch(setDate(e.target.value));
                    }}
                >
                    <FilterDateOption value="2021-09-10">2021-09-10</FilterDateOption>
                    <FilterDateOption value="2021-09-11">2021-09-11</FilterDateOption>
                    <FilterDateOption value="2021-09-12">2021-09-12</FilterDateOption>
                </FilterDateSelect>
            </FilterDateWrapper>

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

            <FilterWrapper>
                <FilterSelect
                    value={eventFilters && eventFilters.month || 'all'}
                    onChange={(e) => {
                        dispatch(setEventFilter('month', e.target.value));
                    }}
                >
                    <FilterOption value="all">Все месяцы</FilterOption>
                    <FilterOption value="september">Сентябрь</FilterOption>
                    <FilterOption value="october">Октябрь</FilterOption>
                    <FilterOption value="november">Ноябрь</FilterOption>
                    <FilterOption value="december">Декабрь</FilterOption>
                </FilterSelect>
            </FilterWrapper>

            <FilterWrapper>
                <FilterSelect
                    value={showFilters && showFilters.time || 'all'}
                    onChange={(e) => {
                        dispatch(setShowFilter('time', e.target.value));
                    }}
                >
                    <FilterOption value="all">Все сеансы</FilterOption>
                    <FilterOption value="07:00-11:59">07:00-11:59</FilterOption>
                    <FilterOption value="12:00-16:59">12:00-16:59</FilterOption>
                    <FilterOption value="17:00-21:59">17:00-21:59</FilterOption>
                    <FilterOption value="22:00-06:59">22:00-06:59</FilterOption>
                </FilterSelect>
            </FilterWrapper>

        </FiltersWrapper>
    )
}
