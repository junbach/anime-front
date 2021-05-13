import { Button } from "antd";
import { PureComponent, ReactNode } from "react";

interface UserLogoutButtonProps {
  user: string;
  logout: () => void;
}

export default class UserLogoutButton extends PureComponent<UserLogoutButtonProps> {
  render(): ReactNode {
    return <Button>Hello, {this.props.user}</Button>;
  }
}
