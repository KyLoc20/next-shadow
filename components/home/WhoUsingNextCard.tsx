import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import CaseStudyEntranceCard from "./CaseStudyEntranceCard";
import FamousCaseCard from "./FamousCaseCard";
type WhoUsingNextCardProps = {
  children?: React.ReactNode;
};
export default function WhoUsingNextCard(props: WhoUsingNextCardProps) {
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
  const caseItems = FamousCases.map((item, index) => (
    <FamousCaseCard
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
      {/* <EntranceWrapper>
        <CaseStudyEntranceCard />
      </EntranceWrapper> */}
      <CaseStudyEntranceCard />
      <Content>
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
const Component = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgb(250, 250, 250);
  border-top: 1px solid rgb(234, 234, 234);
  border-bottom: 1px solid rgb(234, 234, 234);
`;
const Content = styled.div`
  //for content
  width: 100%;
  overflow: hidden;

  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin: 16px 0;
`;
const SubTitle = styled.div`
  margin-bottom: 48px;
`;
const CaseWrapper = styled.div`
  display: flex;
  z-index: 10;
  overflow: hidden;
  justify-content: center;
  width: 100%;
  margin: 64px 0 32px;
  padding-top: 50px;
  height: 185px;
`;
const EntranceWrapper = styled.div`
  //for content
  width: 100%;
  overflow: hidden;

  position: relative;
  margin-top: -36px;
  margin-bottom: 4rem;
`;
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
