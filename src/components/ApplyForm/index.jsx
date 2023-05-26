import { Form, Input, Button, Select, DatePicker, Space } from "antd";
import { useState } from "react";

export const JobForm = () => {
    const [form] = Form.useForm();
    const [experienceCount, setExperienceCount] = useState(1);
    const [experience, setExperience] = useState([]);
    const [availabilityCount, setAvailabilityCount] = useState(1);
    const [availability, setAvailability] = useState([]);

    const onFinish = (values) => {
        const { experience, availability, ...rest } = values;
        setExperience(experience);
        setAvailability(availability);
        console.log("Success:");
        console.log("Name:", rest.name);
        console.log("Email:", rest.email);
        console.log("Phone Number:", rest.phone);
        console.log("Position:", rest.position);
        console.log("Skills:", rest.skills);
        console.log("Experience:", experience);
        console.log("Availability:", availability);
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
        <Form
            form={form}
            {...formItemLayout}
            name="job_application"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="job-form"
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
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
                label="Apply class"
                name="position"
                rules={[
                    {
                        required: true,
                        message:
                            "Please select the class you are applying for!",
                    },
                ]}
            >
                <Select placeholder="Select a class">
                    <Option value="class1">Class 1</Option>
                    <Option value="class2">Class 2</Option>
                    <Option value="class3">Class 3</Option>
                </Select>
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
                            <Select placeholder="Day" style={{ width: 200 }}>
                                <Option value="Monday">Monday</Option>
                                <Option value="Tuesday">Tuesday</Option>
                                <Option value="Wednesday">Wednesday</Option>
                                <Option value="Thursday">Thursday</Option>
                                <Option value="Friday">Friday</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            name={["availability", index, "time"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the time!",
                                },
                            ]}
                        >
                            <Select placeholder="Time" style={{ width: 200 }}>
                                <Option value="9am-12pm">9am-12pm</Option>
                                <Option value="1pm-4pm">1pm-4pm</Option>
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
    );
};
