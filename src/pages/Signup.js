import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, ButtonComponent, Label, Input } from "../components";

const Wrapper = styled.div`
    display: grid;
    gap: 20px;
`

const Signup = () => {
    return (
        <Form>
            <Wrapper>
                <Label>
                    <span>Full Name</span>
                    <Input type="text" placeholder={"Full name..."} />
                </Label>
                <Label>
                    <span>Email</span>
                    <Input type="email" placeholder={"Email..."} />
                </Label>
                <Label>
                    <span>Number</span>
                    <Input type="text" placeholder={"Phone number..."} />
                </Label>
                <Label>
                    <span>Password</span>
                    <Input type="password" placeholder={"Password"} />
                </Label>
                <Label>
                    <span>Comfirm password</span>
                    <Input type="password" placeholder={"Comfirm your Password"} />
                </Label>
                <ButtonComponent name="Sign up" />
                <div>If you already have an account, please <Link to={"/login"}>log in</Link></div>
            </Wrapper>
        </Form>
    )
}

export default Signup;
