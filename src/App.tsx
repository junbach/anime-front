import "./App.css";

import { SendOutlined } from "@ant-design/icons";
import { Button, Divider, Layout, message, notification } from "antd";
import { PureComponent, ReactNode } from "react";

import HeaderContainer from "./components/Header";
import SearchInput from "./components/Header/SearchInput";
import UserLoginButton from "./components/Header/UserLoginButton";
import UserLogoutButton from "./components/Header/UserLogoutButton";
import logo from "./logo.svg";

const { Footer, Content } = Layout;
const sendMessage = () =>
  notification.info({
    message: "Hello, world!",
    description: "This is a greeting message sent from the moon",
  });

interface AppState {
  user?: string;
}

export default class App extends PureComponent<Record<string, unknown>, AppState> {
  state: AppState = {
    user: undefined,
  };
  private userLogin = (username: string) => {
    this.setState({ user: username });
    message.success(`Login successfully: ${username}`);
  };
  private userLogout = () => {
    this.setState({ user: undefined });
    message.warn("Logout successfully");
  };
  render(): ReactNode {
    const { user } = this.state;
    const userContent = this.state.user ? (
      <UserLogoutButton user={user ?? ""} logout={this.userLogout} />
    ) : (
      <UserLoginButton onLogin={this.userLogin} />
    );
    return (
      <Layout className={"appLayout"}>
        <HeaderContainer>
          <SearchInput />
          {userContent}
        </HeaderContainer>
        <Content className="appContent">
          <img src={logo} className="appLogo" alt="logo" />
          <Divider>Main Content</Divider>
          <Button onClick={sendMessage} icon={<SendOutlined />}>
            Send me a message
          </Button>
        </Content>
        <Footer className="appFooter">Footer</Footer>
      </Layout>
    );
  }
}
