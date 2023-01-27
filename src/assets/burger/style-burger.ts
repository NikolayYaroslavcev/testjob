import styled from 'styled-components';
import {PropsBurger} from './burger';
export const Burger = styled.button<PropsBurger>`
  display: none;
}

@media (max-width: 768.98px) {
  display: block;
  position: relative;
  width: 30px;
  flex: 0 0 25px;
  height: 18px;
  cursor: pointer;
  z-index: 5;

  span,
  &::before,
  &::after {
    content: "";
    transition: all 0.3s ease 0s;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background: #363636;

    @media (max-width: 768.98px) {
      background: #363636;
    }
  }

  &::before {
    top: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(-45deg)'};
  }

  &::after {
    bottom: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(45deg)'};
  }

  span {
    top: calc(50% - 1px);
    transform: ${({isOpenBurger}) => isOpenBurger && 'scale(0)'};
  }
}
`
