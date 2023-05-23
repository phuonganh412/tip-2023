import { Header } from "../../components/Header";
import { Row, Col } from "antd";
import { JobCard } from "../../components/JobCard";

export const Jobs = () => {
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
                        <Col key={job.id} xs={24} sm={12} md={8} lg={8}>
                            <JobCard job={job} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};
