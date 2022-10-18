import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;

    span {
        font-weight: 700;
    }
`

const Label = ({ children }) => {
    return (
        <LabelStyle>{children}</LabelStyle>
    )
}

export default Label;
