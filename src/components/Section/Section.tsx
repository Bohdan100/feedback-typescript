import {
  Title,
  SectionContainer,
} from "./Section.styled";

export const Section: React.FC<{
  title: string;
  children?: any;
}> = ({ title, children }): any => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);
