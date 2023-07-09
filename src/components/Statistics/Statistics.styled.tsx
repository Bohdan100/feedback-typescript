import styled from "styled-components";

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    justify-content: center;
    gap: 80px;
  }

  @media screen and (min-width: 1024px) {
    gap: 90px;
  }
`;

export const StatisticsPersentList = styled(StatisticsList)`
  @media screen and (min-width: 767px) {
    gap: 90px;
  }

  @media screen and (min-width: 1024px) {
    gap: 105px;
  }
`;

export const StatisticsItem = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.heading};
  font-weight: ${(props) => props.theme.fontWeights.middle};

  transition: scale 330ms linear 40ms;

  &:hover,
  &:focus {
    scale: 101%;
    color: ${(props) => props.theme.colors.darkgreen};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: scale 330ms linear 40ms;
  }

  @media screen and (min-width: 767px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1024px) {
    line-height: ${(props) => props.theme.lineHeights.body};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
