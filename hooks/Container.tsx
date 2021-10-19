import * as React from "react";
import { default as Box, BoxProps } from "@/components/generic/Box";
import { default as Stack, StackProps } from "@/components/generic/Stack";
type CustomBoxProps = {
  vertical?: boolean;
  overflow?: string; //by default "hidden"
  w?: number | string; //by default "100%"
  h?: number | string; //"100%"
  p?: string;
  m?: string;
  minW?: number | string;
  maxW?: number | string;
  minH?: number | string;
  maxH?: number | string;
  JC?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  AI?: "stretch" | "flex-start" | "center" | "flex-end";
};

const genPropsForCustomButton = (props: CustomBoxProps): BoxProps => {
  return {
    vertical: props.vertical,
    overflow: props.overflow,
    width: props.w,
    height: props.h,
    padding: props.p,
    margin: props.m,
    minWidth: props.minW,
    maxWidth: props.maxW,
    minHeight: props.minH,
    maxHeight: props.maxH,
    justifyContent: props.JC,
    alignItems: props.AI,
  };
};
function useCustomBox(custom: CustomBoxProps) {
  const renderBox = (props: BoxProps) => (
    <Box {...genPropsForCustomButton(custom)}>{props.children}</Box>
  );
  return [renderBox];
}
type CustomStackProps = {
  p?: string; //padding
  ep?: string; //eachPadding
  m?: string; //margin
  em?: string; //eachMargin
};
const genPropsForCustomStack = (props: CustomStackProps): StackProps => {
  return {
    padding: props.p,
    eachPadding: props.ep,
    margin: props.m,
    eachMargin: props.em,
  };
};
function useCustomStack(custom: CustomStackProps) {
  const renderStack = (props: StackProps) => (
    <Stack {...genPropsForCustomStack(custom)}>{props.children}</Stack>
  );
  return [renderStack];
}
export { useCustomBox, useCustomStack };
