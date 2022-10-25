import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, ButtonComponent, Label, Input } from "../components";

const Wrapper = styled.div`
    display: grid;
    gap: 20px;
`

const Login = () => {
    return (
        <Form>
            <Wrapper>
                <Label>
                    <span>Email</span>
                    <Input type="email" placeholder={"Email"} />
                </Label>
                <Label>
                    <span>Password</span>
                    <Input type="password" placeholder={"Type your password"} />
                </Label>
                <ButtonComponent name={"Log in"} />
                <div>Haven't you signed up yet? If so, please <Link to={"/signup"}>sign up</Link></div>
            </Wrapper>
        </Form>
    )
}

export default Login;
