import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 1237px;
background:rgba(255,43,66,0.1);
`;
type WhyNextProps = {
    children?: React.ReactNode;
};
export default function WhyNextCard(props:WhyNextProps){
    return <Component>WhyNextCard</Component>
}