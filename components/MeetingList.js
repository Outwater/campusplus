import React from "react";
import { Card, Row, Col } from "antd";

const MeetingList = () => {
  const cardList = [
    { name: "독서모임", date: "9월3일(목)", price: "무료" },
    { name: "독서모임2", date: "9월3일(목)", price: "무료" },
    { name: "독서모임3", date: "9월3일(목)", price: "무료" },
    { name: "독서모임4", date: "9월3일(목)", price: "무료" },
    { name: "독서모임5", date: "9월3일(목)", price: "무료" },
  ];
  return (
    <div>
      <Row gutter={16}>
        {cardList.map((item) => (
          <Col span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="https://eventusstorage.blob.core.windows.net/evs/Image/primer/21274/ProjectInfo/Cover/ce6d6b1b5d8446f48b9a3a0f25884908.jpg?fixed"
                />
              }
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    {item.date} <br />
                    {item.price}
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeetingList;
