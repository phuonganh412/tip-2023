import { useState } from "react";
import { Typography, Row, Col, Avatar, Table, Button, Input } from "antd";
import profilePicture from "../../assets/profile-picture.jpg";
import { Header } from "../../components/Header";

const { Title, Text } = Typography;

const initialMockData = {
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

export const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [mockData, setMockData] = useState(initialMockData);

    const handleUpdateProfile = () => {
        setEditMode(!editMode);
        console.log("Profile updated successfully!");
    };
    return (
        <div>
            <Header activePage="profile" />
            <div className="profile-container">
                <Title level={1} className="profile-header">
                    Your Profile
                </Title>
                <Row gutter={16} align="middle">
                    <Col span={8} className="profile-picture">
                        {mockData.profilePicture && (
                            <Avatar src={profilePicture} size={150} />
                        )}
                    </Col>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Name: </Text>
                        <Input
                            value={mockData.name}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Email: </Text>
                        <Input
                            value={mockData.email}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Phone Number: </Text>
                        <Input
                            value={mockData.phoneNumber}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    phoneNumber: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Class: </Text>
                        <Input
                            value={mockData.class}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    class: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Qualification: </Text>
                        <Input
                            value={mockData.qualification}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    qualification: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        <Text strong>Skill: </Text>
                        <Input
                            value={mockData.skill}
                            disabled={!editMode}
                            onChange={(e) =>
                                setMockData({
                                    ...mockData,
                                    skill: e.target.value,
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="profile-details-value">
                        {editMode ? (
                            <Button
                                type="primary"
                                onClick={handleUpdateProfile}
                            >
                                Save Profile
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                onClick={handleUpdateProfile}
                            >
                                Update Profile
                            </Button>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};
