import React from "react";
import styled from "styled-components";

const ListStyle = styled.ul`
    list-style: none;
    padding: 0;
`

const List = ({ children }) => {
    return <ListStyle>{children}</ListStyle>
}

export default List;
