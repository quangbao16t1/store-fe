import { Button, Checkbox, Form, Input, Card } from "antd";
// import InputCustom from "../../components/common/input";
import { InputCustom } from "../../components/common";
import styled from "styled-components";
import HeaderComponent from "../../layout/header";
import FooterComponent from "../../layout/footer";

function LoginComponent() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const StyledCard = styled(Card)`
    min-width: 620px;
    width: 620px;
    margin: 50px auto;
  `;

  const Title = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
  `;

  const ButtonGoogle = styled(Button)`
    width: 100%;
  `;

  return (
    <>
      {/* <HeaderComponent /> */}
      <StyledCard hoverable>
        <Title className="title">Đăng nhập</Title>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ minWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Tên tài khoản hoặc địa chỉ email"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Đăng nhập bằng mạng xã hội"
            wrapperCol={{ span: 24 }}
          >
            <ButtonGoogle type="primary" htmlType="button">
              Đăng nhập bằng google
            </ButtonGoogle>
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 0, span: 24 }}
          >
            <Checkbox>Remember me</Checkbox>
            <Button type="text" href="/register">
              Bạn chưa có tài khoản nhấn để đăng kí?
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 10 }}>
            <Button type="text">Quên mật khẩu?</Button>
          </Form.Item>
        </Form>
      </StyledCard>
      {/* <FooterComponent /> */}
    </>
  );
}

export default LoginComponent;
