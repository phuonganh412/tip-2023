import { Header } from "../../components/Header";
import { Row, Col } from "antd";
import { JobCard } from "../../components/JobCard";
export const Jobs = () => {
    const jobs = [
        {
            id: 1,
            title: "Student Services Officer",
            type: "Seasonal",
            salary: "$2000/month",
            location: "Melbourne, VIC",
            description:
                "This is an exciting and unique opportunity to be part of CorpU, and work with like-minded, motivated and skilled experts",
        },
        {
            id: 2,
            title: "Sessional Specialised Lecturers in Financial Planning",
            type: "Seasonal",
            salary: "$5000/month",
            location: "Melbourne, VIC",
            description:
                "We are seeking lecturers to teach subjects in the Graduate Diploma in Financial Planning (GDFP), a new AQF Level 8 course not yet approved for delivery. ",
        },
        {
            id: 3,
            title: "Lecturer: Information Technology (Academic Level B)",
            type: "Seasonal",
            salary: "$7000/month",
            location: "Melbourne, VIC",
            description:
                "As a teaching focused Lecturer, you are responsible for the development, delivery and coordination of courses within STEMs undergraduate, honours and postgraduate courses in the discipline of Information Technology. ",
        },
        {
            id: 4,
            title: "Lecturer - Master of Public Health",
            type: "Full-time",
            salary: "$7000/month",
            location: "Melbourne, VIC",
            description:
                "We are now seeking applications from experienced academics to teach Master in Public Health to join our team. As an integral member of our team, you will contribute to the delivery of courses  at postgraduate levels and contribute to the organisational research program and administrative functions.",
        },
        {
            id: 5,
            title: "Lecturer or Senior Lecturer in Social Work and Human Services",
            type: "Full-time",
            salary: "$7000/month",
            location: "Melbourne, VIC",
            description:
                "We have an exciting opportunity available for a high-achieving, innovative, and resourceful Lecturer or Senior Lecturer in Social Work and Human Services to join our School of Law and Society. ",
        },
        {
            id: 6,
            title: "Administration Officer",
            type: "Full time",
            salary: "$7000",
            location: "Melbourne, VIC",
            description:
                "As an Administration Officer, you will ensure an efficient, effective, and timely customer-focused administration service with the correct implementation of all university policies that relate to the areas for which the position is responsible.",
        },
    ];
    return (
        <>
            <Header activePage="jobs" />
            <div className="jobs-container">
                <h1>Job Listings</h1>
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
