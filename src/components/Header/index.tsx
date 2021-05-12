import { Layout } from "antd";
import React, { PureComponent, ReactNode } from "react";

import { siteName } from "../../assets/appConfig.json";
import styles from "./header.module.css";

interface HeaderProps {
  hasLogoIcon: boolean;
}

const { Header } = Layout;
class HeaderContainer extends PureComponent<HeaderProps> {
  static defaultProps: HeaderProps = {
    hasLogoIcon: true,
  };

  render(): ReactNode {
    const { children } = this.props;
    return (
      <Header className={styles.appHeader}>
        <div className={styles.logoText}> {siteName} </div>
        <div className={styles.headerContent}>{children}</div>
      </Header>
    );
  }
}

export default HeaderContainer;
