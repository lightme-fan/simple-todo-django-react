import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Form = ({ children, onSubmit }) => {
    return (
        <FormStyle onSubmit={onSubmit}>{children}</FormStyle>
    )
}

export default Form;
