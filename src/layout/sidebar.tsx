import * as React from "react";
import { Menu, Layout, Collapse, Divider, List } from "antd";
import styled from "styled-components";
import CustomSubMenu, { CustomSubMenuProps } from "../components/common/submenu/submenu";
import { useState } from "react";
const { Sider } = Layout;

const SiderStyled = styled(Sider)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  height: 100vh;
  padding: 0 20px;
`;

const CollapseSider = styled(Collapse)`
  border-radius: unset;
  border: unset;
  .ant-collapse-item:last-child {
    .ant-collapse-header {
      border-radius: unset !important;
    }
  }
`;

const TitleMenu = styled.p`
  font-weight: 700;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  text-align: center;
`;
const DividerStyle = styled(Divider)`
  height: 1px;
  background-color: #ee8f4b !important;
  margin: unset;
`;

const MenuStyled = styled(Menu)`
  width: 100% !important;
  height: 100% !important;
  background-color: rgb(0, 128, 0) !important;
`;

interface SidebarComponentProps {}

const SidebarComponent: React.FC<SidebarComponentProps> = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([""]);

  const handleTitleClick = (itemKey: string) => {
    console.log(555, itemKey);

    setOpenKeys(
      openKeys.includes(itemKey)
        ? [...openKeys.filter((item) => item !== itemKey)]
        : [itemKey, ...openKeys]
    );
    console.log(444, openKeys);
  };

  const itemsSubmenus: CustomSubMenuProps[] = [
    {
      onTitleClick: () => handleTitleClick("1"),
      titleLeft: "Giải trí",
      titleRight: "(45)",
      items: ["Option 1", "Option 2"],
      itemKey: "1",
    },
    {
      onTitleClick: () => handleTitleClick("2"),
      titleLeft: "Tài khoản & nâng cấp",
      titleRight: "(45)",
      items: ["Option 1", "Option 2"],
      itemKey: "2",
    },
    {
      onTitleClick: () => handleTitleClick("3"),
      titleLeft: "Làm việc",
      titleRight: "(45)",
      items: ["Option 1", "Option 2"],
      itemKey: "3",
    },
    {
      onTitleClick: () => handleTitleClick("4"),
      titleLeft: "Học tập",
      titleRight: "(45)",
      items: ["Option 1", "Option 2"],
      itemKey: "4",
    },
  ];

  return (
    <>
      <SiderStyled>
        <TitleMenu>Danh mục sản phẩm</TitleMenu>
        <DividerStyle />

        <MenuStyled
          // openKeys={["1"]}
          defaultOpenKeys={["1"]}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          triggerSubMenuAction={"click"}
        >
          {itemsSubmenus.map((item, index) => (
            <CustomSubMenu
              { ...item }
              // onTitleClick={() => null}
            />
          ))}
        </MenuStyled>
      </SiderStyled>
    </>
  );
};

export default SidebarComponent;
