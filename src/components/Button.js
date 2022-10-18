import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 152px;
    height: 51px;
    font-size: 20px;
    padding: 4px 10px;
    background: forestgreen;
    color: white;
    cursor: pointer;

    :disabled {
        cursor: not-allowed;
        opacity: 0.5
    }
`

const ButtonComponent = ({ name, onClick, type, disabled }) => {
    return <ButtonStyle type={type} onClick={onClick} disabled={disabled}>{name}</ButtonStyle>
}

export default ButtonComponent;