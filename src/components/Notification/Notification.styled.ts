import styled from "styled-components";

export const NotificationText = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.s};
  font-weight: ${(props) => props.theme.fontWeights.middle};
  line-height: ${(props) => props.theme.lineHeights.heading};

  @media screen and (min-width: 767px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1024px) {
    line-height: ${(props) => props.theme.lineHeights.body};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
