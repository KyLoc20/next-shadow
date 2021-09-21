import * as React from "react";
import { Button, ButtonProps } from "@/ui/Button";
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
};
export enum CustomButtonType {
  Primary1,
}
type CustomButtonFactory = {
  [key in CustomButtonType]: CustomButtonProps;
};
const FACTORY: CustomButtonFactory = {
  [CustomButtonType.Primary1]: {
    variant: "plain",
    height: 36,
    padding: "4px 16px",
    backgroundColor: "rgba(0, 118, 255, 0.9)",
    borderRadius: 7,
  },
};
export function useCustomButton(which: CustomButtonType) {
  const customProps = FACTORY[which];
  const RenderButton = (props: ButtonProps) => (
    <Button
      variant={customProps.variant}
      width={customProps.width}
      height={customProps.height}
      padding={customProps.padding}
      backgroundColor={customProps.backgroundColor}
      hoverBackgroundColor={customProps.hoverBackgroundColor}
      borderColor={customProps.borderColor}
      hoverBorderColor={customProps.hoverBorderColor}
      contentColor={customProps.contentColor}
      hoverContentColor={customProps.hoverContentColor}
      borderRadius={customProps.borderRadius}
      depressed={customProps.depressed || true}
      rippleDisabled={customProps.rippleDisabled}
      disabled={customProps.disabled}
      tile={customProps.tile}
    >
      {props.children}
    </Button>
  );
  return [RenderButton];
}
