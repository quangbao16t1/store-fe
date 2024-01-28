import { Button, Checkbox, Form, Input, Card } from "antd";
// import InputCustom from "../../components/common/input";
import { InputCustom } from "../../components/common";
import styled from "styled-components";

function RegisterComponent() {
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
      <StyledCard hoverable>
        <Title className="title">Đăng kí</Title>
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
            <p>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng,
              hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và
              cho các mục đích khác được mô tả trong chính sách riêng tư.
            </p>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
            <Button type="primary" htmlType="submit">
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </StyledCard>
    </>
  );
}

export default RegisterComponent;
