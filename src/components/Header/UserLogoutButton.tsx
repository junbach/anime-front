import { Button } from "antd";
import { PureComponent } from "react";

interface UserLogoutButtonProps {
  user: string;
  logout: () => void;
}

export default class UserLogoutButton extends PureComponent<UserLogoutButtonProps> {
  render() {
    return <Button>Hello, {this.props.user}</Button>;
  }
}
