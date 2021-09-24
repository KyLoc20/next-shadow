import * as React from "react";
import styled from "@emotion/styled";
const BasicText = styled.div`
  margin: 0;
  padding: 0;
  color: currentColor;
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
};
const genStyle = (props: TextProps): React.CSSProperties => {
  return {
    fontSize: parseNumberWithPx(props.fontSize),
    fontWeight: props.fontWeight,
    lineHeight: parseNumberWithPx(props.lineHeight),
    letterSpacing: parseNumberWithEm(props.letterSpacing),
    color: props.color,
  };
};
export function Div(props: TextProps) {
  return <DivComponent style={genStyle(props)}>{props.children}</DivComponent>;
}
export function Span(props: TextProps) {
  return (
    <SpanComponent style={genStyle(props)}>{props.children}</SpanComponent>
  );
}
export function HeadingOne(props: TextProps) {
  return (
    <HeadingOneComponent style={genStyle(props)}>
      {props.children}
    </HeadingOneComponent>
  );
}
export function Paragraph(props: TextProps) {
  return (
    <ParagraphComponent style={genStyle(props)}>
      {props.children}
    </ParagraphComponent>
  );
}
