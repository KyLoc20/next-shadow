import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 416px;
  background:rgba(0,34,0,0.1);
`;
type FooterProps = {
  children?: React.ReactNode;
};
export default function FooterCard(props: FooterProps) {
  return <Component>FooterCard</Component>;
}
