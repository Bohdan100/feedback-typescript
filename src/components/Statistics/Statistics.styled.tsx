import styled from "styled-components";

export const StatisticsList = styled.ul`
  margin-left: 20px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) =>
    props.theme.fontSizes.s};
  line-height: ${(props) =>
    props.theme.lineHeights.heading};
`;

export const StatisticsText = styled.p`
  margin-top: 30px;
  margin-bottom: 0;
  margin-left: 60px;

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) =>
    props.theme.fontSizes.s};
  line-height: ${(props) =>
    props.theme.lineHeights.heading};
`;
