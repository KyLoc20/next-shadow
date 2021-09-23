import * as React from "react";
import { Button, ButtonProps } from "@/ui/Button";
import { Text, TextProps } from "@/components/generic/Text";
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
    const RenderContentText = (props: TextProps) => (
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
};
