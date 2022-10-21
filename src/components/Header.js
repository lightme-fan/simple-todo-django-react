import React from "react";
import { Button, Image } from "antd";
import styled from "styled-components";
import logo from "../img/logo.png"
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <HeaderStyle>
            <div>
                <Link to={"/"}>
                    <Image
                        width={100}
                        src={logo}
                        preview={false}
                    />
                </Link>
            </div>
            {/* <Button ghost type="primary">
                <Link to={"/login"}>Log in</Link>
            </Button> */}
        </HeaderStyle>
    )
}

export default Header;
