import React from "react";

import { FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions: React.FC<{
  options: Array<string>;
  onLeaveFeedback: (option: string) => void;
}> = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <FeedbackButton
        key={option}
        type="button"
        value={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </>
);
