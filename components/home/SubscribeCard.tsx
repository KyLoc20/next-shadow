import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
import * as SVG from "@/components/generic/SVG";
type SubscribeProps = {
  children?: React.ReactNode;
};
export default function SubscribeCard(props: SubscribeProps) {
  const [TitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main32,
    "left"
  );
  const [DescriptionText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Content_default16,
    "left"
  );
  const [SubscribeButton] = useCustomButton(
    CustomButtonType.Content_h45_default
  );

  const EmailSVG = {
    fill: "none",
    path: [{ d: "M1.175 1.135L7.5 5.5" }, { d: "M14.04.912L7.5 5.5" }],
    rect: [{ width: 14, height: 10, cx: 0.5, cy: 0.5, rx: 2 }],
  };

  return (
    <Component>
      <Content>
        <Wrapper>
          <Title>
            <TitleText>
              Next.js is getting better every day — don’t miss out on all the
              action.
            </TitleText>
          </Title>
          <Description>
            <DescriptionText>
              Join the Next.js newsletter and stay updated on new releases and
              features, guides, and case studies.
            </DescriptionText>
          </Description>
        </Wrapper>
        <Wrapper>
          <Form>
            <EmailInput htmlFor="email-input">
              <svg width={15} height={15} viewBox="0 0 15 11">
                <SVG.Group {...EmailSVG}></SVG.Group>
              </svg>
              <input
                type="text"
                id="email-input"
                placeholder="you@domain.com"
              />
            </EmailInput>
            <SubscribeButton>Subscribe</SubscribeButton>
          </Form>
        </Wrapper>
      </Content>
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  padding: 32px 232px;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const Title = styled.div`
  margin-bottom: 12.8px;
`;
const Description = styled.div``;
const Form = styled.div`
  width: 240px;
  height: 90px;
`;
const EmailInput = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #999;
  width: 100%;
  height: 39px;
  margin-bottom: 10px;
  transition: border 100ms ease-in;
  svg {
    margin: 0 15px;
  }
  input {
    height: 37px;
    flex: 1;
    padding: 4px 0;
  }
  &:focus-within {
    border: 1px solid #333;
  }
`;
