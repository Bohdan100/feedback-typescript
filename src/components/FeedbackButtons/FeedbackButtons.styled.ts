import styled from "styled-components";

export const FeedbackBtnWrap = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 7px;

  @media screen and (min-width: 767px) {
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    gap: 32px;
  }
`;

const Button = styled.button`
  width: 95px;
  padding: 12px 8px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${(props) => props.theme.borders.none};
  border-radius: ${(props) => props.theme.radius.normal};

  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.heading};
  font-weight: ${(props) => props.theme.fontWeights.middle};
  color: ${(props) => props.theme.colors.white};
  transition: scale 330ms linear 40ms;

  &:hover,
  &:focus {
    scale: 105%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: scale 330ms linear 40ms;
  }

  @media screen and (min-width: 767px) {
    width: 150px;
    padding: 12px 24px;
    line-height: ${(props) => props.theme.lineHeights.body};
  }

  @media screen and (min-width: 1024px) {
    width: 170px;
    padding: 12px 22px;
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const TSButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.blue};
`;

export const JSButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const BothButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.darkgreen};
`;

export const BothButtonText = styled.span`
  display: none;
  @media screen and (min-width: 767px) {
    display: inline-block;
  }
`;
