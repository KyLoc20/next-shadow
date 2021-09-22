import * as React from "react";
import { Text, TextProps } from "@/components/generic/Text";
enum HTMLTag {
  div,
  span,
}
type TextComponent = (props: TextProps) => JSX.Element;
type TextTagFactory = {
  [key in HTMLTag]: TextComponent;
};

const TEXT_FACTORY: TextTagFactory = {
  [HTMLTag.div]: Text.Div,
  [HTMLTag.span]: Text.Span,
};
type CustomTextProps = {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  color: string;
  hoverColor: string;
};
function useCustomText(tagType: HTMLTag, props: CustomTextProps) {
  const TextComponent = TEXT_FACTORY[tagType];
  const renderText = (props: TextProps) => {
    <TextComponent>{props.children}</TextComponent>;
  };
  return [renderText];
}
export { HTMLTag, useCustomText };
