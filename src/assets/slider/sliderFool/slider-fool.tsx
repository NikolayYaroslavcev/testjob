import React, {FC} from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings} from './settings';
import {SliderButton} from '../sliderRespons/slider-respons-styled';
import {SliderFoolBlock, SliderTextWrap, SliderWrap} from './slider-fool-styled';

type DataSellerType = {
    dataFoolSeller: FoolSliderType[]
}

type FoolSliderType = {
    id: number,
    text: string,
    about: string
}

export const SliderFool: FC<DataSellerType> = ({dataFoolSeller}) => {

    return (
        <SliderWrap>
            <h2>Отзывы</h2>
            <SliderFoolBlock>
                <Slider {...settings}>
                    {dataFoolSeller.map(el => (
                        <SliderTextWrap  key={el.id}>
                            <p>{el.text}</p>
                            <span>{el.about}</span>
                            <SliderButton>
                            </SliderButton>
                        </SliderTextWrap>
                    ))}
                </Slider>
            </SliderFoolBlock>

        </SliderWrap>
    );
};


