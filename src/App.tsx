import { FC } from "react";
import { Feedback } from "./components/Feedback";
import { AppContainer } from "./App.styled";

const App: FC = () => {
  return (
    <AppContainer>
      <Feedback />
    </AppContainer>
  );
};

export default App;
