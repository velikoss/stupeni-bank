import React from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu} from 'react-pro-sidebar';
import {Link, useHistory} from "react-router-dom"
const Sidebar = () => {
    return (
        <div>
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
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Отличия малого и большого бизнеса`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection2" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Формула успеха малого бизнеса`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Стратегия развития малого бизнеса`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Управление малым и средним предприятием`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Бизнес-план малого предприятия`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Инвестиции и инновации`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Особенности внешнеэкономической деятельности`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Государство и малый бизнес`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Налоги для малого бизнеса`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Поддержка и развитие малого бизнеса Дона`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title={`Финансы для бизнеса`}>
                        <MenuItem>
                            Лекция
                            <Link to="/course/lection1" />
                        </MenuItem>
                        <MenuItem>
                            Тест
                            <Link to="/course/test1" />
                        </MenuItem>
                    </SubMenu>
                    <MenuItem>Экзамен</MenuItem>
                </Menu>
            </SidebarContent>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
