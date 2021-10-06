import React from 'react';
import "./Course.css"
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from "react-router-dom";
import Header from './Header/Header'

const Course = () => {
    return (
        <div id="CoursePage">
            <div id='Course'>
            <Header></Header>
            <ProSidebar>
            <SidebarHeader>
                Курс «Малый бизнес»
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <SubMenu title={`Что такое малый бизнеc`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Отличия малого и большого бизнеса`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Формула успеха малого бизнеса`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Стратегия развития малого бизнеса`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Управление малым и средним предприятием`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Бизнес-план малого предприятия`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Инвестиции и инновации`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Особенности внешнеэкономической деятельности`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Государство и малый бизнес`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Налоги для малого бизнеса`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Поддержка и развитие малого бизнеса Дона`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <SubMenu title={`Финансы для бизнеса`}>
                        <MenuItem>Лекция</MenuItem>
                        <MenuItem>Тест</MenuItem>
                    </SubMenu>
                    <MenuItem>Экзамен</MenuItem>
                </Menu>
            </SidebarContent>
            </ProSidebar>
            </div>
        </div>
    );
};

export default Course;
