import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col } from "antd";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
const AppLayout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Menu mode="horizontal">
        <Menu.Item>
          <h1>
            <Link href="/">
              <a>Campus+</a>
            </Link>
          </h1>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item style={{ float: "right" }}>
          <Link href="/login">
            <a>
              <Button>로그인</Button>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: "right" }}>
          <Link href="/posts/first-post">
            <a>
              <Button>모임개설하기</Button>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
