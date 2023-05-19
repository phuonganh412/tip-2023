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
