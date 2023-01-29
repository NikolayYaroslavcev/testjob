import styled from 'styled-components';


export const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  padding: 30px;
  //scale: 0;
`
export const PopupWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  max-width: 450px;
  transition: all 0.3s;
`
export const DialogButton = styled.button`
  background: #67b07b;
  border-radius: 26px;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 11px 30px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-self: center;
  width: 100%;

  :hover {
    background: #3D5F47;
  }


`
export const ButtonClose = styled.span`
  align-self: end;
  cursor: pointer;
`

export const DialogBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  img {
    background: #67b07b;
  }


  div {
    font-weight: 800;
    font-size: 20px;
  }

  p {
    font-size: 17px;
    line-height: 1.4;

  }

  input {
    max-width: 100%;
    margin-bottom: 20px;
    padding: 7px 0;
    height: auto;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-width: 0 0 2px;
    border-style: solid;
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    background-image: none;
    border-bottom: 2px solid #282c34;

    ::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }


`



