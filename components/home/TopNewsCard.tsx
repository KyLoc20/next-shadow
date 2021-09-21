import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 60px;
background:rgba(0,4,32,0.1);
`;
type TopNewsProps = {
    children?: React.ReactNode;
};
export default function TopNewsCard(props:TopNewsProps){
    return <Component>TopNewsCard</Component>
}