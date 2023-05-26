import TextArea from "antd/es/input/TextArea";
import { HeaderStaff } from "../../components/HeaderStaff";
import { Form, Input, Button, Select, DatePicker, Space } from "antd";
import axios from "axios";

export const CreateClass = () => {
    const [form] = Form.useForm();

    const tailFormItemLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };

    const onFinish = (values) => {
        axios.post("http://localhost:5555/api/job", values).then((res) => {
            window.location.replace(`${window.location.origin}/class`);
        });
    };

    return (
        <div>
            <HeaderStaff />
            <h1>Create new class</h1>
            <Form
                style={{ margin: "auto" }}
                form={form}
                className="job-form"
                onFinish={onFinish}
            >
                <Form.Item name="class" label="Class name">
                    <Input required className="input-field" />
                </Form.Item>
                <Form.Item name="type" label="Job type">
                    <Input required className="input-field" />
                </Form.Item>
                <Form.Item name="salary" label="Salary">
                    <Input required className="input-field" />
                </Form.Item>
                <Form.Item label="Time" name="time">
                    <Select placeholder="Day">
                        <Option value="Monday">Monday</Option>
                        <Option value="Tuesday">Tuesday</Option>
                        <Option value="Wednesday">Wednesday</Option>
                        <Option value="Thursday">Thursday</Option>
                        <Option value="Friday">Friday</Option>
                        <Option value="Saturday">Saturday</Option>
                        <Option value="Sunday">Sunday</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea required className="input-field" />
                </Form.Item>
                <Form.Item>
                    <Button
                        {...tailFormItemLayout}
                        type="primary"
                        htmlType="submit"
                        className="apply-btn"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
