import * as React from "react";
import styled from "@emotion/styled";
const BasicText = styled.div`
  margin: 0;
  padding: 0;
  color: currentColor;
`;
const Div = BasicText;
const Span = styled(BasicText.withComponent("span"))``;
const HeadingOne = styled(BasicText.withComponent("h1"))``;
const Paragraph = styled(BasicText.withComponent("p"))``;
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
export function Text(props: TextProps) {
  return <Div style={genStyle(props)}>{props.children}</Div>;
}
Text.Div = function (props: TextProps) {
  return <Div style={genStyle(props)}>{props.children}</Div>;
};
Text.Span = function (props: TextProps) {
  return <Span style={genStyle(props)}>{props.children}</Span>;
};
Text.HeadingOne = function (props: TextProps) {
  return <HeadingOne style={genStyle(props)}>{props.children}</HeadingOne>;
};
Text.Paragraph = function (props: TextProps) {
  return <Paragraph style={genStyle(props)}>{props.children}</Paragraph>;
};
