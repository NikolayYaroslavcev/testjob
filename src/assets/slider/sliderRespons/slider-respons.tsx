import React, {FC, useRef} from 'react';
import {SliderButton, SliderResponsWrapper, SliderWrap} from './slider-respons-styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings} from './settings';
import Slider from 'react-slick';
import arrowRight from '../../img/slider/ArrowRight.svg'
import arrowLeft from '../../img/slider/ArrowLeft.svg'
import {HeaderImage, StyledContainer} from '../../../components/header/header-style';



type DataSellerType = {
    dataSeller: FoolSliderType[]
}

type FoolSliderType = {
    id: number,
    imag: string
}

export const SliderRespons: FC<DataSellerType> = ({dataSeller}) => {
    const sliderRef = useRef<any>(null);

    return (
        <SliderResponsWrapper>
            <h2>Наши клиенты</h2>
            <SliderWrap>
                <Slider {...settings}
                        ref={sliderRef}>
                    {dataSeller.map(el => (
                        <HeaderImage width={'300px'} height={'95px'} key={el.id}>
                            <img src={el.imag}
                                 alt="slider"/>
                        </HeaderImage>
                    ))}
                </Slider>
            </SliderWrap>
            <StyledContainer>
                <SliderButton>
                    <img onClick={() => sliderRef.current.slickPrev()} src={arrowLeft} alt="arrowLeft"/>
                    <img onClick={() => sliderRef.current.slickNext()} src={arrowRight} alt="arrowRight"/>
                </SliderButton>
            </StyledContainer>
        </SliderResponsWrapper>

    )
        ;
};


