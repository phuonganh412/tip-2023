import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export function JobsDetails() {
    const [job, setJob] = useState({});
    const { id } = useParams(); // Retrieve the job ID from the URL

    useEffect(() => {
        axios.get(`http://localhost:5555/api/job/${id}`).then((response) => {
            setJob(response.data);
        });
    });

    return (
        <>
            <Header activePage="jobs" />
            <div className="job-details-container">
                <div className="job-details-header">
                    <h1>{job.class}</h1>
                    <h3>Teaching Time:</h3>
                    <p>{job.time}</p>
                </div>
                <h3 className="job-details-description">Description:</h3>
                <p>{job.description}</p>

                <h3>Salary:</h3>
                <p>{job.salary}</p>
                <h3>Type:</h3>
                <p>{job.type}s</p>
            </div>
            <div className="see-all-jobs">
                <Button type="primary">
                    <Link to={`/apply/${id}`}>Apply for this job</Link>
                </Button>
            </div>
        </>
    );
}
