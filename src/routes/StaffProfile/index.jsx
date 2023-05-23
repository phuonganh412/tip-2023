import React from "react";
import { Typography, Row, Col, Avatar, Table } from "antd";
import profilePicture from "../../assets/profile-picture.jpg";
import { HeaderStaff } from "../../components/HeaderStaff";

const { Title, Text } = Typography;

const mockData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    class: "Computer Science",
    availableTime: [
        { day: "Monday", time: "9:00 AM - 12:00 PM" },
        { day: "Tuesday", time: "1:00 PM - 4:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 12:00 PM" },
        { day: "Thursday", time: "1:00 PM - 4:00 PM" },
        { day: "Friday", time: "9:00 AM - 12:00 PM" },
    ],
    qualification: "Ph.D. in Computer Science",
    skill: "Java, Python, JavaScript",
    profilePicture: <img src={profilePicture} />,
};

const columns = [
    {
        title: "Day",
        dataIndex: "day",
        key: "day",
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time",
    },
];

export const StaffProfile = () => {
    return (
        <div>
            <HeaderStaff />
            <div className="profile-container">
                <Title level={1} className="profile-header">
                    Staff Profile
                </Title>
                <Row gutter={16} align="middle">
                    <Col span={8} className="profile-picture">
                        {mockData.profilePicture && (
                            <Avatar src={profilePicture} size={150} />
                        )}
                    </Col>
                    <Col span={16} className="profile-details">
                        <Text strong>Name: </Text>
                        <Text>{mockData.name}</Text>
                        <Text strong>Email: </Text>
                        <Text>{mockData.email}</Text>
                        <Text strong>Phone Number: </Text>
                        <Text>{mockData.phoneNumber}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Class: </Text>
                        <Text>{mockData.class}</Text>
                    </Col>
                </Row>
                <Row className="profile-table ">
                    <Col span={24}>
                        <Text strong>Available Time: </Text>
                        <Table
                            dataSource={mockData.availableTime}
                            columns={columns}
                            pagination={false}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Qualification: </Text>
                        <Text>{mockData.qualification}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Skill: </Text>
                        <Text>{mockData.skill}</Text>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
