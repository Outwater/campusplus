import React from "react";
import { Row, Card, Col } from "antd";
import { CarOutlined } from "@ant-design/icons";

const IconList = () => {
  const itemList = [
    { name: "사업/창업", src: "11" },
    { name: "사업/창업", src: "11" },
    { name: "사업/창업", src: "11" },
    { name: "사업/창업", src: "11" },
    { name: "사업/창업", src: "11" },
    { name: "사업/창업", src: "11" },
  ];
  return (
    <div style={{ padding: "40px", width: "90%", background: "grey" }}>
      <Row gutter={16}>
        {itemList.map((item) => (
          <Col span={4}>
            <Card hoverable style={{ width: "100%" }} cover={<CarOutlined />}>
              {item.name}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default IconList;
