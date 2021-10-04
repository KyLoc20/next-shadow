import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import CaseStudyEntranceCard from "./CaseStudyEntranceCard";
import FamousCaseCard from "./FamousCaseCard";
const Component = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0;
  background: rgb(250, 250, 250);
  border-top: 1px solid rgb(234, 234, 234);
  border-bottom: 1px solid rgb(234, 234, 234);
`;
type WhoUsingNextCardProps = {
  children?: React.ReactNode;
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
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
  width: 100%;
  position: absolute;
  top: -36px;
`;
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
  return (
    <Component>
      <EntranceWrapper>
        <CaseStudyEntranceCard></CaseStudyEntranceCard>
      </EntranceWrapper>

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
        <CaseWrapper>
          <FamousCaseCard
            zIndex={1}
            offsetX={-4}
            offsetY={-105}
            scale={0.67}
            name="TikTok"
            caseLink="https://nextjs.org/showcase/tiktok"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Ftiktok.b46d47043f48fefb101b741136763e42.jpg&w=750&q=75"
          />
          <FamousCaseCard
            zIndex={2}
            offsetX={-27}
            offsetY={-70}
            scale={0.78}
            name="Netflix Jobs"
            caseLink="https://nextjs.org/showcase/netflix-jobs"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fshowcases-02.ca90f0ed75992c35cbe82f09196dcbb8.jpg&w=750&q=75"
          />
          <FamousCaseCard
            zIndex={3}
            offsetX={-25}
            offsetY={-25}
            scale={0.89}
            name="Twitch"
            caseLink="https://nextjs.org/showcase/twitch"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Ftwitch.0a0cf1a210a6d14c5e56606fc46548be.jpg&w=750&q=75"
          />
          <FamousCaseCard
            zIndex={4}
            offsetX={0}
            offsetY={0}
            scale={1}
            name="Github Copilot"
            caseLink="https://nextjs.org/showcase/github"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fgithub.25408a70cd435a81ae5589fe2ba88a5b.jpg&w=640&q=75"
          />
          <FamousCaseCard
            zIndex={3}
            offsetX={25}
            offsetY={-25}
            scale={0.89}
            name="Hulu"
            caseLink="https://nextjs.org/showcase/hulu"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fshowcases-17.ad9f2d6157b25ac425e09b886450fe52.jpg&w=750&q=75"
          />
          <FamousCaseCard
            zIndex={2}
            offsetX={27}
            offsetY={-70}
            scale={0.78}
            name="Nike"
            caseLink="https://nextjs.org/showcase/nike"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Fnike.8c822454ca2d283f18901bf7bba372dd.jpg&w=750&q=75"
          />
          <FamousCaseCard
            zIndex={1}
            offsetX={4}
            offsetY={-105}
            scale={0.67}
            name="realtor.com"
            caseLink="https://nextjs.org/showcase/realtor"
            imgUrl="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstatic%2Fimages%2Fshowcase-thumbnails%2Frealtor.541e0b4c4405777419a6b95e9363ee7b.jpg&w=750&q=75"
          />
        </CaseWrapper>
        <ViewShowcaseButton>View Showcase</ViewShowcaseButton>
      </Content>
    </Component>
  );
}
