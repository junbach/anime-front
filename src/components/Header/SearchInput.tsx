import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { PureComponent, ReactNode } from "react";

import styles from "./header.module.css";

interface SearchInputProps {
  placeholderText?: string;
}
export default class SearchInput extends PureComponent<SearchInputProps> {
  render(): ReactNode {
    const { placeholderText } = this.props;
    return (
      <Input placeholder={placeholderText ?? "Search data"} suffix={<SearchOutlined className={styles.searchIcon} />} />
    );
  }
}
