import * as React from "react";
import styled from "styled-components";
import {
  Button,
  Image,
  Input,
  Layout,
  Divider,
  MenuProps,
  Dropdown,
  Space,
} from "antd";
import logo from "../assets/logo.png";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import iconGoogle from "../assets/icons/icon-google.svg";
import iconHotMail from "../assets/icons/icon-hotmail.svg";
import iconYoutube from "../assets/icons/icon-youtube.svg";
import iconMicrosoft from "../assets/icons/icon-microsoft.svg";
import iconGmail from "../assets/icons/icon-gmail.svg";
import DropdownCustom from "../components/common/dropdown";

const { Header } = Layout;
const { Search } = Input;

interface HeaderProps {}

const HeaderComponent: React.FunctionComponent<HeaderProps> = () => {
  const HeaderStyle = styled(Header)`
    display: flex;
    height: 200px;
    width: 100%;
    padding: 20px 100px;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  `;

  const HeaderTop = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;
    flex-grow: 4 !important;
  `;

  const Banner = styled(HeaderTop)``;

  const GroupButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
  `;

  const SearchStyle = styled(Search)`
    height: 40px !important;
  `;

  const ImgLogo = styled(Image)`
    height: 100px !important;
    min-width: 100px;
  `;

  const IconStyle = styled(Image)`
    height: 24px !important;
    width: 24px !important;
    display: flex;
    align-items: center;
  `;

  const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #989aaf;
    font-weight: 500;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    text-align: center;
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

  const DividerStyled = styled(Divider)`
    width: 100%;
    height: 1px;
    background-color: #f0f0f0 !important;
    flex-grow: 1 !important;
    margin: 0 !important;
  `;

  const ItemBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 5px;
    align-items: center;
  `;
  return (
    <>
      <HeaderStyle>
        <HeaderTop>
          <ImgLogo src={logo} />
          <SearchStyle size="large" />
          <GroupButton>
            <ButtonStyle icon={<UserOutlined />} size="large">
              Đăng nhập
            </ButtonStyle>
            <ButtonStyle icon={<ShoppingCartOutlined />} size="large">
              Giỏ hàng
            </ButtonStyle>
          </GroupButton>
        </HeaderTop>
        <DividerStyled />
        <Banner>
          <ItemBanner>
            <DropdownCustom />
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconGoogle} />
            <LinkStyled>Google</LinkStyled>
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconYoutube} />
            <LinkStyled>Adobe</LinkStyled>
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconGmail} />
            <LinkStyled>Gmail</LinkStyled>
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconYoutube} />
            <LinkStyled>Youtube</LinkStyled>
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconMicrosoft} />
            <LinkStyled>Microsoft</LinkStyled>
          </ItemBanner>
          <ItemBanner>
            <IconStyle src={iconHotMail} />
            <LinkStyled>HotMail</LinkStyled>
          </ItemBanner>
        </Banner>
      </HeaderStyle>
    </>
  );
};

export default HeaderComponent;
