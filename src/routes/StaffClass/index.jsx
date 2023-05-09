import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Tag } from "antd";

export const StaffClass = () => {
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
            dataIndex: "classCode",
            key: "classCode",
        },
        {
            title: "Class Name",
            dataIndex: "className",
            key: "className",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Number of Applicants",
            dataIndex: "numApplicants",
            key: "numApplicants",
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Link to={`/class/${record.id}`}>
                    <Button type="primary">View Class</Button>
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
            <h1>Staff Class Page</h1>
            <Table dataSource={data} columns={columns} />
        </div>
    );
};
