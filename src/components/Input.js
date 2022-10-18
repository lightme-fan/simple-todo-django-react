import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
    width: 400px;
    height: 51px;
    font-size: 20px;
    padding: 4px 10px;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 16px;
        font-style: italic;
    }
    :-ms-input-placeholder {
        font-size: 16px;
        font-style: italic;
    }
`

const Input = ({ type, onChange, placeholder}) => {
    return <InputStyle type={type} onChange={onChange} placeholder={placeholder} />
}

export default Input;
