import * as React from "react";
import styled from "styled-components";
import { Button, Flex, Image, Input, Layout, Space } from "antd";
import logo from "../assets/logo.png";

const { Footer } = Layout;

interface FooterComponentProps {}

const FooterComponent: React.FunctionComponent<FooterComponentProps> = () => {
  const FooterStyle = styled(Footer)`
    display: flex;
    height: 400px;
    width: 100%;
    padding: 20px 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 50px;
    background: #001529;
    color: #f0f0f0;
  `;

  const ImgLogo = styled(Image)`
    height: 200px !important;
    max-width: 200px;
  `;
  return (
    <>
      <FooterStyle>
        <Flex justify="space-between" vertical>
          <ImgLogo src={logo} />

          <p>WebShopMMO | Cửa hàng tài khoản giá rẻ.</p>
          <p>
            Copyright © WebShopMMO. All Rights Reserved.
            Powered by WebShopMMO.com
          </p>
        </Flex>
        <Flex justify="space-between" vertical>
          <p>Giới thiệu</p>
          <p>Liên hệ</p>
          <p>Bảo hành và hoàn tiền</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách điều khoả</p>
        </Flex>
        <Flex justify="space-between" vertical>
          <h2>SẢN PHẨM BÁN CHẠY</h2>
          <p>Mua Spotify Premium</p>
          <p>Mua tài khoản Netflix</p>
          <p>Mua Canva Pro</p>
          <p>Adobe All Apps</p>
        </Flex>
      </FooterStyle>
    </>
  );
};

export default FooterComponent;
