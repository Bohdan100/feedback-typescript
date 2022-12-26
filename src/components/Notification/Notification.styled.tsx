import styled from "styled-components";

export const NotificationText = styled.p`
  color: ${(props) => props.theme.colors.green};
  font-size: ${(props) =>
    props.theme.fontSizes.s};
  line-height: ${(props) =>
    props.theme.lineHeights.heading};
`;
