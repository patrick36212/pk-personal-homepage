import {ReactComponent as ThemeIcon} from "./themeIcon.svg";
import styled, {css} from "styled-components";

export const ThemeSwitchButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const ThemeInfo = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
  color: ${({theme}) => theme.colors.secondaryFont};

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const ThemeSwitchBody = styled.button`
  display: flex;
  width: 48px;
  height: 26px;
  margin-left: 12px;
  border-radius: 30px;
  padding: 0;
  background: ${({theme}) => theme.colors.switchBackground};
  border: 1px solid ${({theme}) => theme.colors.secondaryFont};
  box-shadow: 0px -2px 50px ${({theme}) => theme.colors.shadow},
  0px 16px 58px ${({theme}) => theme.colors.shadow};
  cursor: pointer;
`;

export const ThemeIconBody = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 2px;
  background: ${({theme}) => theme.colors.secondaryFont};
  transition: .5s ease;

  ${({darkMode}) => darkMode && css`
    transform: translateX(22px);
  `}
`;

export const Icon = styled(ThemeIcon)`
  fill: ${({theme}) => theme.colors.mainBackground};
`;