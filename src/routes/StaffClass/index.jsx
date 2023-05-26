import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Tag } from "antd";
import { HeaderStaff } from "../../components/HeaderStaff";
import axios from "axios";
export const StaffClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5555/api/job").then((response) => {
            setClasses(response.data);
        });
    }, []);
    // mock data classes
    const data = [
        {
            id: "1",
            classCode: "MATH101",
            className: "Calculus I",
            date: "Monday",
            time: "9:00-10:30",
            location: "BA123",
            numApplicants: 15,
            status: "open",
        },
        {
            id: "2",
            classCode: "PHYS101",
            className: "Physics I",
            date: "Monday",
            time: "11:00-12:30",
            location: "BA123",
            numApplicants: 10,
            status: "open",
        },
        {
            id: "3",
            classCode: "CS101",
            className: "Introduction to Computer Science",
            date: "Monday",
            time: "13:00-14:30",
            location: "BA123",
            numApplicants: 20,
            status: "closed",
        },
    ];

    // define the columns for the table
    const columns = [
        {
            title: "Class Code",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Class Name",
            dataIndex: "class",
            key: "class",
        },
        {
            title: "Job type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Salary",
            dataIndex: "salary",
            key: "salary",
        },
        {
            title: "Number of applicants",
            dataIndex: "numberOfApplicants",
            key: "numberOfApplicants",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Link to={`/class/${record._id}`}>
                    <Button type="primary">View applications</Button>
                </Link>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => {
                if (text === "open") {
                    return <Tag color="green">Open</Tag>;
                } else if (text === "closed") {
                    return <Tag color="red">Closed</Tag>;
                }
            },
        },
    ];

    return (
        <div>
            <HeaderStaff />
            <h1>Staff Class Page</h1>
            <Table dataSource={classes} columns={columns} />
        </div>
    );
};
