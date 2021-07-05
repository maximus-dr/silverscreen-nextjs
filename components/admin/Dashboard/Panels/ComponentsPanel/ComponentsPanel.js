import React from 'react'
import Panel from '../Panel/Panel'
import PanelList from '../PanelList/PanelList'


export default function ComponentsPanel() {
    return (
        <>
            <Panel title="Компоненты">
                {/* <PanelList title="Страница" items={['Шаблон страницы 1', 'Шаблон страницы 2', 'Шаблон страницы 3']} /> */}
                <PanelList id="1" title="Секция" items={[{id: 'sec1', name: 'Шаблон секции 1'}, {id: 'sec2', name: 'Шаблон секции 2'}, {id: 'sec3', name: 'Шаблон секции 3'}]} />
                <PanelList id="2" title="Заголовок" items={[{ id: 'lab1', name: 'Шаблон заголовока 1'}, { id: 'lab2', name: 'Шаблон заголовока 2'}, { id: 'lab3', name: 'Шаблон заголовока 3'}]} />
                <PanelList id="3" title="Текст" items={[{id: 'desc1', name: 'Шаблон текста 1'}, {id: 'desc2', name: 'Шаблон текста 2'}, {id: 'desc3', name: 'Шаблон текста 3'}]}/>
                <PanelList id="4" title="Изображение" items={[{id: 'img1', name: 'Шаблон изображения 1'}, {id: 'img2', name: 'Шаблон изображения 2'}, {id: 'img3', name: 'Шаблон изображения 3'}]}/>
                <PanelList id="5" title="Кнопка" items={[{id: 'but1', name: 'Кнопка 1'}, {id: 'but2', name: 'Кнопка 2'}, {id: 'but3', name: 'Кнопка 3'}]}/>
                <PanelList id="6" title="Ссылка" items={[{id: 'link1', name: 'Ссылка 1'}, {id: 'link2', name: 'Ссылка 2'}, {id: 'link3', name: 'Ссылка 3'}]}/>
                <PanelList id="7" title="Иконка" items={[{id: 'ic1', name: 'Иконка 1'}, {id: 'ic2', name: 'Иконка 2'}, {id: 'ic3', name: 'Иконка 3'}]}/>
                <PanelList id="8" title="Форма" items={[{id: 'form1', name: 'Форма 1'}, {id: 'form2', name: 'Форма 2'}, {id: 'form3', name: 'Форма 3'}]}/>
                <PanelList id="9" title="Поле ввода" items={[{id: 'insub1', name: 'Текстовое поле', isSubtitle: true}, {id: 'in1', name: 'Поле ввода 1'}, {id: 'in2', name: 'Поле ввода 2'}, {id: 'in3', name: 'Поле ввода 3'}, {id: 'insub2', name: 'Email', isSubtitle: true}, {id: 'in4', name: 'Поле ввода 1'}, {id: 'in5', name: 'Поле ввода 2'}, {id: 'in6', name: 'Поле ввода 3'}]}/>
                <PanelList id="10" title="Чекбокс" items={[{id: 'ch1', name: 'Чекбокс 1'}, {id: 'ch2', name: 'Чекбокс 2'}, {id: 'ch3', name: 'Чекбокс 3'}]}/>
                <PanelList id="11" title="Радиокнопка" items={[{id: 'rad1', name: 'Радиокнопка 1'}, {id: 'rad2', name: 'Радиокнопка 2'}, {id: 'rad3', name: 'Радиокнопка 3'}]}/>
                <PanelList id="12" title="Табы" items={[{id: 'tab1', name: 'Табы 1'}, {id: 'tab2', name: 'Табы 2'}, {id: 'tab3', name: 'Табы 3'}]}/>
                <PanelList id="13" title="Выпадающее меню" items={[{id: 'drd1', name: 'Шаблон меню 1'}, {id: 'drd2', name: 'Шаблон меню 2'}, {id: 'drd3', name: 'Шаблон меню 3'}]}/>
            </Panel>
        </>
    )
}
