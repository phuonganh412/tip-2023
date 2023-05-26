import { Form, Input, Button, Select, DatePicker, Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "antd";

export const JobForm = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const [experienceCount, setExperienceCount] = useState(1);
    const [experience, setExperience] = useState([]);
    const [availabilityCount, setAvailabilityCount] = useState(1);
    const [availability, setAvailability] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        form.setFieldsValue({
            class: id,
        });
    }, []);

    const onFinish = (values) => {
        setError(null);
        const { experience, availability, ...rest } = values;
        setExperience(experience);
        setAvailability(availability);

        const experienceStrings = experience.map((exp) => {
            return `${exp.jobTitle} - ${exp.duration}`;
        });

        const availabilityStrings = availability.map((item) => item.day);

        const body = {
            ...rest,
            experience: experienceStrings,
            availability: availabilityStrings,
        };

        console.log(body);
        axios
            .post(`http://localhost:5555/api/apply`, body)
            .then((res) => {
                setExperience([]);
                setExperienceCount(1);
                setAvailability([]);
                setAvailabilityCount(1);
                form.resetFields();
                form.setFieldsValue({
                    class: id,
                });
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const addExperience = () => {
        setExperienceCount((prevCount) => prevCount + 1);
    };

    const removeExperience = (experienceIndex) => {
        setExperienceCount((prevCount) => prevCount - 1);
        setExperience((prevExperience) => {
            const updatedExperience = [...prevExperience];
            updatedExperience.splice(experienceIndex, 1);
            return updatedExperience;
        });
    };

    const addAvailability = () => {
        setAvailabilityCount((prevCount) => prevCount + 1);
    };

    const removeAvailability = (availabilityIndex) => {
        setAvailabilityCount((prevCount) => prevCount - 1);
        setAvailability((prevAvailability) => {
            const updatedAvailability = [...prevAvailability];
            updatedAvailability.splice(availabilityIndex, 1);
            return updatedAvailability;
        });
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };

    return (
        <>
            {error && (
                <Alert
                    style={{ width: "500px" }}
                    message="Error"
                    description={error}
                    type="error"
                    closable
                    showIcon
                />
            )}
            <br />
            <Form
                form={form}
                {...formItemLayout}
                name="job_application"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="job-form"
            >
                <Form.Item label="Apply class" name="class">
                    <Input defaultValue={id} className="input-field" />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        { required: true, message: "Please enter your name!" },
                    ]}
                >
                    <Input className="input-field" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Please enter your email!" },
                    ]}
                >
                    <Input type="email" className="input-field" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your phone number!",
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: "Please enter a valid phone number!",
                        },
                    ]}
                >
                    <Input type="tel" className="input-field" />
                </Form.Item>

                <Form.Item
                    name="skills"
                    label="Skills"
                    rules={[
                        {
                            required: true,
                            message: "Please enter all your skills",
                        },
                    ]}
                >
                    <Input className="input-field" />
                </Form.Item>

                <Form.Item label="Experience" name="experience">
                    {Array.from({ length: experienceCount }, (_, index) => (
                        <Space
                            key={index}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                        >
                            <Form.Item
                                noStyle
                                name={["experience", index, "jobTitle"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter the job title!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Job Title"
                                    style={{ width: 200 }}
                                />
                            </Form.Item>
                            <Form.Item
                                noStyle
                                name={["experience", index, "duration"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select the duration!",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select duration"
                                    style={{ width: 200 }}
                                >
                                    <Option value="1year">1 year</Option>
                                    <Option value="2years">2 years</Option>
                                    <Option value="3years">3 years</Option>
                                    <Option value="4years">4 years</Option>
                                    <Option value="5+years">5 years</Option>
                                </Select>
                            </Form.Item>
                            {index > 0 && (
                                <Button
                                    type="danger"
                                    onClick={() => removeExperience(index)}
                                    style={{ marginLeft: 8 }}
                                >
                                    Remove
                                </Button>
                            )}
                        </Space>
                    ))}
                    <Button type="dashed" onClick={addExperience} block>
                        Add Experience
                    </Button>
                </Form.Item>

                <Form.Item label="Availability" name="availability">
                    {Array.from({ length: availabilityCount }, (_, index) => (
                        <Space
                            key={index}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                        >
                            <Form.Item
                                noStyle
                                name={["availability", index, "day"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter the day!",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Day"
                                    style={{ width: 400 }}
                                >
                                    <Option value="Monday">Monday</Option>
                                    <Option value="Tuesday">Tuesday</Option>
                                    <Option value="Wednesday">Wednesday</Option>
                                    <Option value="Thursday">Thursday</Option>
                                    <Option value="Friday">Friday</Option>
                                    <Option value="Saturday">Saturday</Option>
                                    <Option value="Sunday">Sunday</Option>
                                </Select>
                            </Form.Item>
                            {index > 0 && (
                                <Button
                                    type="danger"
                                    onClick={() => removeAvailability(index)}
                                    style={{ marginLeft: 8 }}
                                >
                                    Remove
                                </Button>
                            )}
                        </Space>
                    ))}
                    <Button type="dashed" onClick={addAvailability} block>
                        Add Availability
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        {...tailFormItemLayout}
                        type="primary"
                        htmlType="submit"
                        className="apply-btn"
                    >
                        Apply
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
