import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";

type LearnNextProps = {
  children?: React.ReactNode;
};
export default function LearnNextCard(props: LearnNextProps) {
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
  const [StartButton] = useCustomButton(CustomButtonType.Content_h45_primary);
  return (
    <Component>
      <Content>
        <Title>
          <TitleText>Learn Next.js</TitleText>
        </Title>
        <SubTitle>
          <SubTitleText>
            Learn Next.js step-by-step and earn points ✨.
          </SubTitleText>
        </SubTitle>
        <Figure>
          <Link href="https://nextjs.org/learn/basics/create-nextjs-app">
            <FigureImage></FigureImage>
          </Link>
        </Figure>
        <StartButton>Get Started</StartButton>
      </Content>
    </Component>
  );
}
const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; //width: 1024px;
`;
const Content = styled.div`
  //for content
  width: 100%;
  overflow: hidden;

  display: flex;
  padding: 100px 16px;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin-bottom: 16px;
`;
const SubTitle = styled.div`
  margin-bottom: 60px;
`;
const Figure = styled.div`
  display: flex;
  //for content
  width: 100%;
  overflow: hidden;

  justify-content: center;
  margin-bottom: 60px;
  //paper
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`;
const FigureImage = styled.div`
  width: 926px;
  height: 495px;
  background: url(https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Flearn.png&w=1920&q=75);
  background-size: contain;
`;
