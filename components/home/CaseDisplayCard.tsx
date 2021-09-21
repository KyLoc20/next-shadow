import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 158px;
background:rgba(255,0,0,0.1);
`;
type CaseDisplayProps = {
    children?: React.ReactNode;
};
export default function CaseDisplayCard(props:CaseDisplayProps){
    return <Component>CaseDisplayCard</Component>
}