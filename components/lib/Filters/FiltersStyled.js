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

// cinema
export const FilterCinemaWrapper = styled.div`
    margin-bottom: 5px;
`;

export const FilterCinemaSelect = styled.select``;

export const FilterCinemaOption = styled.option``;

export const FilterDateWrapper = styled.div`
    margin-bottom: 5px;
`;

// date
export const FilterDateSelect = styled.select``;

export const FilterDateOption = styled.option``;

export const FilterWrapper = styled.div`
    margin-bottom: 5px;
`;

// filter
export const FilterTitle = styled.span`
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    padding-left: 10px;
`;

export const FilterSelect = styled.select``;

export const FilterOption = styled.option``;

// multiple
export const MultipleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const MultipleItem = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`;

export const MultipleCheckbox = styled.input`
    cursor: pointer;
`;

export const MultipleLabel = styled.label`
    cursor: pointer;
`;
