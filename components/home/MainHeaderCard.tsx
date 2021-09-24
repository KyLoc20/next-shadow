import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 992px;
  height: 455px;
  margin: 0 auto;
  padding: 120px 16px 30px;
`;
type MainHeaderProps = {
  children?: React.ReactNode;
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;
const Title = styled.div`
  margin-bottom: 30px;
`;
const Description = styled.div`
  margin-bottom: 40px;
`;
const ButtonWarpper = styled.div`
  margin-bottom: 30px;
  button:not(:last-of-type) {
    margin-right: 20px;
  }
`;
const OtherInfo = styled.div``;
const License = styled.span`
  padding: 0 8px;
`;
export default function MainHeaderCard(props: MainHeaderProps) {
  const [TitleText] = useCustomText(HTMLTag.div, CustomTextType.Title_main);
  const [DescriptionText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Description_main
  );
  const [StartLearningButton] = useCustomButton(
    CustomButtonType.Content_h45_primary
  );
  const [DocumentationButton] = useCustomButton(
    CustomButtonType.Content_h45_plain
  );
  const [LicenseText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_normal16
  );
  const [GithubButton] = useCustomButton(
    CustomButtonType.Content_h34_primary_text
  );
  return (
    <Component>
      <Content>
        <Title>
          <TitleText>The React Framework for Production</TitleText>
        </Title>
        <Description>
          <DescriptionText>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more. No
            config needed.
          </DescriptionText>
        </Description>
        <ButtonWarpper>
          <StartLearningButton>Start Learning</StartLearningButton>
          <DocumentationButton>Documentation</DocumentationButton>
        </ButtonWarpper>
        <OtherInfo>
          <Link href="https://github.com/vercel/next.js/blob/canary/license.md">
            <License>
              <LicenseText>License: MIT</LicenseText>
            </License>
          </Link>

          <GithubButton>Github</GithubButton>
        </OtherInfo>
      </Content>
    </Component>
  );
}
// The React Framework
// for Production
