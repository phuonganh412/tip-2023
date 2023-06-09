import { Card, Typography, Tag } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export const JobCard = ({ job }) => {
    return (
        <div className="job-card-container">
            <Link to={`/jobs/${job._id}`}>
                <Card hoverable style={{ width: 500 }} className="job-card">
                    <Meta
                        title={job.class}
                        description={`Teaching Time: ${job.time}`}
                    />
                    <Typography.Paragraph
                        ellipsis={{ rows: 2 }}
                        className="job-card-description"
                    >
                        {job.description}
                    </Typography.Paragraph>
                    <div className="job-card-details">
                        <Typography.Paragraph
                            ellipsis={{ rows: 2 }}
                            className="job-card-detail"
                        >
                            Salary: {job.salary}
                        </Typography.Paragraph>
                        <Typography.Paragraph
                            ellipsis={{ rows: 2 }}
                            className="job-card-detail"
                        >
                            Type: {job.type}
                        </Typography.Paragraph>
                    </div>
                    <Tag color={job.status === "open" ? "green" : "red"}>
                        {job.status}
                    </Tag>
                </Card>
            </Link>
        </div>
    );
};
