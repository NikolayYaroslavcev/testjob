import styled from 'styled-components';

export const SliderWrap = styled.div`
  margin-bottom: 90px;
  background: #E9FCE5;
  @media (max-width: 1024.98px) {
    margin-bottom: 30px;
  }

  h2 {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
    padding: 20px 0 49px 10px;
    @media (max-width: 1024.98px) {
      padding: 20px 0 20px 10px;
    }
    @media (max-width: 768.98px) {
      padding: 10px 0 10px 10px;
    }
  }
`
export const SliderFoolBlock = styled.div`
  max-width: 1053px;
  margin: 0 auto;
  @media (max-width: 1024.98px) {
    padding: 22px 74px 10px 74px;
  }
  @media (max-width: 425.98px) {
    padding: 10px;
  }
`
export const SliderTextWrap = styled.div`
  font-weight: 600;
  color: #000000;
  text-align: center;
  transition: all 0.3s;

  p {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 33px;
    text-align: start;
    @media (max-width: 425.98px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 17px;
    line-height: 21px;
  }
`

// export const SliderButton = styled.div`
//
// `
