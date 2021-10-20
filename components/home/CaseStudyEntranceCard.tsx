import * as React from "react";
import styled from "@emotion/styled";
import * as SVG from "@/components/generic/SVG";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
type CaseStudyEntranceProps = {
  children?: React.ReactNode;
};
export default function CaseStudyEntranceCard(props: CaseStudyEntranceProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox({
    vertical: isMobile(winSize.width) ? true : false,
    m: "0 auto",
    p: "16px",
    w: isMobile(winSize.width) ? "90%" : "100%",
    maxW: isMobile(winSize.width) ? "100%" : 450,
    borderbox: true,
    JC: "space-between",
    AI: "center",
    bg: "#ffffff",
    br: 6,
    bs: "0px 30px 60px rgba(0, 0, 0, 0.12)",
  });
  const [ReadButton] = useCustomButton(CustomButtonType.Content_h45_primary);

  return (
    <Component>
      <Content>
        <Case {...CaseHulu}></Case>
        <ReadButton>Read Case Study</ReadButton>
      </Content>
    </Component>
  );
}
const Component = styled.div`
  width: 100%;
  position: relative;
  margin-top: -136px;
  margin-bottom: 64px;
`;
const CaseHulu = {
  width: 105,
  height: 36,
  viewBox: "0 0 400 136.76",
  group: [
    {
      transform: "matrix(6.4378 0 0 6.4378 4 4)",
      path: [
        {
          d: "m9.57 6.24h-3.1a3.73 3.73 0 0 0-1.63 0.29v-6.53h-4.84v20h4.83v-8.07a1.29 1.29 0 0 1 1.3-1.29h2.81a1.29 1.29 0 0 1 1.3 1.29v8.07h4.84v-8.7c0-3.66-2.44-5.06-5.5-5.06zm46.48 0v8.07a1.29 1.29 0 0 1-1.29 1.29h-2.82a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.19 5.29 5.51 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5zm-27.28 8.07a1.29 1.29 0 0 1-1.3 1.29h-2.81a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.22 5.29 5.47 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5h-4.8zm8.52 5.69h4.84v-20h-4.84z",
          fill: "#000",
        },
      ],
    },
  ],
};
const CaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  opacity: 1;
  transition: opacity 0.2s ease;
`;
type CaseProps = {
  children?: React.ReactNode;
  width: number;
  height: number;
  viewBox: string;
  group: SVG.GroupProps[];
};
function Case(props: CaseProps) {
  return (
    <CaseWrapper>
      <svg
        width={`${props.width}px`}
        height={`${props.height}px`}
        viewBox={props.viewBox}
      >
        {props.group.map((group, index) => (
          <SVG.Group {...group} key={index}></SVG.Group>
        ))}
      </svg>
    </CaseWrapper>
  );
}
