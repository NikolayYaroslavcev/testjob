import styled from 'styled-components';

export const SliderResponsWrapper = styled.div`

  background: #E9FCE5;
  h2 {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 14px;
    padding-top: 14px;
    padding-left: 10px;
  }
`
export const SliderWrap = styled.div`
  border-top: 2px solid #6EEC4E;
  border-bottom: 2px solid #6EEC4E;
  padding: 83px 0;
  overflow-x:hidden;
  margin-bottom: 30px;
`
export const SliderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 20px;

  img {
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      transform: translateX(5px);
    }
  }

  img:nth-child(1) {
    :hover {
      transform: translateX(-5px);
    }
  }


`

