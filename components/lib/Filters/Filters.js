import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearFilters, setFilter, setMultipleFilter, unsetMultipleFilter, UNSET_MULTIPLE_FILTER } from '../../../store/actions/filters';
import { ClearButton, FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterDateOption, FilterDateSelect, FilterDateWrapper, FilterOption, FilterSelect, FilterSheduleWrapper, FiltersWrapper, FilterTitle, FilterWrapper, MultipleCheckbox, MultipleItem, MultipleLabel, MultipleWrapper } from './FiltersStyled'

const cities = [{name: '$city;all', acronym: 'Все города'}, {name: '$city;minsk', acronym: 'Минск'}, {name: '$city;grodno', acronym: 'Гродно'}];

const genres = [
    {
        name: "$genre;family",
        acronym: "Семейный"
    },
    {
        name: "$genre;drama",
        acronym: "Драма"
    },
    {
        name: "$genre;comedy",
        acronym: "Комедия"
    },
    {
        name: "$genre;cartoon",
        acronym: "Мультфильм"
    },
    {
        name: "$genre;fantasy",
        acronym: "Фэнтези"
    },
    {
        name: "$genre;show",
        acronym: "Шоу"
    },
    {
        name: "$genre;fantastic",
        acronym: "Фантастика"
    },
    {
        name: "$genre;sport",
        acronym: "Спорт"
    },
    {
        name: "$genre;doc",
        acronym: "Документальный"
    },
    {
        name: "$genre;exhibition",
        acronym: "Выставка"
    },
    {
        name: "$genre;thriller",
        acronym: "Триллер"
    },
    {
        name: "$genre;adventure",
        acronym: "Приключения"
    }
];

const videoFormats = [
    {
        name: '$videotype;2d',
        acronym: '2D'
    },
    {
        name: '$videotype;3d',
        acronym: '3D'
    },
    {
        name: '$videotype;2d4k',
        acronym: '2D 4K'
    },
    {
        name: '$videotype;screenx',
        acronym: 'ScreenX'
    }
];

const soundFormats = [
    {
        name: '$audiotype;dolbydigital',
        acronym: 'Dolby Digital'
    },
    {
        name: '$audiotype;dolbyatmos',
        acronym: 'Dolby Atmos'
    }
];


const auditoriums = [
    {
        name: '$auditorium;vip',
        acronym: 'VIP'
    },
    {
        name: '$auditorium;vegaslounge',
        acronym: 'VEGAS LOUNGE'
    },
    {
        name: '$auditorium;voka',
        acronym: 'VOKA'
    },
    {
        name: '$auditorium;resto',
        acronym: 'RESTO'
    }
]



export default function Filters() {


    const state = useSelector(state => state);
    const filters = state.filters;
    const dispatch = useDispatch();


    const onFilterChange = (filter) => {
        if (filters.includes(filter)) return;
        dispatch(setFilter(filter));
    }

    const onMultipleFilterChange = (filter) => {
        if (filters.includes(filter)) {
            dispatch(unsetMultipleFilter(filter));
            return;
        }
        dispatch(setMultipleFilter(filter));
    }

    const getFilterValue = (filters, category) => {
        return filters.filter(tag => tag.includes(category));
    };

    useEffect(() => {
        const sheduleFilter = filters && filters.some(item => item.includes('$shedule;'));
        if (!sheduleFilter) {
            dispatch(setFilter('$shedule;now'));
        }
    }, [dispatch, filters])


    return (
        <FiltersWrapper>
            <div style={{marginBottom: '15px'}}>
                <select
                    value={getFilterValue(filters, '$city;')[0] || cities[0].name}
                    onChange={(e) => onFilterChange(e.target.value)}
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
                        dispatch(setFilter('$shedule;now'));
                    }}
                    isActive={getFilterValue(filters, '$shedule;')[0] === '$shedule;now'}
                >
                    Сейчас
                </FilterButton>
                <FilterButton
                    onClick={() => {
                        dispatch(setFilter('$shedule;soon'));
                    }}
                    isActive={getFilterValue(filters, '$shedule;')[0] === '$shedule;soon'}
                >
                    Скоро
                </FilterButton>
            </FilterSheduleWrapper>

            <FilterDateWrapper>
                <FilterDateSelect
                    value={getFilterValue(filters, '$date;')[0] || '$date;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterDateOption value="$date;all">Все даты</FilterDateOption>
                    <FilterDateOption value="$date;2021-10-04">2021-10-04</FilterDateOption>
                    <FilterDateOption value="$date;2021-10-05">2021-10-05</FilterDateOption>
                </FilterDateSelect>
            </FilterDateWrapper>

            <FilterCinemaWrapper>
                <FilterCinemaSelect
                    value={getFilterValue(filters, '$cinema;')[0] || '$cinema;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterCinemaOption value='$cinema;all'>Все кинотеатры</FilterCinemaOption>
                    <FilterCinemaOption value='$cinema;voka'>Voka</FilterCinemaOption>
                    <FilterCinemaOption value='$cinema;arena'>Arena</FilterCinemaOption>
                    <FilterCinemaOption value='$cinema;moon'>Moon</FilterCinemaOption>
                </FilterCinemaSelect>
            </FilterCinemaWrapper>

            <FilterWrapper>
                <FilterSelect
                    value={getFilterValue(filters, '$showtime;')[0] || '$showtime;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterOption value="$showtime;all">Все сеансы</FilterOption>
                    <FilterOption value="$showtime;07:00-11:59">07:00-11:59</FilterOption>
                    <FilterOption value="$showtime;12:00-16:59">12:00-16:59</FilterOption>
                    <FilterOption value="$showtime;17:00-21:59">17:00-21:59</FilterOption>
                    <FilterOption value="$showtime;22:00-06:59">22:00-06:59</FilterOption>
                </FilterSelect>
            </FilterWrapper>

            <FilterTitle>Жанры</FilterTitle>
            <MultipleWrapper>
                {genres.map(genre => (
                    <MultipleItem key={genre.name}>
                        <MultipleCheckbox
                            id={genre.name}
                            name={genre.name}
                            type="checkbox"
                            checked={getFilterValue(filters, '$genre;').includes(genre.name)}
                            onChange={(e) => onMultipleFilterChange(e.target.name)}
                        />
                        <MultipleLabel
                            htmlFor={genre.name}
                        >
                            {genre.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <FilterTitle>Видео</FilterTitle>
            <MultipleWrapper>
                {videoFormats.map(item => (
                    <MultipleItem key={item.name}>
                        <MultipleCheckbox
                            id={item.name}
                            name={item.name}
                            type="checkbox"
                            checked={getFilterValue(filters, '$videotype;').includes(item.name)}
                            onChange={(e) => onMultipleFilterChange(e.target.name)}
                        />
                        <MultipleLabel
                            htmlFor={item.name}
                        >
                            {item.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <FilterTitle>Звук</FilterTitle>
            <MultipleWrapper>
                {soundFormats.map(item => (
                    <MultipleItem key={item.name}>
                        <MultipleCheckbox
                            id={item.name}
                            name={item.name}
                            type="checkbox"
                            checked={getFilterValue(filters, '$audiotype;').includes(item.name)}
                            onChange={(e) => onMultipleFilterChange(e.target.name)}
                        />
                        <MultipleLabel
                            htmlFor={item.name}
                        >
                            {item.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <FilterTitle>Зал</FilterTitle>
            <MultipleWrapper>
                {auditoriums.map(item => (
                    <MultipleItem key={item.name}>
                        <MultipleCheckbox
                            id={item.name}
                            name={item.name}
                            type="checkbox"
                            checked={getFilterValue(filters, '$auditorium;').includes(item.name)}
                            onChange={(e) => onMultipleFilterChange(e.target.name)}
                        />
                        <MultipleLabel
                            htmlFor={item.name}
                        >
                            {item.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <ClearButton
                onClick={() => dispatch(clearFilters())}
            >
                Очистить фильтры
            </ClearButton>

        </FiltersWrapper>
    )
}
