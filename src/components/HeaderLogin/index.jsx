import { Button, Space } from "antd";
import { Link } from "react-router-dom";

export const HeaderLogin = () => {
    return (
        <div>
            <Space>
                <Link to="/login">
                    <Button type="primary">Login</Button>
                </Link>
                <Link to="/class">
                    <Button type="primary">Staff Site</Button>
                </Link>
            </Space>
        </div>
    );
};
