import { Button, Input, Form, Space, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import { Member } from "models";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface MemberFormProps {
  initialValues?: Member;
  handleBackButton: () => void;
  onSubmit?: (formValues: Member) => void;
}

export default function MemberForm({
  initialValues,
  handleBackButton,
  onSubmit,
}: MemberFormProps) {
  const { Text } = Typography;
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Vui lòng nhập tên")
      .min(6, "Tên tối thiểu 6 ký tự")
      .max(50, "Tên tối đa 50 ký tự"),
    id: yup
      .string()
      .required("Vui lòng nhập mã nhân viên")
      .length(6, "Mã nhân viên chỉ được 6 ký tự"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Member>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm: SubmitHandler<Member> = async (
    formValues: Member
  ) => {
    try {
      await onSubmit?.(formValues);
    } catch (error) {}
  };

  return (
    <Row>
      <Col span={6} offset={9}>
        <form
          style={{ textAlign: "center", marginTop: "1rem" }}
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          {!initialValues?.id && (
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <Form.Item>
                  <Input
                    style={{ width: "100%" }}
                    {...field}
                    placeholder="Mã nhân viên"
                  />
                  {errors.id && <Text type="danger">{errors.id.message}</Text>}
                </Form.Item>
              )}
            />
          )}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Form.Item>
                <Input width="300px" {...field} placeholder="Họ và tên" />
                {errors.name && (
                  <Text type="danger">{errors.name.message}</Text>
                )}
              </Form.Item>
            )}
          />
          <Space>
            <Button
              type="default"
              disabled={isSubmitting}
              onClick={handleBackButton}
            >
              Quay lại
            </Button>
            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
              {initialValues?.id ? "Cập nhật" : "Thêm mới"}
            </Button>
          </Space>
        </form>
      </Col>
    </Row>
  );
}
