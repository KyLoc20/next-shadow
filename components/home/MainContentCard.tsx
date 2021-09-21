import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 605px;
background:rgba(0,230,66,0.1);
`;
type MainContentProps = {
    children?: React.ReactNode;
};
export default function MainContentCard(props:MainContentProps){
    return <Component>MainContentCard</Component>
}