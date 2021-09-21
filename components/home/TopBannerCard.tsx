import * as React from "react";
import styled from "@emotion/styled";
const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #000;
`;
type TopBannerProps = {
  children?: React.ReactNode;
};
export default function TopBannerCard(props: TopBannerProps) {
  return <Component>TopBannerCard</Component>;
}
