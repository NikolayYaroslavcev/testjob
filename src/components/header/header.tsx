import React, {useState} from 'react';


import logo from '../../assets/img/logo.svg'
import logoModal from '../../assets/img/modal/logoTop.svg'
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
} from './header-style';
import {Burger} from '../../assets/burger/style-burger';
import {MenuList} from '../../assets/menu/style-menu';
import {Dialog} from '@headlessui/react';
import {ButtonClose, DialogBlock, DialogButton, ModalWrap, PopupWrap} from '../../assets/modal/style-modal';


export const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onClickBurger = () => {
        setOpenBurger(!openBurger)
    }

    const onClickModal = () => {
        setOpenModal(true)
    }
    const onClickModalWindow = () => {
        setOpenModal(false)
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
                    <Button onClick={onClickModal} type={'button'}>Заказать звонок</Button>
                    <Dialog open={openModal} onClose={onClickModalWindow}>
                        <ModalWrap>
                            <PopupWrap>
                                <ButtonClose onClick={onClickModalWindow}>X</ButtonClose>
                                <Dialog.Panel>
                                    <DialogBlock>
                                        <img src={logoModal} alt="logo"/>
                                        <div>Заказать звонок</div>
                                        <p>Оставьте заявку и наш специалист свяжется с вами в ближайшее время!</p>
                                        <input type="tel" placeholder={'+375('}/>
                                    </DialogBlock>
                                </Dialog.Panel>
                                <DialogButton>Заказать</DialogButton>
                            </PopupWrap>
                        </ModalWrap>
                    </Dialog>
                </HeaderWrapper>
            </StyledContainer>
        </HeaderStyle>
    )
};

