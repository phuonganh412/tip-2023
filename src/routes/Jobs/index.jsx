import { Header } from "../../components/Header";
import { Row, Col } from "antd";
import { JobCard } from "../../components/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5555/api/job").then((response) => {
            console.log(response.data);
            setJobs(response.data);
        });
    }, []);

    return (
        <>
            <Header activePage="jobs" />
            <div className="jobs-container">
                <h1>Job Listings</h1>
                <p align="middle">
                    We are looking for lecturers for these class!!!
                </p>
                <Row justify="center" align="middle">
                    {jobs.map((job) => (
                        <Col key={job._id} xs={24} sm={12} md={8} lg={8}>
                            <JobCard job={job} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};
