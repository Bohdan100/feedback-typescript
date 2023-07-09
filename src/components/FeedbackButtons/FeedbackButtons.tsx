import { FC } from "react";
import { IFeedbackProps } from "../../types/data";

import {
  FeedbackBtnWrap,
  TSButton,
  BothButton,
  JSButton,
  BothButtonText,
} from "./FeedbackButtons.styled";

export const FeedbackButtons: FC<{
  buttons: Array<keyof IFeedbackProps>;
  onLeaveFeedback: (btnName: keyof IFeedbackProps) => void;
}> = ({ buttons, onLeaveFeedback }) => {
  return (
    <FeedbackBtnWrap>
      <TSButton
        key={buttons[0]}
        value={buttons[0]}
        type="button"
        onClick={() => onLeaveFeedback(buttons[0])}
      >
        TypeScript
      </TSButton>
      <BothButton
        key={buttons[1]}
        value={buttons[1]}
        type="button"
        onClick={() => onLeaveFeedback(buttons[1])}
      >
        Both <BothButtonText>variants</BothButtonText>
      </BothButton>
      <JSButton
        key={buttons[2]}
        type="button"
        value={buttons[2]}
        onClick={() => onLeaveFeedback(buttons[2])}
      >
        JavaScript
      </JSButton>
    </FeedbackBtnWrap>
  );
};
