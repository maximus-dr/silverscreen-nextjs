import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearFilters, setDate, setEventFilter, setFilter, setShowFilter } from '../../../store/actions/filters';
import { ClearButton, FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterDateOption, FilterDateSelect, FilterDateWrapper, FilterOption, FilterSelect, FilterSheduleWrapper, FiltersWrapper, FilterTitle, FilterWrapper, MultipleCheckbox, MultipleItem, MultipleLabel, MultipleWrapper } from './FiltersStyled'

const cities = [{name: '#city;all', acronym: 'Все города'}, {name: '#city;minsk', acronym: 'Минск'}, {name: '#city;grodno', acronym: 'Гродно'}];

const genres = [
    {
        name: "family",
        acronym: "Семейный"
    },
    {
        name: "drama",
        acronym: "Драма"
    },
    {
        name: "comedy",
        acronym: "Комедия"
    },
    {
        name: "cartoon",
        acronym: "Мультфильм"
    },
    {
        name: "fantasy",
        acronym: "Фэнтези"
    },
    {
        name: "show",
        acronym: "Шоу"
    },
    {
        name: "fantastic",
        acronym: "Фантастика"
    },
    {
        name: "sport",
        acronym: "Спорт"
    },
    {
        name: "doc",
        acronym: "Документальный"
    },
    {
        name: "exhibition",
        acronym: "Выставка"
    },
    {
        name: "thriller",
        acronym: "Триллер"
    }
];

const videoFormats = [
    {
        name: '2d',
        acronym: '2D'
    },
    {
        name: '3d',
        acronym: '3D'
    },
    {
        name: '2d4k',
        acronym: '2D 4K'
    },
    {
        name: 'screenX',
        acronym: 'ScreenX'
    }
];

const soundFormats = [
    {
        name: 'dolbyDigital',
        acronym: 'Dolby Digital'
    },
    {
        name: 'dolbyAtmos',
        acronym: 'Dolby Atmos'
    }
];

const languages = [
    {
        name: 'ru',
        acronym: 'Русский язык'
    },
    {
        name: 'by',
        acronym: 'Беларуская мова'
    },
    {
        name: 'ov',
        acronym: 'Original'
    },
    {
        name: 'eng',
        acronym: 'English'
    }
]

const sub = [
    {
        name: 'sub',
        acronym: 'SUB'
    }
]

const auditoriums = [
    {
        name: 'vip',
        acronym: 'VIP'
    },
    {
        name: 'vegasLounge',
        acronym: 'VEGAS LOUNGE'
    },
    {
        name: 'voka',
        acronym: 'VOKA'
    },
    {
        name: 'resto',
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

    const onMultipleFilterChange = (e, filter) => {

    }

    const getFilterValue = (filters, category) => {
        return filters.filter(tag => tag.includes(category));
    };


    return (
        <FiltersWrapper>
            <div style={{marginBottom: '15px'}}>
                <select
                    value={getFilterValue(filters, '#city;')[0] || cities[0].name}
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
                        dispatch(setFilter('#shedule;now'));
                    }}
                    isActive={getFilterValue(filters, '#shedule;')[0] === '#shedule;now'}
                >
                    Сейчас
                </FilterButton>
                <FilterButton
                    onClick={() => {
                        dispatch(setFilter('#shedule;soon'));
                    }}
                    isActive={getFilterValue(filters, '#shedule;')[0] === '#shedule;soon'}
                >
                    Скоро
                </FilterButton>
            </FilterSheduleWrapper>

            <FilterDateWrapper>
                <FilterDateSelect
                    value={getFilterValue(filters, '#date;')[0] || '#date;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterDateOption value="#date;all">Все даты</FilterDateOption>
                    <FilterDateOption value="#date;2021-10-04">2021-10-04</FilterDateOption>
                    <FilterDateOption value="#date;2021-10-05">2021-10-05</FilterDateOption>
                    <FilterDateOption value="#date;2021-10-06">2021-10-06</FilterDateOption>
                </FilterDateSelect>
            </FilterDateWrapper>

            <FilterCinemaWrapper>
                <FilterCinemaSelect
                    value={getFilterValue(filters, '#cinema;')[0] || '#cinema;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterCinemaOption value='#cinema;all'>Все кинотеатры</FilterCinemaOption>
                    <FilterCinemaOption value='#cinema;voka'>Voka</FilterCinemaOption>
                    <FilterCinemaOption value='#cinema;arena'>Arena</FilterCinemaOption>
                    <FilterCinemaOption value='#cinema;moon'>Moon</FilterCinemaOption>
                </FilterCinemaSelect>
            </FilterCinemaWrapper>

            <FilterWrapper>
                <FilterSelect
                    value={getFilterValue(filters, '#showTime;')[0] || '#showTime;all'}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    <FilterOption value="#showTime;all">Все сеансы</FilterOption>
                    <FilterOption value="#showTime;07:00-11:59">07:00-11:59</FilterOption>
                    <FilterOption value="#showTime;12:00-16:59">12:00-16:59</FilterOption>
                    <FilterOption value="#showTime;17:00-21:59">17:00-21:59</FilterOption>
                    <FilterOption value="#showTime;22:00-06:59">22:00-06:59</FilterOption>
                </FilterSelect>
            </FilterWrapper>

            <FilterTitle>Жанры</FilterTitle>
            <MultipleWrapper>
                {genres.map(genre => (
                    <MultipleItem key={genre.name}>
                        <MultipleCheckbox
                            id={`genre-${genre.name}`}
                            name={genre.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'genre')}
                        />
                        <MultipleLabel
                            htmlFor={`genre-${genre.name}`}
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
                            id={`video-${item.name}`}
                            name={item.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'video')}
                        />
                        <MultipleLabel
                            htmlFor={`video-${item.name}`}
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
                            id={`sound-${item.name}`}
                            name={item.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'sound')}
                        />
                        <MultipleLabel
                            htmlFor={`sound-${item.name}`}
                        >
                            {item.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <FilterTitle>Язык</FilterTitle>
            <MultipleWrapper>
                {languages.map(item => (
                    <MultipleItem key={item.name}>
                        <MultipleCheckbox
                            id={`language-${item.name}`}
                            name={item.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'language')}
                        />
                        <MultipleLabel
                            htmlFor={`language-${item.name}`}
                        >
                            {item.acronym}
                        </MultipleLabel>
                    </MultipleItem>
                ))}
            </MultipleWrapper>

            <FilterTitle>Субтитры</FilterTitle>
            <MultipleWrapper>
                {sub.map(item => (
                    <MultipleItem key={item.name}>
                        <MultipleCheckbox
                            id={`subtitles-${item.name}`}
                            name={item.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'subtitles')}
                        />
                        <MultipleLabel
                            htmlFor={`subtitles-${item.name}`}
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
                            id={`auditorium-${item.name}`}
                            name={item.name}
                            type="checkbox"
                            checked={false}
                            onChange={(e) => onMultipleFilterChange(e, 'auditorium')}
                        />
                        <MultipleLabel
                            htmlFor={`auditorium-${item.name}`}
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
