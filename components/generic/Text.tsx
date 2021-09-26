import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const BasicText = styled.div`
  margin: 0;
  padding: 0;
`;

const DivComponent = BasicText;
const SpanComponent = styled(BasicText.withComponent("span"))``;
const HeadingOneComponent = styled(BasicText.withComponent("h1"))``;
const ParagraphComponent = styled(BasicText.withComponent("p"))``;
const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
const parseNumberWithEm = (v: number | undefined) =>
  v != null ? `${v}em` : undefined;
export type TextProps = {
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  hoverColor?: string; //todo
  hoverUnderlined?: boolean;
  textAlign?:"left" | "right" | "center";
};
//genStyle > genCSS
const genStyle = (props: TextProps): React.CSSProperties => {
  return {
    fontSize: parseNumberWithPx(props.fontSize),
    fontWeight: props.fontWeight,
    lineHeight: parseNumberWithPx(props.lineHeight),
    letterSpacing: parseNumberWithEm(props.letterSpacing),
    textAlign:props.textAlign
  };
};
const genCSS = (props: TextProps) => css`
  color: ${props.color || "currentColor"};
  &:hover {
    color: ${props.hoverColor || null};
    text-decoration: ${props.hoverUnderlined ? "underline" : null};
  }
`;
export function Div(props: TextProps) {
  return (
    <DivComponent style={genStyle(props)} css={genCSS(props)}>
      {props.children}
    </DivComponent>
  );
}
export function Span(props: TextProps) {
  return (
    <SpanComponent style={genStyle(props)} css={genCSS(props)}>
      {props.children}
    </SpanComponent>
  );
}
export function HeadingOne(props: TextProps) {
  return (
    <HeadingOneComponent style={genStyle(props)} css={genCSS(props)}>
      {props.children}
    </HeadingOneComponent>
  );
}
export function Paragraph(props: TextProps) {
  return (
    <ParagraphComponent style={genStyle(props)} css={genCSS(props)}>
      {props.children}
    </ParagraphComponent>
  );
}
