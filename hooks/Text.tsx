import * as React from "react";
import * as Text from "@/components/generic/Text";
enum HTMLTag {
  div,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
}
type TextTagFactory = {
  [key in HTMLTag]: (props: Text.TextProps) => JSX.Element;
};
type TextAlign = "left" | "right" | "center";
const TEXT_FACTORY: TextTagFactory = {
  [HTMLTag.div]: Text.Div,
  [HTMLTag.span]: Text.Span,
  [HTMLTag.p]: Text.Paragraph,
  [HTMLTag.h1]: Text.HeadingOne,
  [HTMLTag.h2]: Text.HeadingTwo,
  [HTMLTag.h3]: Text.HeadingThree,
  [HTMLTag.h4]: Text.HeadingFour,
};
function useCustomText(
  tagType: HTMLTag,
  which: CustomTextType,
  textAlign?: TextAlign
) {
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
        hoverUnderlined={customTextProps.hoverUnderlined}
        textAlign={textAlign}
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
  hoverUnderlined?: boolean;
};
enum CustomTextType {
  //theme default dark light primary
  Link_navigation16,
  Link_navigation14,
  Link_primary14,
  Title_main,
  Title_main32,
  Title_main16,
  Title_default14,
  Description_main,
  Content_light12,
  Content_normal14,
  Content_highlight14,
  Content_normal16,
  Content_default16,
  Content_highlight18,
  Badge,
}
type CustomTextFactory = {
  [key in CustomTextType]: CustomTextProps;
};
const CUSTOM_FACTORY: CustomTextFactory = {
  [CustomTextType.Link_navigation16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969", //rgb(105, 105, 105)
  },
  [CustomTextType.Link_navigation14]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 23,
    color: "#8c8c8c",
    hoverColor: "#111;",
  },
  [CustomTextType.Link_primary14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#067df7",
    hoverColor: "rgb(104, 181, 251)",
    hoverUnderlined: true,
  },
  [CustomTextType.Title_main]: {
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 100,
    letterSpacing: -0.05,
    color: "#111111", //rgb(17, 17, 17)
  },
  [CustomTextType.Title_main32]: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 42,
    color: "#111111",
  },
  [CustomTextType.Title_main16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969",
  },
  [CustomTextType.Title_default14]: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111111",
  },
  [CustomTextType.Description_main]: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
    color: "#666666",
  },
  [CustomTextType.Content_light12]: {
    fontSize: 12.6,
    fontWeight: 400,
    color: "#8c8c8c",
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

  [CustomTextType.Content_default16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 28,
    color: "#111111",
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
  [CustomTextType.Content_highlight18]: {
    fontSize: 18,
    fontWeight: 600,
    color: "#111111",
  },
};
