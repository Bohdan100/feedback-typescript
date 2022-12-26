import React, { Component } from "react";

import { IFeedbackProps } from "../../types/data";

import { Section } from "../Section";
import { FeedbackOptions } from "../FeedbackOptions";
import { Statistics } from "../Statistics";
import { Notification } from "../Notification";

export class Feedback extends Component<
  {},
  IFeedbackProps
> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    const prevFeedback: any =
      localStorage.getItem("feedback");
    const prevParsedFeedback: any =
      JSON.parse(prevFeedback);

    if (prevParsedFeedback) {
      this.setState(prevParsedFeedback);
    }
  }

  componentDidUpdate(_: any, prevState: any) {
    const nextState = this.state;

    if (nextState !== prevState) {
      localStorage.setItem(
        "feedback",
        JSON.stringify(nextState)
      );
    }
  }

  handleIncrement = (name: string): void => {
    this.setState((prevState: any) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = (): number => {
    const commonValues: number[] = Object.values(
      this.state
    );
    return commonValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage(): number {
    const positiveFeedback: number =
      this.state.good;
    const negativeFeedback: number =
      this.state.neutral + this.state.bad;

    const finallPersentage: number =
      (positiveFeedback * 100) /
      (positiveFeedback + negativeFeedback);

    return (
      Math.trunc(finallPersentage * 100) / 100
    );
  }

  render() {
    const buttonsNames: string[] = Object.keys(
      this.state
    );
    const totalFeedback: number =
      this.countTotalFeedback();
    const PositiveFeedbackPercentage: number =
      this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonsNames}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={
                PositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback..." />
          )}
        </Section>
      </div>
    );
  }
}
