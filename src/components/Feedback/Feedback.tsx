import { Component } from "react";
import { IFeedbackProps, ITotalPersentProps } from "../../types/data";

import { Section } from "../Section";
import { FeedbackButtons } from "../FeedbackButtons";
import { Statistics } from "../Statistics";
import { Notification } from "../Notification";
import { Image } from "./Feedback.styled";
import image from "../../image/feedback-photo.jpg";

export class Feedback extends Component<{}, IFeedbackProps> {
  state = {
    typeScript: 0,
    both: 0,
    javaScript: 0,
  };

  componentDidMount() {
    const prevFeedback: string | null = localStorage.getItem("feedback");

    if (typeof prevFeedback === "string") {
      const prevParsedFeedback: IFeedbackProps = JSON.parse(prevFeedback);
      this.setState(prevParsedFeedback);
    }
  }

  componentDidUpdate(_: any, prevState: IFeedbackProps) {
    const nextState: IFeedbackProps = this.state;

    if (nextState !== prevState) {
      localStorage.setItem("feedback", JSON.stringify(nextState));
    }
  }

  handleIncrement = (btnName: keyof IFeedbackProps): void => {
    this.setState((prevState: IFeedbackProps) => ({
      ...prevState,
      [btnName]: prevState[btnName] + 1,
    }));
  };

  countTotalFeedback = (): number => {
    const commonValues: number[] = Object.values(this.state);
    return commonValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countTotalPercentage(): ITotalPersentProps {
    const typeScriptFeedback: number = this.state.typeScript;
    const javaScriptFeedback: number = this.state.javaScript;

    let typeScriptPersent: number = 0;
    let javaScriptPersent: number = 0;

    if (typeScriptFeedback !== 0) {
      typeScriptPersent = Math.trunc(
        (typeScriptFeedback * 100) / (typeScriptFeedback + javaScriptFeedback)
      );
    }
    if (javaScriptFeedback !== 0) {
      javaScriptPersent = 100 - typeScriptPersent;
    }

    return { typeScriptPersent, javaScriptPersent };
  }

  render() {
    const buttonsNames: (keyof IFeedbackProps)[] | any = Object.keys(
      this.state
    );
    const totalFeedback: number = this.countTotalFeedback();
    const totalPercent: ITotalPersentProps = this.countTotalPercentage();

    return (
      <>
        <Section title="Please leave your feedback">
          <Image image={image} />
          <FeedbackButtons
            buttons={buttonsNames}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              statistics={this.state}
              total={totalFeedback}
              totalPercent={totalPercent}
            />
          ) : (
            <Notification message="There is no feedback yet... please make !" />
          )}
        </Section>
      </>
    );
  }
}
