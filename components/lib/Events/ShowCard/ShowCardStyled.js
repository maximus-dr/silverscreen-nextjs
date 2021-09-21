import styled from "styled-components";



export const ShowCardWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
`;

export const ShowPoster = styled.img`
    height: 100%;
    width: auto;
    max-width: 160px;
    object-fit: cover;
`;

export const ShowColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 25px;
`;

export const ShowTitle = styled.span`
    display: inline;
    margin: 0;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
`;

export const ShowTagsGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const ShowTag = styled.div`
    margin-right: 10px;
`;
