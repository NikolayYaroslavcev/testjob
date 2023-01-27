import React from 'react';

import award from '../../../assets/result/award.png'
import documents from '../../../assets/result/documents.png'
import handshake from '../../../assets/result/handshake.png'
import {
    MissionContainer,
    OurContainer,
    OurMissionWrap,
    ResultBlock,
    ResultContainer,
    ResultImag, ResultItem
} from './our-mission-styled';

export const OurMission = () => {
    return (
        <OurMissionWrap>
            <MissionContainer>
                <OurContainer>
                    <h2>НАША МИССИЯ</h2>
                    <p>
                        Благодаря технологиям и высоким стандартам обслуживания Veon-tech улучшает качество жизни людей,
                        помогает им достигать большего и наслаждаться жизнью. С Veon-tech люди могут избежать стресса,
                        сэкономить свое время и разум для семьи и друзей, для любимых занятий, которые делают их
                        счастливее, и для идей, меняющих мир.
                    </p>
                </OurContainer>
                <OurContainer>
                    <h2>НАШИ ЦЕННОСТИ</h2>
                    <p>
                        Мы считаем, что самый ценный ресурс, которым мы обладаем, - это наши люди.
                        VEON-TECH - это не просто собрание высококвалифицированных специалистов, а команда. За годы
                        роста, благодаря инвестициям в тщательные процедуры отбора, обучение, конкурентные преимущества
                        и привлекательные возможности карьерного роста, нам удалось собрать мозаику мотивированных,
                        лояльных и высококвалифицированных ИТ-специалистов. Мы охотно инвестируем в программы и
                        инфраструктуру, которые привлекают и удерживают лучшие таланты, поддерживают полноценную среду,
                        вдохновляющую на профессиональные достижения и творчество.
                    </p>
                </OurContainer>
            </MissionContainer>
            <ResultContainer>
                <h1>Мы работаем на результат!</h1>
                <ResultBlock>
                    <ResultImag>
                        <img src={award} alt="award"/>
                    </ResultImag>
                    <ResultItem>
                        <h2>Приносим Вам прибыль</h2>
                        <p>Наша основная задача состоит в том, чтобы бизнес клиента приносил ему прибыль, если
                            зарабатывает бизнес клиента - зарабатываем и мы!</p>
                    </ResultItem>
                </ResultBlock>
                <ResultBlock>
                    <ResultImag>
                        <img src={documents} alt="documents"/>
                    </ResultImag>
                    <ResultItem>
                        <h2>Приносим Вам прибыль</h2>
                        <p>Основа нашей работы - это персональный подход к каждой компании и сотрудникам работающей в
                            ней.</p>
                    </ResultItem>
                </ResultBlock>
                <ResultBlock>
                    <ResultImag>
                        <img src={handshake} alt="handshake"/>
                    </ResultImag>
                    <ResultItem>
                        <h2>Приносим Вам прибыль</h2>
                        <p>Любая выполняемая задача или проект - будь небольшая правка на сайте или ежегодный план
                            лидогенерации - организуется с учетом выполнения всех оговоренных сроков и высоким качеством
                            работ и обслуживания.</p>
                    </ResultItem>
                </ResultBlock>
            </ResultContainer>


        </OurMissionWrap>
    );
};
