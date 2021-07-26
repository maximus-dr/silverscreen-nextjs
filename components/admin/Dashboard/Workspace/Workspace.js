import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { renderComponents, getComponentsList } from '../../../../core/functions/render';

import Add from './Add/Add'
import Screens from './Screens/Screens';
import { WorkspacePage, WorkspacePageWrapper, WorkspaceWrapper } from './WorkspaceStyled'
import  styled from 'styled-components';



const TestPage = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    color: #ffffff;
    background-image: linear-gradient(#FC5C7D, #6A82FB);
`;


const Wrapper = styled.div`
    padding-top: 50px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 50px;
    
`;

const Title = styled.span`
    display: inline-block;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 35px;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
`;

const CardWrapper = styled.div`
    flex: 1 1 300px;
    margin-bottom: 25px;
`;

const Card = styled.div`
    width: 100%;
    padding-bottom: 58%;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/kekstagram-2741a.appspot.com/o/news-1.jpg?alt=media&token=e5b6016b-2708-42ee-a328-d3a1545b084c');
    background-size: cover;
    border-radius: 8px;
    margin-bottom: 10px;
`;


const Date = styled.span`
    font-size: 13px;
    line-height: 24px;
    text-transform: uppercase;
`;

const Text = styled.p`
    margin-top: 15px;
`;


const Test = () => {
    return (
        <>
            <TestPage>
                    <Wrapper>
                        <Title>новости и акции</Title>
                        <Cards>
                            <CardWrapper>
                                <Card />
                                <Date>26 Июля 2021</Date>
                                <Text>
                                    Уважаемые зрители! В целях снижение рисков распространения инфекции (COVID - 19) и сохранения здоровья посетителей и работников кинотеатра в нашей сети действует следующий комплекс мер безопасности...
                                </Text>
                            </CardWrapper>
                            <CardWrapper>
                                <Card />
                                <Date>26 Июля 2021</Date>
                                <Text>
                                    Уважаемые зрители! В целях снижение рисков распространения инфекции (COVID - 19) и сохранения здоровья посетителей и работников кинотеатра в нашей сети действует следующий комплекс мер безопасности...
                                </Text>
                            </CardWrapper>
                            <CardWrapper>
                                <Card />
                                <Date>26 Июля 2021</Date>
                                <Text>
                                    Уважаемые зрители! В целях снижение рисков распространения инфекции (COVID - 19) и сохранения здоровья посетителей и работников кинотеатра в нашей сети действует следующий комплекс мер безопасности...
                                </Text>
                            </CardWrapper>
                        </Cards>
                        
                    </Wrapper>
            </TestPage>
        </>
    );
}




export default function Workspace() {

    const componentsData = useSelector(state => state.document.componentsData);
    const components = renderComponents(componentsData);

    const resolution = useSelector(state => state.document.resolution);
    const pageWrapperWidth = resolution ? resolution + 100 + 'px' : '1300px';
    const pageWidth = resolution ? resolution + 'px' : '1200px';

    const [screen, setScreen] = useState('320');

    return (
        <WorkspaceWrapper>
            <WorkspacePageWrapper>
                <Screens screen={screen} setScreen={setScreen} />
                <WorkspacePage pageWidth={`${screen}px`}>
                    {components}
                    {/* <Test /> */}
                </WorkspacePage>
            </WorkspacePageWrapper>
        </WorkspaceWrapper> 
    )
}
