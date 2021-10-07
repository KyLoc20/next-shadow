import * as React from "react";
import { Button, ButtonProps } from "@/ui/Button";
import * as Text from "@/components/generic/Text";
type ButtonVariant = "plain" | "text" | "outlined";
type ButtonColor = string;
type ButtonPadding = string;
type CustomButtonProps = {
  variant: ButtonVariant;
  width?: number;
  height?: number;
  borderRadius?: number;
  padding?: ButtonPadding;
  backgroundColor?: ButtonColor;
  hoverBackgroundColor?: ButtonColor;
  borderColor?: ButtonColor;
  hoverBorderColor?: ButtonColor;
  contentColor?: ButtonColor;
  hoverContentColor?: ButtonColor;
  boxShadow?: string;
  hoverBoxShadow?: string;
  depressed?: boolean;
  rippleDisabled?: boolean;
  disabled?: boolean;
  tile?: boolean;
  content?: CustomButtonContentProps;
};
type CustomButtonContentProps = {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  //the color is decided by contentColor&hoverContentColor from [CustomButtonProps]
};
const genPropsForCustomButton = (
  props: CustomButtonProps
): CustomButtonProps => {
  return {
    variant: props.variant,
    width: props.width,
    height: props.height,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    hoverBackgroundColor: props.hoverBackgroundColor,
    borderColor: props.borderColor,
    hoverBorderColor: props.hoverBorderColor,
    contentColor: props.contentColor,
    hoverContentColor: props.hoverContentColor,
    boxShadow: props.boxShadow,
    hoverBoxShadow: props.hoverBoxShadow,
    borderRadius: props.borderRadius,
    depressed: props.depressed || true,
    rippleDisabled: props.rippleDisabled,
    disabled: props.disabled,
    tile: props.tile,
  };
};
function useCustomButton(which: CustomButtonType) {
  const customProps = FACTORY[which];
  if (customProps.content != null) {
    const customContentProps = customProps.content;
    const RenderContentText = (props: Text.TextProps) => (
      <Text.Span
        fontSize={customContentProps.fontSize}
        fontWeight={customContentProps.fontWeight}
        lineHeight={customContentProps.lineHeight}
        letterSpacing={customContentProps.letterSpacing}
      >
        {props.children}
      </Text.Span>
    );
    const renderButtonWithContent = (props: ButtonProps) => (
      <Button {...genPropsForCustomButton(customProps)}>
        <RenderContentText>{props.children}</RenderContentText>
      </Button>
    );
    return [renderButtonWithContent];
  } else {
    const renderButton = (props: ButtonProps) => (
      <Button {...genPropsForCustomButton(customProps)}>
        {props.children}
      </Button>
    );
    return [renderButton];
  }
}
export { useCustomButton, CustomButtonType };
enum CustomButtonType {
  Navigation_h36,
  Content_h45_primary,
  Content_h45_plain,
  Content_h34_primary_text,
  Content_h45_default,
}
type CustomButtonFactory = {
  [key in CustomButtonType]: CustomButtonProps;
};
const FACTORY: CustomButtonFactory = {
  [CustomButtonType.Navigation_h36]: {
    variant: "outlined",
    height: 36,
    padding: "4px 16px",
    borderRadius: 7,
    backgroundColor: "rgba(0, 118, 255, 0.9)",
    hoverBackgroundColor: "transparent",
    borderColor: "rgba(0,118,255,0.9)",
    contentColor: "#fff",
    hoverContentColor: "rgba(0,118,255,0.9)",
    rippleDisabled: true,
    content: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 26,
    },
  },
  [CustomButtonType.Content_h45_primary]: {
    variant: "plain",
    height: 45,
    padding: "0 56px",
    borderRadius: 7,
    backgroundColor: "rgb(0, 112, 243)",
    hoverBackgroundColor: "rgba(0, 118, 255, 0.9)",
    boxShadow: "rgba(0,118,255,0.39) 0px 4px 14px 0px",
    hoverBoxShadow: "rgba(0,118,255,0.23) 0px 6px 20px",
    contentColor: "#fff",
    rippleDisabled: true,
    content: {
      fontSize: 16,
      fontWeight: 400,
    },
  },

  [CustomButtonType.Content_h45_default]: {
    variant: "outlined",
    width: 240,
    height: 45,
    padding: "4px 8px",
    borderRadius: 7,
    backgroundColor: "#000",
    hoverBackgroundColor: "#fff",
    contentColor: "#fff",
    hoverContentColor: "#000",
    rippleDisabled: true,
    content: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 26,
    },
  },
  [CustomButtonType.Content_h45_plain]: {
    variant: "plain",
    height: 45,
    padding: "0 56px",
    borderRadius: 7,
    backgroundColor: "rgba(255, 255, 255, 1)",
    hoverBackgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "rgba(0,0,0,0.1) 0px 4px 14px 0px",
    hoverBoxShadow: "rgba(93,93,93,0.23) 0px 6px 20px",
    contentColor: "rgb(105, 105, 105)",
    rippleDisabled: true,
    content: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  [CustomButtonType.Content_h34_primary_text]: {
    variant: "text",
    height: 34,
    padding: "4px 8px",
    borderRadius: 7,
    hoverBackgroundColor: "rgba(0,118,255,0.1)",
    contentColor: "#0070f3",
    hoverContentColor: "rgba(0,118,255,0.9)",
    rippleDisabled: true,
    content: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
};
