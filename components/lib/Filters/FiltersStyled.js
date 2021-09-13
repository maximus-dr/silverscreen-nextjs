import styled from "styled-components";


export const FiltersWrapper = styled.div``;

export const FilterButton = styled.button`
    outline: none;
    margin-right: 5px;
    ${props => props.isActive && `
        outline: 2px solid black;
    `}
`;

export const FilterSheduleWrapper = styled.div`
    margin-bottom: 5px;
`;

export const FilterCinemaWrapper = styled.div`
    margin-bottom: 5px;
`;

export const FilterCinemaSelect = styled.select``;

export const FilterCinemaOption = styled.option``;

export const FilterDateWrapper = styled.div`
    margin-bottom: 5px;
`;

export const FilterDateSelect = styled.select``;

export const FilterDateOption = styled.option``;

export const FilterWrapper = styled.div`
    margin-bottom: 5px;
`;

export const FilterSelect = styled.select``;

export const FilterOption = styled.option``;
