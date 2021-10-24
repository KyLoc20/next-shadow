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
  const [Title] = useCustomText(HTMLTag.div, CustomTextType.Title_default32, {
    lineHeight: "1.2",
    mb: "12.8px",
  });
  const [Description] = useCustomText(
    HTMLTag.div,
    CustomTextType.Content_default16,
    {
      lineHeight: "1.8",
    }
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
            Next.js is getting better every day — don’t miss out on all the
            action.
          </Title>
          <Description>
            Join the Next.js newsletter and stay updated on new releases and
            features, guides, and case studies.
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

const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 992px;
  margin: 100px auto;
`;
const Content = styled.div`
  //for content
  width: 100%;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 0.8fr;
  padding: 32px 0;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

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
