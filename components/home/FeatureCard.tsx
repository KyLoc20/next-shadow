import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
type FeatureProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  docLink: string;
};
export default function FeatureCard(props: FeatureProps) {
  const [TitleText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_highlight18
  );
  const [DescriptionText] = useCustomText(
    HTMLTag.span,
    CustomTextType.Content_normal14
  );
  const [LinkText] = useCustomText(HTMLTag.span, CustomTextType.Link_primary14);
  return (
    <Component>
      <Link href={props.docLink}>
        <Content>
          <Title>
            <TitleText>{props.title}</TitleText>
          </Title>
          <Description>
            <DescriptionText>{props.description}</DescriptionText>
          </Description>
          <Documentation className="doc">
            <Link href={props.docLink}>
              <LinkText>Documentation →</LinkText>
            </Link>
          </Documentation>
        </Content>
      </Link>
    </Component>
  );
}
const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // width: 265px;
  // height: 122px;
  //paper
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
    border: 1px solid transparent;
  }
`;
const Content = styled.div`
  padding: 24px;
  //for content
  width: 100%;
  overflow: hidden;
`;
const Title = styled.div``;
const Description = styled.div`
  margin: 14px 0;
`;
const Documentation = styled.div``;
