import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 409px;
background:rgba(255,43,42,0.1);
`;
type SubscribeProps = {
    children?: React.ReactNode;
};
export default function SubscribeCard(props:SubscribeProps){
    return <Component>SubscribeCard</Component>
}