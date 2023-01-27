import styled from 'styled-components';
import {PropsImageType} from '../../assets/ImegeWrap';



export const StyledContainer = styled.div`
  max-width: 1730px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 15px;
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  @media (max-width: 768.98px) {
    justify-content: stretch;
  }
  
  
`
export const HeaderStyle = styled.div`
  padding: 32px 0;
  min-height: 58px;
  margin-bottom: 50px;
  box-shadow: 0 10px 10px rgba(10, 91, 8, 0.31);
  @media (max-width: 768.98px) {
    padding: 15px 0;
  }
`

export const HeaderImage = styled.div<PropsImageType>`
  display: flex;
  position: relative;
 
  //flex: 0 0 50%;
  text-align: center;
  max-width: ${({width}) => width || '96px'};
  max-height: ${({height}) => height || '96px'};
  max-height: ${({height}) => height || '96px'};
  border-radius: ${({borderRadius}) => borderRadius || '100%'};
  transition: all 0.3s;
  
  

  :hover {
    scale: ${({hover}) => hover ? '1.1' : '1'};
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: ${({borderRadius}) => borderRadius || '0'};
    justify-content: center;
      //cursor: ${({cursor}) => cursor || 'auto'};
    cursor: pointer;
  }
`

export const WrapperImage = styled.div<PropsImageType>`
  text-align: center;
  width: ${({width}) => width || '96px'};
  height: ${({height}) => height || '96px'};
  //border-radius: ${({borderRadius}) => borderRadius || '100%'};
  transition: all 0.3s;
  
  :hover {
    scale: ${({hover}) => hover ? '1.1' : '1'};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    justify-content: center;
    cursor: ${({cursor}) => cursor || 'auto'};

  }
`
export const Button = styled.button`
  background: #5DB447;
  border-radius: 26px;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 11px 30px;
  display: flex;
  justify-content: center;
  flex: 0 0 230px;
  transition: all 0.3s;
  :hover {
    background: #3D5F47;
  }
  @media (max-width: 1181.98px) {
    padding: 11px 20px;
    flex: 0 0 210px;
  }
  @media (max-width: 486.98px) {
    font-size: 12px;
    padding: 8px 5px;
    flex: 0 0 140px;
  }
`
export const Menu = styled.menu`
  li {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    @media (max-width: 858.98px) {
      font-size: 18px;
    }
  }
  @media (max-width: 768.98px) {
    flex: 1 1 auto;
  }
`


export const SubMenu = styled.ul`
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease 0s;
  transform: translate(0px, 10px);
  pointer-events: none;
  min-width: 170px;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 5;
  background: #FFFFFF;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  a {
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    color: #000000;
    position: relative;
    padding-left: 30px;

    :before {
      content: '';
      width: 10px;
      height: 10px;
      background: #79E35E;
      position: absolute;
      top: 2px;
      left: 0;
      border-radius: 100%;
    }

    :hover {
      color: #79E35E;
    }
  }
`
export const MenuSubItem = styled.li`

`
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0 5px 10px;
  position: relative;

  :before {
    content: '';
    width: 2px;
    height: 20px;
    background: #6EEC4E;
    position: absolute;
    top: 8px;
    left: 0;
    border-radius: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

  }

  :hover {
    :before {
      opacity: 1;
      visibility: visible;
    }

    ${SubMenu} {
      opacity: 1;
      visibility: visible;
      transform: translate(0px, 0px);
      pointer-events: auto;

    }
  }
`
