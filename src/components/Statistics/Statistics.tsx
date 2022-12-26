import React from "react";
import { nanoid } from "nanoid";

import { IStatisticsProps } from "../../types/data";

import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from "./Statistics.styled";

export const Statistics: React.FC<
  IStatisticsProps
> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}): any => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem key={nanoid(5)}>
          good: {good}
        </StatisticsItem>
        <StatisticsItem key={nanoid(5)}>
          neutral: {neutral}
        </StatisticsItem>
        <StatisticsItem key={nanoid(5)}>
          bad: {bad}
        </StatisticsItem>
      </StatisticsList>
      <StatisticsText>
        Total: {total}
      </StatisticsText>
      <StatisticsText>
        Positive feedback: {positivePercentage}%
        {/* {positivePercentage.toFixed(0) - string - number */}
      </StatisticsText>
    </>
  );
};
