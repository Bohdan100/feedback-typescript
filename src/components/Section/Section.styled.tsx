import styled from "styled-components";

export const SectionContainer = styled.div`
  list-style: none;
`;

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) =>
    props.theme.fontSizes.l};
  line-height: ${(props) =>
    props.theme.lineHeights.body};
  font-weight: ${(props) =>
    props.theme.fontWeights.bold};
  text-align: center;
`;
