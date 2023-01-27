import React from 'react';
import {FooterBottom, FooterIcons, FooterTop, FooterWrap} from './footer-style';
import logo from '../../../src/assets/img/footer/logoTop.svg'
import logoBottom from '../../../src/assets/img/footer/logoBottom.svg'
import {StyledContainer} from '../header/header-style';


export const Footer = () => {
    return (
        <FooterWrap>
            <StyledContainer>
                <FooterTop>
                    <img src={logo} alt="logo"/>
                    <FooterIcons>
                        <a href="#" className={'_icon-instagram'}/>
                        <a href="#" className={'_icon-facebook'}/>
                        <a href="#" className={'_icon-link'}/>
                        <a href="#" className={'_icon-whatsapp'}/>
                        <a href="#" className={'_icon-telegram'}/>
                    </FooterIcons>
                </FooterTop>
                <FooterBottom>
                    <div>
                        <p>ООО "Веон-консалт"</p>
                        <p>УНП 193082231</p>
                    </div>
                    <div>
                        <p>+7(995)577-51-63</p>
                        <p>sales@veon-tech.ru</p>
                        <p>220068, г. Минск, ул. Орловская, 40а, офис 40-1</p>
                        <p>С понедельника по пятницу</p>
                    </div>
                    <div>
                        <p>Copyright © 2022 Veon-Tech Ltd</p>
                        <p>All Rights Reserved.</p>
                    </div>
                    <div>
                        <img src={logoBottom} alt="logoBottom"/>
                    </div>
                </FooterBottom>
            </StyledContainer>
        </FooterWrap>
    );
};

