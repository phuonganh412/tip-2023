import { HeaderLogo } from "../HeaderLogo";
import { Layout, Button, Menu, Space } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

export const HeaderStaff = ({ activePage }) => {
    return (
        <div>
            <AntHeader className="header-container">
                <HeaderLogo />
                <Menu theme="dark" mode="horizontal" className="header-menu" />
                <Space>
                    <Link to="/">
                        <Button type="primary">Return to user</Button>
                    </Link>
                    <Link to="/class">
                        <Button type="primary">View all classes</Button>
                    </Link>
                    <Link to="/create-class">
                        <Button type="primary">Create class</Button>
                    </Link>
                </Space>
            </AntHeader>
        </div>
    );
};
