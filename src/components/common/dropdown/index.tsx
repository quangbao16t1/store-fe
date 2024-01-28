import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import * as React from "react";
import styled from "styled-components";

interface DropdownCustomProps {}

const items: MenuProps["items"] = [];

const DropdownCustom: React.FunctionComponent<DropdownCustomProps> = () => {

  const DropdownStyle = styled(Dropdown)`
    padding: unset;
  `;

  const DivDropDown = styled.div`
    width: calc(100vw - 210px);
    height: 500px;
    background-color: #001529;
    border: 1px solid #001529;
    border-radius: 10px;
    opacity: 0.8;
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 50px;
  `;

  const ButtonStyle = styled(Button)`
    background-color: #334862 !important;
    border: 3px solid rgba(174, 187, 255, 0.2);
    box-shadow: 0px 4px 8px rgba(6, 15, 0, 0.48);
    color: #989aaf;
    &:hover {
      background-color: #f0f0f0 !important;
      color: #989aaf !important;
    }
  `;

  const ItemDropdown = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 500;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    text-align: center;
  `;
  return (
    <>
      <DropdownStyle
        menu={{ items }}
        trigger={["click"]}
        dropdownRender={() => (
          <DivDropDown>
            <ItemDropdown>Danh mục</ItemDropdown>
            <ItemDropdown>Danh mục</ItemDropdown>
            <ItemDropdown>Danh mục</ItemDropdown>
          </DivDropDown>
        )}
      >
        <ButtonStyle size="large" icon={<MenuUnfoldOutlined />}>
          Danh Mục
        </ButtonStyle>
      </DropdownStyle>
    </>
  );
};

export default DropdownCustom;
