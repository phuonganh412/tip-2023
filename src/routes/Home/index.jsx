import { Header } from "../../components/Header";
import { Layout, Typography, Row, Col, Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { JobCard } from "../../components/JobCard";
import { MissionValues } from "../../components/MissionValue";

const { Title, Text } = Typography;
const { Content } = Layout;

export const Home = () => {
    const jobsList = [
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
    ];
    return (
        <>
            <Header activePage="home" />
            <Layout>
                <Content>
                    <div className="homepage-container">
                        <div className="hero-section">
                            <div className="hero-section-content">
                                <Title level={1} style={{ color: "white" }}>
                                    Find your next job
                                </Title>
                                <Text
                                    type="secondary"
                                    style={{ fontSize: 18, color: "white" }}
                                >
                                    Explore thousands of job opportunities in
                                    our University.
                                </Text>
                                <div className="search-bar">
                                    <input
                                        type="text"
                                        placeholder="Job title, keywords or company"
                                    />
                                    <Button
                                        icon={<SearchOutlined />}
                                        type="primary"
                                    >
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-jobs-section">
                            <Title level={2} id="featured-jobs-title">
                                Featured Jobs
                            </Title>
                            <Row>
                                {jobsList.map((job) => (
                                    <Col xs={24} sm={12} md={8} key={job.id}>
                                        <JobCard job={job} />
                                    </Col>
                                ))}
                            </Row>
                            <div className="see-all-jobs">
                                <Button type="primary">
                                    <Link to="/jobs">See all jobs</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="mission-value-container">
                            <MissionValues />
                        </div>
                    </div>
                </Content>
            </Layout>
        </>
    );
};
