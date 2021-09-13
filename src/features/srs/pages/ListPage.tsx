import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table } from "antd";
import "antd/dist/antd.css";
import memberApi from "api/memberApi";
import srsApi from "api/srsApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { srsActions, selectSRSList, selectSRSLoading } from "../srsSlice";

// export interface ListPageProps {
//   handleSetEditMember: (formValues: string) => void;
// }

export default function ListPage() {
  const srsList = useAppSelector(selectSRSList);
  const loading = useAppSelector(selectSRSLoading);
  const dispatch = useAppDispatch();

  // const columns = [
  //   {
  //     title: "MSNV",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "Họ và tên",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Tùy chọn",
  //     key: "action",
  //     render: (text: any, record: any) => (
  //       <Space size="middle">
  //         <Button type="primary" onClick={() => handleEdit(record.id)}>
  //           Sửa
  //         </Button>
  //         <Button danger onClick={() => handleRemoveMember(record.id)}>
  //           Xóa
  //         </Button>
  //       </Space>
  //     ),
  //   },
  // ];

  useEffect(() => {
    dispatch(srsActions.fetchSRSList());
  }, [dispatch]);

  return (
    <div>
      Hello SRS
      {/* <Row>
        <Col span={12} offset={6}>
          <Button
            onClick={() => handleEdit("")}
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
            type="primary"
          >
            Thêm mới
          </Button>
          <br />
          <div style={{ textAlign: "center" }}>
            {memberList.length > 0 && !loading ? (
              <Table columns={columns} dataSource={memberList} rowKey="id" />
            ) : (
              <LoadingOutlined />
            )}
          </div>
        </Col>
      </Row>
      ) */}
    </div>
  );
}
