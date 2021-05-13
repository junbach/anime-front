import "./App.css";

import { Layout, message } from "antd";
import { PureComponent, ReactNode } from "react";

import { BodyContent } from "./components/BodyContent";
import HeaderContainer from "./components/Header";
import SearchInput from "./components/Header/SearchInput";
import UserLoginButton from "./components/Header/UserLoginButton";

const { Footer } = Layout;

interface AppState {
  user?: string;
}

export default class App extends PureComponent {
  state: AppState = {
    user: undefined,
  };
  private userLogin = (username: string) => {
    this.setState({ user: username });
    message.success(`Login successfully: ${username}`);
  };

  render(): ReactNode {
    return (
      <Layout>
        <HeaderContainer>
          <SearchInput placeholderText={"search anime"} />
          <UserLoginButton onLogin={this.userLogin} />
        </HeaderContainer>
        <BodyContent showLogo />
        <Footer className="appFooter">Footer</Footer>
      </Layout>
    );
  }
}
