import * as React from "react";
import * as Text from "@/components/generic/Text";
import { sxProps, parseLengthValue } from "@/system/sx";
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
  whichPreset: CustomTextType,
  sx?: sxProps
) {
  const presetTextProps = CUSTOM_FACTORY[whichPreset];
  const TextComponent = TEXT_FACTORY[tagType];
  const renderText = (props: Text.TextProps) => {
    return (
      <TextComponent
        fontSize={presetTextProps.fontSize}
        fontWeight={presetTextProps.fontWeight}
        textAlign={presetTextProps.textAlign}
        lineHeight={presetTextProps.lineHeight}
        letterSpacing={presetTextProps.letterSpacing}
        color={presetTextProps.color}
        hoverColor={presetTextProps.hoverColor}
        hoverUnderlined={presetTextProps.hoverUnderlined}
        sx={sx}
      >
        {props.children}
      </TextComponent>
    );
  };
  return [renderText];
}
// function useCustomText(
//   tagType: HTMLTag,
//   which: CustomTextType,
//   textAlign?: TextAlign
// ) {
//   const customTextProps = CUSTOM_FACTORY[which];
//   const TextComponent = TEXT_FACTORY[tagType];
//   const renderText = (props: Text.TextProps) => {
//     return (
//       <TextComponent
//         fontSize={customTextProps.fontSize}
//         fontWeight={customTextProps.fontWeight}
//         lineHeight={customTextProps.lineHeight}
//         letterSpacing={customTextProps.letterSpacing}
//         color={customTextProps.color}
//         hoverColor={customTextProps.hoverColor}
//         hoverUnderlined={customTextProps.hoverUnderlined}
//         textAlign={textAlign}
//       >
//         {props.children}
//       </TextComponent>
//     );
//   };
//   return [renderText];
// }
export { HTMLTag, CustomTextType, useCustomText };
type CustomTextProps = Text.TextLocalProps;
enum CustomTextType {
  //theme default dark light primary white
  Link_light16,
  Link_navigation16,
  Link_navigation14,
  Link_white16,

  Title_main,
  Title_main32,
  Title_main16,

  Description_light20,
  Description_light16,

  Content_normal14,
  Content_highlight14,
  Content_normal16,
  Badge,
  Content_highlight18,

  //checked
  Link_primary14,
  Link_light14,

  Title_default14,
  Title_default32,
  Title_lightB16,
  Title_default100,
  Title_default48,

  Content_light12,
  Content_default14,
  Content_default16,
  Content_default18_bold,
}
type CustomTextFactory = {
  [key in CustomTextType]: CustomTextProps;
};
//default "#111111"
//
//primary "#067df7"
//light "8c8c8c"
//lightB "696969"
const CUSTOM_FACTORY: CustomTextFactory = {
  [CustomTextType.Link_light16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969", //rgb(105, 105, 105)
  },
  [CustomTextType.Link_navigation16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969", //rgb(105, 105, 105)
  },

  [CustomTextType.Link_white16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    lineHeight: 26,
  },

  [CustomTextType.Title_main]: {
    fontSize: 100,
    fontWeight: 800,
    lineHeight: 100,
    letterSpacing: -0.05,
    color: "#111111", //rgb(17, 17, 17)
  },

  [CustomTextType.Description_light20]: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
    color: "#666666",
  },
  [CustomTextType.Description_light16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#666666",
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
  //Title
  [CustomTextType.Title_default100]: {
    fontSize: 100,
    fontWeight: 800,
    letterSpacing: -0.05,
    color: "#111111", //rgb(17, 17, 17)
  },
  [CustomTextType.Title_default48]: {
    fontSize: 48,
    fontWeight: 800,
    letterSpacing: -0.06,
    color: "#111111", //rgb(17, 17, 17)
  },
  [CustomTextType.Title_default14]: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111111",
  },
  [CustomTextType.Title_default32]: {
    fontSize: 32,
    fontWeight: 700,
    color: "#111111",
  },
  [CustomTextType.Title_lightB16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#696969",
  },
  //Content
  [CustomTextType.Content_default14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Content_default16]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Content_default18_bold]: {
    fontSize: 18,
    fontWeight: 600,
    color: "#111111",
  },
  [CustomTextType.Content_light12]: {
    fontSize: 12.6,
    fontWeight: 400,
    color: "#8c8c8c",
  },
  //Link
  [CustomTextType.Link_primary14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#067df7",
    hoverColor: "rgb(104, 181, 251)",
    hoverUnderlined: true,
  },
  [CustomTextType.Link_light14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#8c8c8c",
    hoverColor: "#111111",
  },

  //deprecated
  [CustomTextType.Content_highlight18]: {
    fontSize: 18,
    fontWeight: 600,
    color: "#111111",
  },
  [CustomTextType.Content_normal14]: {
    fontSize: 14,
    fontWeight: 400,
    color: "#111111",
  },
  [CustomTextType.Link_navigation14]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 23,
    color: "#8c8c8c",
    hoverColor: "#111;",
  },
  [CustomTextType.Title_main16]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    color: "#696969",
  },
  [CustomTextType.Title_main32]: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 42,
    color: "#111111",
  },
};
