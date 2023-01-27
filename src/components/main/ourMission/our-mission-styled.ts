import styled from 'styled-components';

export const OurMissionWrap = styled.section`
  padding: 22px 74px 87px 74px;
  display: flex;
  column-gap: 178px;
  @media (max-width: 1024.98px) {
    flex-wrap: wrap;
  }
  @media (max-width: 425.98px) {
    padding: 10px ;
  }

`
export const MissionContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  row-gap: 49px;
  font-weight: 600;
  @media (max-width: 1024.98px) {
    row-gap: 20px;
  }

  h2 {
    padding: 22px 0 14px 0;
    font-size: 13px;
    line-height: 16px;
    color: #6F6C6C;
  }

  p {
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }
`
export const OurContainer = styled.div`
  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #6F6C6C;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  flex: 1 1 50%;
  justify-content: center;
  @media (max-width: 1024.98px) {
    padding-top: 30px;
  }

  h1 {
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    border-left: 2px solid #5DB447;
    padding-left: 17px;
    @media (max-width: 1440.98px) {
      font-size: 35px;
    }
    
    @media (max-width: 425.98px) {
      font-size: 25px;
    }
    @media (max-width: 320.98px) {
      font-size: 17px;
    }
  }
`

export const ResultBlock = styled.div`
  display: flex;
  column-gap: 37px;
  @media (max-width: 768.98px) {
    column-gap: 15px;
  }
  
`
export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  @media (max-width: 768.98px) {
    row-gap: 15px;
  }

  h2 {
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }
`
export const ResultImag = styled.div`
  flex: 0 0 62px;
  align-self: center;
`

