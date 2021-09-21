import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 72px;
background:rgba(255,234,0,0.1);
`;
type CaseStudyEntranceProps = {
    children?: React.ReactNode;
};
export default function CaseStudyEntranceCard(props:CaseStudyEntranceProps){
    return <Component>CaseStudyEntranceCard</Component>
}