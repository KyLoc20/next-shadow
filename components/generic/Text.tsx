import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { createStyleComponent, sxProps, parseLengthValue } from "@/system/sx";

// export type TextProps = {
//   children?: React.ReactNode;
//   fontSize?: number;
//   fontWeight?: number;
//   lineHeight?: number;
//   letterSpacing?: number;
//   color?: string;
//   hoverColor?: string; //todo
//   hoverUnderlined?: boolean;
//   textAlign?: "left" | "right" | "center";
// } & sxProps;
type LengthValue = number | string | "inherit";
export type TextLocalProps = {
  fontSize?: LengthValue; //font-size
  fontWeight?: number; //font-weight
  textAlign?: "left" | "right" | "center" | "start" | "end" | "justify"; //text-align
  lineHeight?: LengthValue; //line-height
  letterSpacing?: LengthValue; //letter-spacing
  color?: string;
  hoverColor?: string; //todo
  hoverUnderlined?: boolean;
};
export type TextProps = {
  children?: React.ReactNode;
  sx?: sxProps;
} & TextLocalProps;
//genStyle > genCSS
// const genStyle = (props: TextProps): React.CSSProperties => {
//   return {
//     fontSize: parseNumberWithPx(props.fontSize),
//     fontWeight: props.fontWeight,
//     lineHeight: parseNumberWithPx(props.lineHeight),
//     letterSpacing: parseNumberWithEm(props.letterSpacing),
//     textAlign: props.textAlign,
//   };
// };
const genCSS = (props: TextProps) => css`
  color: ${props.color || "currentColor"};
  &:hover {
    color: ${props.hoverColor || null};
    text-decoration: ${props.hoverUnderlined ? "underline" : null};
  }
`;
const genStyledProps = (props: TextProps) => {
  const { fontSize, fontWeight, lineHeight, letterSpacing, textAlign } = props;
  const local: TextLocalProps = {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
  };
  const sx = props.sx || {};
  return {
    fontSize: parseLengthValue(local.fontSize),
    fontWeight: local.fontWeight,
    lineHeight: parseLengthValue(local.lineHeight),
    letterSpacing: parseLengthValue(local.letterSpacing),
    textAlign: local.textAlign,
    ...sx,
  };
};
export function Div(props: TextProps) {
  return (
    <DivComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </DivComponent>
  );
}
export function Span(props: TextProps) {
  return (
    <SpanComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </SpanComponent>
  );
}
export function HeadingOne(props: TextProps) {
  return (
    <HeadingOneComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </HeadingOneComponent>
  );
}
export function HeadingTwo(props: TextProps) {
  return (
    <HeadingTwoComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </HeadingTwoComponent>
  );
}
export function HeadingThree(props: TextProps) {
  return (
    <HeadingThreeComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </HeadingThreeComponent>
  );
}
export function HeadingFour(props: TextProps) {
  return (
    <HeadingFourComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </HeadingFourComponent>
  );
}
export function Paragraph(props: TextProps) {
  return (
    <ParagraphComponent {...genStyledProps(props)} css={genCSS(props)}>
      {props.children}
    </ParagraphComponent>
  );
}
const BasicText = styled.div`
  margin: 0;
  padding: 0;
`;
const StyledText = createStyleComponent<sxProps>(BasicText);
// const DivComponent = BasicText;
// const SpanComponent = styled(BasicText.withComponent("span"))``;
// const HeadingOneComponent = styled(BasicText.withComponent("h1"))``;
// const HeadingTwoComponent = styled(BasicText.withComponent("h2"))``;
// const HeadingThreeComponent = styled(BasicText.withComponent("h3"))``;
// const HeadingFourComponent = styled(BasicText.withComponent("h4"))``;
// const ParagraphComponent = styled(BasicText.withComponent("p"))``;

const DivComponent = StyledText.withComponent("div");
const SpanComponent = StyledText.withComponent("span");
const HeadingOneComponent = StyledText.withComponent("h1");
const HeadingTwoComponent = StyledText.withComponent("h2");
const HeadingThreeComponent = StyledText.withComponent("h3");
const HeadingFourComponent = StyledText.withComponent("h4");
const ParagraphComponent = StyledText.withComponent("p");

const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
const parseNumberWithEm = (v: number | undefined) =>
  v != null ? `${v}em` : undefined;
