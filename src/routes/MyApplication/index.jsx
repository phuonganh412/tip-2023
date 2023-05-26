import { Header } from "../../components/Header";
import { Layout, Typography, Button, Table, Tag, Input } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Column } = Table;

export const MyApplication = () => {
    const [email, setEmail] = useState("");
    const [applications, setApplications] = useState([]);
    const mockApplicants = [
        {
            id: "1",
            name: "John Doe",
            email: "johndoe@gmail.com",
            phoneNumber: "0123456789",
            experience: "2 years",
            availability: [
                "Monday 1pm-4pm",
                "Tuesday 9am-12pm",
                "Wednesday 1pm-4pm",
                "Friday 9am-12pm",
            ],
            status: "Pending",
            class: "12312",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "janesmith@gmail.com",
            phoneNumber: "0123456789",
            experience: "10 years",
            availability: ["Monday 2pm-5pm", "Friday 9am-12pm"],
            status: "Accepted",
        },
        {
            id: "3",
            name: "Mike Johnson",
            email: "mikejohnson@gmail.com",
            phoneNumber: "0123456789",
            experience: "4 years",
            availability: ["Monday 2pm-5pm", "Friday 9am-12pm"],
            status: "Rejected",
        },
    ];

    const handleSearch = () => {
        console.log(email);
        axios
            .get(`http://localhost:5555/api/apply/email/${email}`)
            .then((res) => {
                console.log(res.data);
                setApplications(res.data);
            });
    };

    return (
        <>
            <Header activePage="my-applications" />
            <Layout>
                <Content>
                    <div className="homepage-container">
                        <div className="hero-section">
                            <div className="hero-section-content">
                                <Title level={1} style={{ color: "white" }}>
                                    Track your applications here
                                </Title>
                                <Text
                                    type="secondary"
                                    style={{ fontSize: 18, color: "white" }}
                                >
                                    Enter your email to track your applications.
                                </Text>
                                <div className="search-bar">
                                    <Input
                                        type="email"
                                        placeholder="example@email.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <Button
                                        icon={<SearchOutlined />}
                                        type="primary"
                                        onClick={handleSearch}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Table dataSource={applications}>
                                <Column title="ID" dataIndex="_id" key="_id" />
                                <Column
                                    title="Name"
                                    dataIndex="name"
                                    key="name"
                                />
                                <Column
                                    title="Email"
                                    dataIndex="email"
                                    key="email"
                                />
                                <Column
                                    title="Phone Number"
                                    dataIndex="phone"
                                    key="phone"
                                />
                                <Column
                                    title="Experience"
                                    dataIndex="experience"
                                    key="experience"
                                    render={(_, record) => (
                                        <div>
                                            {record.experience.map((item) => (
                                                <p className="availability">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                />
                                <Column
                                    title="Availability"
                                    dataIndex="availability"
                                    key="availability"
                                    render={(_, record) => (
                                        <div>
                                            {record.availability.map((time) => (
                                                <p
                                                    className="availability"
                                                    key={time}
                                                >
                                                    {time}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                />
                                <Column
                                    title="Class"
                                    dataIndex="class"
                                    key="class"
                                />
                                <Column
                                    title="Status"
                                    dataIndex="status"
                                    key="status"
                                    render={(status, applicant) => (
                                        <>
                                            <Tag
                                                color={
                                                    status === "accepted"
                                                        ? "green"
                                                        : "red"
                                                }
                                            >
                                                {status}
                                            </Tag>
                                        </>
                                    )}
                                />
                            </Table>
                        </div>
                    </div>
                </Content>
            </Layout>
        </>
    );
};
