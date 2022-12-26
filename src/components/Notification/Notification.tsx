import { NotificationText } from "./Notification.styled";

export const Notification: React.FC<{
  message: string;
}> = ({ message }): any => (
  <NotificationText>{message}</NotificationText>
);
