import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { useWindowSize } from "@/hooks/Window";
import { isMobile } from "@/utils/media";
import { useCustomBox } from "@/hooks/Container";
import CaseStudyEntranceCard from "./CaseStudyEntranceCard";
import FamousCaseCard from "./FamousCaseCard";
type WhoUsingNextCardProps = {
  children?: React.ReactNode;
};
export default function WhoUsingNextCard(props: WhoUsingNextCardProps) {
  const winSize = useWindowSize();
  const [Content] = useCustomBox({
    vertical: true,
    w: undefined,
    overflow: "visible",
    AI: "center",
    p: "100px 0",
    bg: "rgb(250, 250, 250)",
    borderTop: "1px solid rgb(234, 234, 234)",
    borderBottom: "1px solid rgb(234, 234, 234)",
  });
  const [TitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main32,
    "center"
  );
  const [SubTitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main16,
    "center"
  );
  const [ViewShowcaseButton] = useCustomButton(
    CustomButtonType.Content_h45_primary
  );
  const [CaseWrapper] = useCustomBox(
    isMobile(winSize.width)
      ? {
          w: "100%",
          overflow: "hidden",
          m: "80px 0 32px",
          wrap: true,
        }
      : {
          w: "100%",
          overflow: "hidden",
          m: "80px 0 0",
          p: "50px 0 32px",
          JC: "center",
        }
  );
  const caseItems = isMobile(winSize.width)
    ? //no transform
      FamousCases.map((item, index) => (
        <FamousCaseCard
          winWidth={winSize.width}
          key={index}
          zIndex={1}
          offsetX={0}
          offsetY={0}
          scale={1}
          name={item.name}
          caseLink={item.caseLink}
          imgUrl={item.imgUrl}
        />
      ))
    : //with transform
      FamousCases.map((item, index) => (
        <FamousCaseCard
          winWidth={winSize.width}
          key={index}
          zIndex={item.zIndex}
          offsetX={item.offsetX}
          offsetY={item.offsetY}
          scale={item.scale}
          name={item.name}
          caseLink={item.caseLink}
          imgUrl={item.imgUrl}
        />
      ));
  return (
    <Component>
      <Content>
        <CaseStudyEntranceCard />
        <Title>
          <TitleText>Who’s Using Next.js</TitleText>
        </Title>
        <SubTitle>
          <SubTitleText>
            We’re honored some of the most talented creatives out there build
            with Next.js
          </SubTitleText>
        </SubTitle>
        <CaseWrapper>{caseItems}</CaseWrapper>
        <ViewShowcaseButton>View Showcase</ViewShowcaseButton>
      </Content>
    </Component>
  );
}
const Component = styled.section``;
const Title = styled.div`
  margin-bottom: 16px;
`;
const SubTitle = styled.div``;
const FamousCases = [
  {
    zIndex: 1,
    offsetX: -4,
    offsetY: -105,
    scale: 0.67,
    name: "TikTok",
    caseLink: "https://nextjs.org/showcase/tiktok",
    imgUrl: "/images/cases/tiktok.jpg",
  },
  {
    zIndex: 2,
    offsetX: -27,
    offsetY: -70,
    scale: 0.78,
    name: "Netflix Jobs",
    caseLink: "https://nextjs.org/showcase/netflix-jobs",
    imgUrl: "/images/cases/netflix.jpg",
  },
  {
    zIndex: 3,
    offsetX: -25,
    offsetY: -25,
    scale: 0.89,
    name: "Twitch",
    caseLink: "https://nextjs.org/showcase/twitch",
    imgUrl: "/images/cases/twitch.jpg",
  },
  {
    zIndex: 4,
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    name: "Github Copilot",
    caseLink: "https://nextjs.org/showcase/github",
    imgUrl: "/images/cases/github.jpg",
  },
  {
    zIndex: 3,
    offsetX: 25,
    offsetY: -25,
    scale: 0.89,
    name: "Hulu",
    caseLink: "https://nextjs.org/showcase/hulu",
    imgUrl: "/images/cases/hulu.jpg",
  },
  {
    zIndex: 2,
    offsetX: 27,
    offsetY: -70,
    scale: 0.78,
    name: "Nike",
    caseLink: "https://nextjs.org/showcase/nike",
    imgUrl: "/images/cases/nike.jpg",
  },
  {
    zIndex: 1,
    offsetX: 4,
    offsetY: -105,
    scale: 0.67,
    name: "realtor.com",
    caseLink: "https://nextjs.org/showcase/realtor",
    imgUrl: "/images/cases/realtor.jpg",
  },
];
