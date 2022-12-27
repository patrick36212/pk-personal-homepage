import styled, {css} from "styled-components";

export const DescriptionParagraph = styled.p`
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  margin: 22px 0 32px;
  
  ${({projectDescription}) => projectDescription && css`
    margin: 24px 0;
  `}

  ${({projectLink}) => projectLink && css`
    min-width: 68px;
    margin: 0;
  `}

  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 24px;
  }
`;

export const AdditionalInfo = styled.span`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;