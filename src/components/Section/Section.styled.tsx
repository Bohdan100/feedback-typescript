import styled from "styled-components";

export const SectionWrap = styled.div`
  list-style: none;
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;

  color: ${(props) => props.theme.colors.darkgreen};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;

  animation: changeMotoText 3s infinite alternate;

  @keyframes changeMotoText {
    70.1% {
      color: ${(props) => props.theme.colors.darkgreen};
      text-shadow: 0 0 10px #cca60e, 0 0 20px #cca60e, 0 0 40px #ff6b08;
    }
    100% {
      color: ${(props) => props.theme.colors.darkgreen};
      text-shadow: 0 0 10px #cca60e, 0 0 20px #cca60e, 0 0 40px #ff6b08;
    }
  }

  @media screen and (min-width: 767px) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;
