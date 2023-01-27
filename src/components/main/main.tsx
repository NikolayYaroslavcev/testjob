import React from 'react';
import {MainWrap} from './main-styled';
import {StyledContainer} from '../header/header-style';

import {SliderRespons} from '../../assets/slider/sliderRespons/slider-respons';
import {dataSeller} from '../../assets/slider/sliderRespons/data';
import {OurMission} from './ourMission/our-mission';
import {AboutCompany} from './aboutCompany/about-company';
import {dataFoolSeller} from '../../assets/slider/sliderFool/data';
import {SliderFool} from '../../assets/slider/sliderFool/slider-fool';


export const Main = () => {
    return (
        <MainWrap>
            <StyledContainer>
                <AboutCompany/>
                <OurMission/>
            </StyledContainer>
            <SliderRespons dataSeller={dataSeller}/>
            <SliderFool dataFoolSeller={dataFoolSeller}/>
        </MainWrap>
    );
};

