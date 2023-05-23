import { HeaderLogo } from "../HeaderLogo";
import { Layout, Button, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

export const HeaderStaff = ({ activePage }) => {
    return (
        <div>
            <AntHeader className="header-container">
                <HeaderLogo />
                <Menu theme="dark" mode="horizontal" className="header-menu" />
                <Link to="/">
                    <Button type="primary">Return to user</Button>
                </Link>
            </AntHeader>
        </div>
    );
};
