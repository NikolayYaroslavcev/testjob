import styled from 'styled-components';


export const FooterWrap = styled.footer`
  background-color: #3D5F47;
  overflow-x: hidden ;
  
`
export const FooterTop = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  @media (max-width: 425.98px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    display: flex;
    align-items: flex-end;
    padding: 113px 0 106px 0;
    @media (max-width: 768.98px) {
      padding: 30px 0;
    }
    @media (max-width: 425.98px) {
      padding: 10px 0;
    }
  }
`
export const FooterIcons = styled.div`
  display: flex;
  column-gap: 11px;
  font-size: 20px;
  color: #fff;
  align-items: end;
  margin-bottom: 48px;
  @media (max-width: 425.98px) {
    font-size: 15px;
    margin-bottom: 15px;
  }

  a {
    border-radius: 50%;
    border: 8px solid #FFFFFF;
    padding: 5px;
    transition: all .2s ease-in;
    &:hover {
      transform: scale(1.05);
    }
  }


`

export const FooterBottom = styled.div`
  padding: 56px 0 54px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #D9D9D9;;
  color: #FFFFFF;
  column-gap: 15px;
  @media (max-width: 1024.98px) {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
  @media (max-width: 768.98px) {
    padding: 30px 0 15px 0;
  }
  @media (max-width: 320.98px) {
    padding: 15px 0 15px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media (max-width: 1024.98px) {
      display: flex;
      flex-direction: row;
      column-gap: 15px;
    }
    @media (max-width: 768.98px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    @media (max-width: 425.98px) {
      row-gap: 10px;
      font-size: 14px;
    }
    @media (max-width: 320.98px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  img {
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    background-color: rgba(249 247 247 / 20%);
    @media (max-width: 1024.98px) {
      display: none;
    }
  }
`
