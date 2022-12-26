export interface IFeedbackProps {
  good: number;
  neutral: number;
  bad: number;
}

export interface IStatisticsProps
  extends IFeedbackProps {
  total: number;
  positivePercentage: number;
}
