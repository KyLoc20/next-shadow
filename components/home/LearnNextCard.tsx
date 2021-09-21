import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 950px;
background:rgba(0,0,213,0.1);
`;
type LearnNextProps = {
  children?: React.ReactNode;
};
export default function LearnNextCard(props: LearnNextProps) {
  return <Component>LearnNextCard</Component>;
}
