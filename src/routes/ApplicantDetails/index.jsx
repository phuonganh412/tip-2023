import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Button, Modal, Form, Input, Space } from "antd";
import { HeaderStaff } from "../../components/HeaderStaff";
import { useParams } from "react-router-dom";
import axios from "axios";

const { Column } = Table;

export const ApplicantDetails = () => {
    const { id } = useParams();
    const [classStatus, setClassStatus] = useState("open");
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/api/job/${id}`).then((res) => {
            setClassStatus(res.data.status);
        });

        axios.get(`http://localhost:5555/api/apply/class/${id}`).then((res) => {
            setApplicants(res.data);
        });
    }, []);

    const handleAccept = (id) => {
        axios
            .post(`http://localhost:5555/api/apply/accept/${id}`)
            .then((res) => {
                window.location.reload(true);
            });
    };
    const handleReject = (id) => {
        axios
            .post(`http://localhost:5555/api/apply/reject/${id}`)
            .then((res) => {
                window.location.reload(true);
            });
    };

    return (
        <>
            <HeaderStaff />
            <Space />
            <Table dataSource={applicants}>
                <Column title="ID" dataIndex="_id" key="_id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Phone Number" dataIndex="phone" key="phone" />
                <Column
                    title="Experience"
                    dataIndex="experience"
                    key="experience"
                    render={(_, record) => (
                        <div>
                            {record.experience.map((item) => (
                                <p className="availability" key={item}>
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
                                <p className="availability" key={time}>
                                    {time}
                                </p>
                            ))}
                        </div>
                    )}
                />
                <Column
                    title="Status"
                    dataIndex="status"
                    key="status"
                    render={(status) => (
                        <>
                            <Tag
                                color={status === "accepted" ? "green" : "red"}
                            >
                                {status}
                            </Tag>
                        </>
                    )}
                />
                <Column
                    title="Profile"
                    dataIndex="profile"
                    key="profile"
                    render={() => (
                        <Link to={`/staffProfile`}>
                            <Button type="primary">View Full Profile</Button>
                        </Link>
                    )}
                />
                {classStatus === "open" && (
                    <Column
                        title="Action"
                        key="action"
                        render={(application) => (
                            <>
                                <Button
                                    type="primary"
                                    disabled={
                                        application.status === "accepted" ||
                                        application.status === "rejected"
                                    }
                                    onClick={() =>
                                        handleAccept(application._id)
                                    }
                                >
                                    Accept
                                </Button>{" "}
                                <Button
                                    type="primary"
                                    danger
                                    disabled={
                                        application.status === "accepted" ||
                                        application.status === "rejected"
                                    }
                                    onClick={() =>
                                        handleReject(application._id)
                                    }
                                >
                                    Reject
                                </Button>
                            </>
                        )}
                    />
                )}
            </Table>
        </>
    );
};
