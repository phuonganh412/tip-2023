import { useParams, Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "antd";

export function JobsDetails() {
    const { id } = useParams(); // Retrieve the job ID from the URL
    const jobs = [
        {
            id: 1,
            class: "Computer Science",
            type: "Full-time",
            salary: "$8000/month",
            time: "Monday, 9:00 AM - 12:00 PM",
            description:
                "We are seeking a highly qualified Lecturer in Computer Science to join our dynamic faculty. The role involves teaching undergraduate and postgraduate courses, conducting research, and contributing to curriculum development.",
        },
        {
            id: 2,
            class: "Advanced Mathematics",
            type: "Seasonal",
            salary: "$9000/month",
            time: "Monday, 9:00 AM - 12:00 PM",
            description:
                "We are looking for an Assistant Professor of Mathematics with expertise in algebra or geometry. The successful candidate will deliver engaging lectures, supervise research projects, and collaborate with colleagues on curriculum enhancements.",
        },
        {
            id: 3,
            class: "Information Technology",
            type: "Seasonal",
            salary: "$7000/month",
            time: "Thursday, 1:00 PM - 5:00 PM",
            description:
                "As a teaching focused Lecturer, you are responsible for the development, delivery, and coordination of courses within STEMs undergraduate, honors, and postgraduate courses in the discipline of Information Technology.",
        },
        {
            id: 4,
            class: "Physics",
            type: "Full-time",
            salary: "$10000/month",
            time: "Tuesday, 9:00 AM - 12:00 PM",
            description:
                "Join our prestigious Physics department as an Associate Professor. The role involves teaching advanced physics courses, supervising graduate students, and conducting cutting-edge research in a collaborative environment.",
        },
        {
            id: 5,
            class: "Engineering",
            type: "Part-time",
            salary: "$6000/month",
            time: "Wednesday, 1:00 PM - 5:00 PM",
            description:
                "We are seeking a Senior Lecturer in Engineering to deliver high-quality instruction in areas such as civil engineering, mechanical engineering, or electrical engineering. The position offers a flexible schedule for work-life balance.",
        },
        {
            id: 6,
            class: "Business Administration",
            type: "Seasonal",
            salary: "$12000/month",
            time: "Monday, 9:00 AM - 12:00 PM",
            description:
                "We are looking for an experienced Professor of Business Administration to lead our prestigious business school. The role involves teaching advanced courses, mentoring junior faculty, and contributing to strategic initiatives.",
        },
    ];

    const selectedJob = jobs.find((job) => job.id === parseInt(id));

    if (!selectedJob) {
        return <div>Job not found.</div>;
    }

    return (
        <>
            <Header activePage="jobs" />
            <div className="job-details-container">
                <div className="job-details-header">
                    <h1>{selectedJob.class}</h1>
                    <h3>Teaching Time:</h3>
                    <p>{selectedJob.time}</p>
                </div>
                <h3 className="job-details-description">Description:</h3>
                <p>{selectedJob.description}</p>

                <h3>Salary:</h3>
                <p>{selectedJob.salary}</p>
                <h3>Type:</h3>
                <p>{selectedJob.type}s</p>
            </div>
            <div className="see-all-jobs">
                <Button type="primary">
                    <Link to="/apply">Apply for this job</Link>
                </Button>
            </div>
        </>
    );
}
