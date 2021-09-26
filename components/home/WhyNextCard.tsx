import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import FeatureCard from "./FeatureCard";
const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 992px;
  height: 1237px;
  margin: 0 auto;
  padding: 100px 16px;
`;
type WhyNextProps = {
  children?: React.ReactNode;
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Title = styled.div`
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  margin-bottom: 40px;
`;

export default function WhyNextCard(props: WhyNextProps) {
  const [TitleText] = useCustomText(HTMLTag.div, CustomTextType.Title_main32);
  const [SubTitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main16
  );
  const f1 = "Image Optimization";
  const f2 = "<Image> and Automatic Image Optimization with instant builds.";
  return (
    <Component>
      <Content>
        <Title>
          <TitleText>Why Next.js</TitleText>{" "}
        </Title>
        <SubTitle>
          <SubTitleText>
            The world’s leading companies use and love Next.js
          </SubTitleText>
        </SubTitle>
        <FeatureCard
          title={f1}
          description={f2}
          docLink="https://nextjs.org/docs/basic-features/image-optimization"
        ></FeatureCard>
      </Content>
    </Component>
  );
}
