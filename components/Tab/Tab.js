import React, { useState } from 'react'
import { Provider } from '..';
import { extractChildrenByRole } from '../../core/functions/components';
import { TabWarning, TabWarningCaption } from './TabStyled';


const createMessage = (message) => {
    return <div>{message}</div>
}


export default function Tab(props) {
    
    const tabBarData = extractChildrenByRole(props, 'tabBar');
    const tabHeadData = extractChildrenByRole(props, 'tabHead');
    const tabListData = extractChildrenByRole(props, 'tabList');
    const tabsData = tabListData && extractChildrenByRole(tabListData[0].props, 'tab') || null;
    const tabContentData = extractChildrenByRole(props, 'tabContent');

    const warnings = [];

    if (!tabBarData) warnings.push(createMessage('Добавьте tabBar'));
    if (!tabHeadData) warnings.push(createMessage('Добавьте tabHead'));
    if (!tabListData) warnings.push(createMessage('Добавьте tabList'));
    if (!tabsData) warnings.push(createMessage('Добавьте tab'));
    if (!tabContentData) warnings.push(createMessage('Добавьте tabContent'));
    
    if (warnings.length > 0) {
        return (
            <TabWarning>
                <TabWarningCaption>Warning!</TabWarningCaption>
                {warnings.map((item, i) => <div style={{}} key={i}>{item}</div>)}
            </TabWarning>
        );
    }

    const [activeTab, setActiveTab] = useState(tabsData && tabsData[0].props.componentData.tabKey || null);

    const el = {
        TabBar: Provider[tabBarData[0].props.componentData.typeName],
        TabHead: Provider[tabHeadData[0].props.componentData.typeName],
        TabList: Provider[tabListData[0].props.componentData.typeName],
        Tab: null,
        TabContent: Provider[tabContentData[0].props.componentData.typeName]
    }
    
    // Tabs
    const tabItems = tabsData.map(tab => {

        if (!tab.props.componentData.tabKey) {
            console.log('Добавьте tabKey для tab');
        }

        el.Tab = Provider[tab.props.componentData.typeName];

        const tabProps = {
            ...tab.props,
            handlers: {
                onClick: (e, props) => {
                    e.preventDefault();
                    setActiveTab(props.componentData.tabKey);
                },
                onChange: (e, props) => {
                    setActiveTab(props.componentData.tabKey);
                }
            }
        }
        return (
            <el.Tab
                {...tabProps}
                key={tab.key}
                isActive={tab.props.componentData.tabKey === activeTab}
                activeTab={activeTab}  
            />
        );
    });

    // TabContent
    const tabContentProps = {
        ...tabContentData[0].props
    }

    // предотвращает отрисовку табов из таб-баров на других уровнях  вложенности
    const tabHeadChildren = tabHeadData[0].props.children && tabHeadData[0].props.children.map(child => {
        if (child.props.componentData.role && child.props.componentData.role === 'tabList') {
                return
            }
        return child;
    }) || [];

    return (
        <el.TabBar key={tabBarData[0].key} {...tabBarData[0].props}>
            <el.TabHead key={tabHeadData[0].key} {...tabHeadData[0].props}>
                <el.TabList key={tabListData[0].key} {...tabListData[0].props}>
                    {tabItems}
                </el.TabList>
                {tabHeadChildren}
            </el.TabHead>
            
            <el.TabContent key={tabContentData[0].key} {...tabContentProps}>
                Active tab: {activeTab}
                {tabContentData[0].props.children}
            </el.TabContent>
        </el.TabBar>
    )
}
