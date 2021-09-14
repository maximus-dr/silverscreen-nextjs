import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearFilters, setDate, setEventFilter, setMultipleEventFilter, setMultipleShowFilter, setShowFilter, unsetEventFilter, unsetMultipleEventFilter, unsetMultipleShowFilter } from '../../../store/actions/filters';
import { ClearButton, FilterButton, FilterCinemaOption, FilterCinemaSelect, FilterCinemaWrapper, FilterDateOption, FilterDateSelect, FilterDateWrapper, FilterOption, FilterSelect, FilterSheduleWrapper, FiltersWrapper, FilterTitle, FilterWrapper, MultipleCheckbox, MultipleItem, MultipleLabel, MultipleWrapper } from './FiltersStyled'

const cities = [{name: 'all', acronym: 'Все города'}, {name: 'minsk', acronym: 'Минск'}, {name: 'grodno', acronym: 'Гродно'}, {name: 'vitebsk', acronym: 'Витебск'}];

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
    const eventFilters = state.filters.events;
    const showFilters = state.filters.shows;
    const filters = state.filters;
    const dispatch = useDispatch();
    const city = eventFilters && eventFilters.city ? eventFilters.city : cities[0];


    const onMultipleEventFilterChange = (e, category) => {
        if (eventFilters && eventFilters[category] && eventFilters[category].includes(e.target.name)) {
            dispatch(unsetMultipleEventFilter(category, e.target.name));
            return;
        }
        dispatch(setMultipleEventFilter(category, e.target.name));
    }

    const onMultipleShowFilterChange = (e, category) => {
        if (showFilters && showFilters[category] && showFilters[category].includes(e.target.name)) {
            dispatch(unsetMultipleShowFilter(category, e.target.name));
            return;
        }
        dispatch(setMultipleShowFilter(category, e.target.name));
    }

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
                    <FilterDateOption value="all">Все даты</FilterDateOption>
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

            <FilterTitle>Жанры</FilterTitle>
            <MultipleWrapper>
                {genres.map(genre => (
                    <MultipleItem key={genre.name}>
                        <MultipleCheckbox
                            id={`genre-${genre.name}`}
                            name={genre.name}
                            type="checkbox"
                            checked={eventFilters && eventFilters.genre && eventFilters.genre.includes(genre.name) || false}
                            onChange={(e) => onMultipleEventFilterChange(e, 'genre')}
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
                            checked={showFilters && showFilters.video && showFilters.video.includes(item.name) || false}
                            onChange={(e) => onMultipleShowFilterChange(e, 'video')}
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
                            checked={showFilters && showFilters.sound && showFilters.sound.includes(item.name) || false}
                            onChange={(e) => onMultipleShowFilterChange(e, 'sound')}
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
                            checked={showFilters && showFilters.language && showFilters.language.includes(item.name) || false}
                            onChange={(e) => onMultipleShowFilterChange(e, 'language')}
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
                            checked={showFilters && showFilters.subtitles && showFilters.subtitles.includes(item.name) || false}
                            onChange={(e) => onMultipleShowFilterChange(e, 'subtitles')}
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
                            checked={showFilters && showFilters.auditorium && showFilters.auditorium.includes(item.name) || false}
                            onChange={(e) => onMultipleShowFilterChange(e, 'auditorium')}
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
