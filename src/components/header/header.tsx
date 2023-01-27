import React, {useState} from 'react';


import logo from '../../assets/img/logo.svg'
import {
    Button,
    HeaderImage,
    HeaderStyle,
    HeaderWrapper,
    Menu,
    MenuItem,
    MenuSubItem,
    StyledContainer,
    SubMenu
} from "./header-style";
import {Burger} from "../../assets/burger/style-burger";
import {MenuList} from "../../assets/menu/style-menu";

export const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const onClickBurger = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <HeaderStyle>
            <StyledContainer>
                <HeaderWrapper>
                    <HeaderImage width="285px" height="92px" borderRadius="0">
                        <img src={logo}
                             alt="Logo"/>
                    </HeaderImage>
                    <Menu>
                        <MenuList isOpenBurger={openBurger}>
                            <MenuItem><a href="#">ГЛАВНАЯ</a></MenuItem>
                            <MenuItem><a href="#">О НАС</a>
                                <SubMenu>
                                    <MenuSubItem><a href="#">О НАШЕЙ КОМПАНИИ</a></MenuSubItem>
                                    <MenuSubItem><a href="#">NDA</a></MenuSubItem>
                                    <MenuSubItem><a href="#">ВАКАНСИИ</a></MenuSubItem>
                                </SubMenu>
                            </MenuItem>
                            <MenuItem><a href="#">КЕЙСЫ</a></MenuItem>
                            <MenuItem><a href="#">УСЛУГИ</a>
                                <SubMenu>
                                    <MenuSubItem><a href="#">Разработка сайтов</a></MenuSubItem>
                                    <MenuSubItem><a href="#">Поддержка сайтов</a></MenuSubItem>
                                    <MenuSubItem><a href="#">Разработка ПО</a></MenuSubItem>
                                    <MenuSubItem><a href="#">UX/UI дизайн</a></MenuSubItem>
                                </SubMenu>
                            </MenuItem>
                            <MenuItem><a href="#">БОНУСЫ</a></MenuItem>
                            <MenuItem><a href="#">КОНТАКТЫ</a></MenuItem>
                        </MenuList>
                    </Menu>
                    <Button type={"button"}>Заказать звонок</Button>
                    <Burger isOpenBurger={openBurger} onClick={onClickBurger}><span/></Burger>
                </HeaderWrapper>
            </StyledContainer>
        </HeaderStyle>
    )
};

