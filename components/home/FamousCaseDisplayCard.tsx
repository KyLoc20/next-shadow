import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 677px;
background:rgba(255,0,234,0.1);
`;
type FamousCaseDisplayProps = {
    children?: React.ReactNode;
};
export default function FamousCaseDisplayCard(props:FamousCaseDisplayProps){
    return <Component>FamousCaseDisplayCard</Component>
}