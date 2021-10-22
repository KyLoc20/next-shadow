import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
export type sxProps = SpacingProps &
  PaperProps &
  SizingProps &
  PositionProps &
  TextProps &
  DisplayProps &
  FlexProps;
type DisplayProps = {
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "grid"
    | "none"
    | GlobalValue;
  overflow?: "hidden" | "visible" | "auto" | "scroll" | GlobalValue;
  visibility?: "hidden" | "visible";
};
type FlexProps = {
  flexDirection?: "row" | "column"; //flex-direction
  flexWrap?: "wrap" | "nowrap"; //flex-wrap
  justifyContent?: //justify-content
  | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "center" | "flex-end"; //align-items
  alignContent?: //align-content
  | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  flexGrow?: string; //flex-grow
  flexShrink?: string; //flex-shrink
  flex?: string; //flex
};
type PositionProps = {
  position?: "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: number; //z-index
  top?: LengthValue;
  right?: LengthValue;
  bottom?: LengthValue;
  left?: LengthValue;
};
type SizingProps = {
  boxSizing?: "border-box" | "content-box";
  w?: LengthValue;
  h?: LengthValue;
  minWidth?: LengthValue; //min-width
  maxWidth?: LengthValue; //max-width
  minHeight?: LengthValue; //min-height
  maxHeight?: LengthValue; //max-height
};
type SpacingProps = {
  m?: string; //margin
  mt?: string; //margin-top
  mr?: string; //margin-right
  mb?: string; //margin-bottom
  ml?: string; //margin-left
  mx?: string; //margin-left&margin-right
  my?: string; //margin-top&margin-bottom
  p?: string; //padding
  pt?: string; //padding-top
  pr?: string; //padding-right
  pb?: string; //padding-bottom
  pl?: string; //padding-left
  px?: string; //padding-left&padding-right
  py?: string; //padding-top&padding-bottom
};
type PaperProps = {
  bg?: string; //background
  border?: string; //border
  borderTop?: string; //border-top
  borderRight?: string; //border-right
  borderBottom?: string; //border-bottom
  borderLeft?: string; //border-left
  borderRadius?: number; //border-radius
  boxShadow?: string; //box-shadow
};
type TextProps = {
  textAlign?: "left" | "right" | "center" | "start" | "end" | "justify"; //text-align
  lineHeight?: LengthValue; //line-height
  fontSize?: LengthValue; //font-size
  fontWeight?: number | string; //font-weight
  letterSpacing?: LengthValue; //letter-spacing
};
type GridProps = {};
//A LengthValue could be:
//1. number between [0,1] -> percentage as string
//2. string with various units "1px" "200px" "75%" "3em" "20vw" "1.5" "inherit"-> direct style
//3. number 100 200 -> parse number with "px"
type LengthValue = number | string | "inherit";
type GlobalValue = "inherit" | "initial" | "revert" | "unset";

export type JustifyContentValue =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-evenly"
  | "space-around";
export type AlignItemsValue = "stretch" | "flex-start" | "center" | "flex-end";
const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
export const parseNumberWithEm = (v: number | undefined) =>
  v != null ? `${v}em` : undefined;
export function parseLengthValue(
  v: LengthValue | undefined,
  defaultValue?: LengthValue
) {
  if (v != null) return typeof v === "number" ? parseNumberWithPx(v) : v;
  else
    return typeof defaultValue === "number"
      ? parseNumberWithPx(defaultValue)
      : defaultValue;
}
