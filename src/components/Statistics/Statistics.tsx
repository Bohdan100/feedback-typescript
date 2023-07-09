import { FC } from "react";
import { nanoid } from "nanoid";

import { IStatisticsProps } from "../../types/data";

import {
  StatisticsList,
  StatisticsItem,
  StatisticsPersentList,
} from "./Statistics.styled";

export const Statistics: FC<IStatisticsProps> = ({
  statistics,
  total,
  totalPercent,
}) => {
  const { typeScript, both, javaScript } = statistics;
  const { typeScriptPersent, javaScriptPersent } = totalPercent;
  return (
    <>
      <StatisticsList>
        <StatisticsItem key={nanoid(5)}>
          TypeScript: {typeScript}
        </StatisticsItem>
        <StatisticsItem key={nanoid(5)}>Both variants: {both}</StatisticsItem>
        <StatisticsItem key={nanoid(5)}>
          JavaScript: {javaScript}
        </StatisticsItem>
      </StatisticsList>

      <StatisticsPersentList>
        <StatisticsItem>TypeScript: {typeScriptPersent}%</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>JavaScript: {javaScriptPersent}%</StatisticsItem>
      </StatisticsPersentList>
    </>
  );
};
