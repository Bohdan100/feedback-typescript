import styled from "styled-components";

export const FeedbackButton = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 12px 24px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${(props) => props.theme.borders.none};
  border-radius: ${(props) =>
    props.theme.radius.normal};

  font-weight: ${(props) =>
    props.theme.fontWeights.middle};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    `${getRangomColor()}`};

  &:hover,
  &:focus {
    scale: 120%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-right: 0;
  }
`;

// Функция случайного цвета
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
