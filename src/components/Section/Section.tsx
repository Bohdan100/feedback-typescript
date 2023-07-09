import { FC, ReactNode } from "react";
import { Title, SectionWrap } from "./Section.styled";

export const Section: FC<{
  title: string;
  children?: ReactNode;
}> = ({ title, children }) => (
  <SectionWrap>
    <Title>{title}</Title>
    {children}
  </SectionWrap>
);
