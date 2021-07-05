import React from 'react'
import Panel from '../Panel/Panel'
import PanelList from '../PanelList/PanelList'


export default function ComponentsPanel() {
    return (
        <>
            <Panel title="Компоненты">
                {/* <PanelList title="Страница" items={['Шаблон страницы 1', 'Шаблон страницы 2', 'Шаблон страницы 3']} /> */}
                <PanelList title="Секция" items={['Шаблон секции 1', 'Шаблон секции 2', 'Шаблон секции 3']} />
                <PanelList title="Заголовок" items={['Шаблон заголовока 1', 'Шаблон заголовока 2', 'Шаблон заголовока 3']} />
                <PanelList title="Текст" items={['Шаблон текста 1', 'Шаблон текста 2', 'Шаблон текста 3']}/>
                <PanelList title="Изображение" items={['Шаблон изображения 1', 'Шаблон изображения 2', 'Шаблон изображения 3']}/>
                <PanelList title="Кнопка" items={['Кнопка 1', 'Кнопка 2', 'Кнопка 3']}/>
                <PanelList title="Ссылка" items={['Ссылка 1', 'Ссылка 2', 'Ссылка 3']}/>
                <PanelList title="Иконка" items={['Иконка 1', 'Иконка 2', 'Иконка 3']}/>
                <PanelList title="Форма" items={['Форма 1', 'Форма 2', 'Форма 3']}/>
                <PanelList title="Поле ввода" items={['Поле ввода 1', 'Поле ввода 2', 'Поле ввода 3']}/>
                <PanelList title="Чекбокс" items={['Чекбокс 1', 'Чекбокс 2', 'Чекбокс 3']}/>
                <PanelList title="Радиокнопка" items={['Радиокнопка 1', 'Радиокнопка 2', 'Радиокнопка 3']}/>
                <PanelList title="Табы" items={['Радиокнопка 1', 'Радиокнопка 2', 'Радиокнопка 3']}/>
                <PanelList title="Выпадающее меню" items={['Шаблон меню 1', 'Шаблон меню 2', 'Шаблон меню 3']}/>
            </Panel>
            <Panel title="Документ" />
        </>
    )
}
