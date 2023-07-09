export interface IFeedbackProps {
  typeScript: number;
  both: number;
  javaScript: number;
}

export interface ITotalPersentProps {
  typeScriptPersent: number;
  javaScriptPersent: number;
}

export interface IStatisticsProps {
  statistics: IFeedbackProps;
  totalPercent: ITotalPersentProps;
  total: number;
}
