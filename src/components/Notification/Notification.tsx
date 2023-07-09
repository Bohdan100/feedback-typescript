import { FC } from "react";
import { NotificationText } from "./Notification.styled";

export const Notification: FC<{
  message: string;
}> = ({ message }) => <NotificationText>{message}</NotificationText>;
