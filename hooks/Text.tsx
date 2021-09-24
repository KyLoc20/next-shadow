import * as React from "react";
import * as Text from "@/components/generic/Text";
enum HTMLTag {
  div,
  span,
}
type TextTagFactory = {
  [key in HTMLTag]: (props: Text.TextProps) => JSX.Element;
};

const TEXT_FACTORY: TextTagFactory = {
  [HTMLTag.div]: Text.Div,
  [HTMLTag.span]: Text.Span,
};
function useCustomText(tagType: HTMLTag, which: CustomTextType) {
  const customTextProps = CUSTOM_FACTORY[which];
  const TextComponent = TEXT_FACTORY[tagType];
  const renderText = (props: Text.TextProps) => {
    return (
      <TextComponent
        fontSize={customTextProps.fontSize}
        fontWeight={customTextProps.fontWeight}
        lineHeight={customTextProps.lineHeight}
        letterSpacing={customTextProps.letterSpacing}
        color={customTextProps.color}
        hoverColor={customTextProps.hoverColor}
      >
        {props.children}
      </TextComponent>
    );
  };
  return [renderText];
}
export { HTMLTag, CustomTextType, useCustomText };
type CustomTextProps = {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  hoverColor?: string;
};
enum CustomTextType {
  Link1, //navigation height26
  Title_main,
  Description_main,
  Content_normal14,
  Content_highlight14,
  Content_normal16,
  Badge,
}
type CustomTextFactory = {
  [key in CustomTextType]: CustomTextProps;
};
const CUSTOM_FACTORY: CustomTextFactory = {
  [CustomTextType.Link1]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969",
  },
  [CustomTextType.Title_main]: {
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 100,
    letterSpacing: -0.05,
    color: "#111111",
  },
  [CustomTextType.Description_main]: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
    color: "#666666",
  },
  [CustomTextType.Content_normal14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Content_normal16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
    color: "#696969",
  },
  [CustomTextType.Content_highlight14]: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111111",
  },
  [CustomTextType.Badge]: {
    fontSize: 12.6,
    fontWeight: 600,
    lineHeight: 21,
    color: "#fff",
  },
};
