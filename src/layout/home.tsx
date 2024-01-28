import * as React from "react";
import { Breadcrumb, Layout } from "antd";
import SidebarComponent from "./sidebar";
import styled from "styled-components";
const { Content } = Layout;

interface MainBodyProps {}

const MainBody: React.FunctionComponent<MainBodyProps> = () => {
  const ContainerMain = styled(Content)`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 100px;
    height: 100vh;
  `;

  const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0 24px;
  `;

  const ContentStyled = styled(Content)`
    display: flex;
    padding: 24px 24px;
    border-radius: 10px;
    background-color: yellow;
  `;
  return (
    <ContainerMain>
      <SidebarComponent />
      <LayoutStyled>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <ContentStyled>Content</ContentStyled>
      </LayoutStyled>
    </ContainerMain>
  );
};

export default MainBody;
