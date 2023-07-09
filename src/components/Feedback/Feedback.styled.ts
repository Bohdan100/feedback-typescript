import styled from "styled-components";

export const Image = styled.div<{ image: string }>`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 150px;
  background-color: ${(p) => p.theme.colors.indigo};
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center top;

  @media screen and (min-width: 767px) {
    width: 510px;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 350px;
  }
`;
