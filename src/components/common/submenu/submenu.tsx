import React, { useState } from "react";
import { Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { SubMenu } = Menu;

// Define Types for Props
export interface CustomSubMenuProps {
  titleLeft: React.ReactNode;
  titleRight: React.ReactNode;
  items: React.ReactNode[];
  onTitleClick: (itemKey: string) => void;
  itemKey: string;
}

const SubmenuStyle = styled(SubMenu)`
  .custom-submenu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
`;

// Custom SubMenu Component
const CustomSubMenu: React.FC<CustomSubMenuProps> = ({
  titleLeft,
  titleRight,
  items,
  onTitleClick,
  itemKey,
}) => {
  const customTitle = (
    <div className="custom-submenu-title">
      <div>{titleLeft}</div>
      <div>{titleRight}</div>
    </div>
  );
  return (
    <SubmenuStyle key={itemKey} x-data-key={itemKey} title={customTitle} onTitleClick={() => onTitleClick(itemKey)}>
      {items.map((item, index) => (
        <Menu.Item key={`${itemKey}${String(index)}`}>
            {item} - {`${itemKey}${String(index)}`}
        </Menu.Item>
      ))}
    </SubmenuStyle>
  );
};

export default CustomSubMenu;
