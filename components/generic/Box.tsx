import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { sxProps, parseLengthValue } from "@/system/sx";
type BasicBoxProps = {
  flexDirection?: "row" | "column"; //by default flex-direction:row
  flexWrap?: "wrap" | "no-wrap";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "center" | "flex-end";
  alignContent?:
    | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  overflow?: string; //by default "hidden"
  boxSizing?: "border-box" | "content-box";
  width?: number | string; //by default "100%"
  height?: number | string; //"100%"
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  padding?: string;
  margin?: string;
  vertical?: boolean; // shortcut for flex-direction:column
  notFlex?: boolean; //by default display:flex
};
type PaperProps = {
  background?: string;
  border?: string;
  borderRadius?: number;
  boxShadow?: string;
  borderRight?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
};
export type BoxProps = {
  children?: React.ReactNode;
} & BasicBoxProps &
  PaperProps;
const BasicBox = styled.div`
  display: ${(props: BoxProps) => (props.notFlex ? "block" : "flex")};
  flex-direction: ${(props: BoxProps) =>
    props.vertical ? "column" : props.flexDirection};
  flex-wrap: ${(props: BoxProps) => props.flexWrap};
  justify-content: ${(props: BoxProps) => props.justifyContent};
  align-items: ${(props: BoxProps) => props.alignItems};
  align-content: ${(props: BoxProps) => props.alignContent};
  box-sizing: ${(props: BoxProps) => props.boxSizing};
  width: ${(props: BoxProps) => parseLengthValue(props.width, "100%")};
  height: ${(props: BoxProps) => parseLengthValue(props.height)};
  min-width: ${(props: BoxProps) => parseLengthValue(props.minWidth)};
  min-height: ${(props: BoxProps) => parseLengthValue(props.minHeight)};
  max-width: ${(props: BoxProps) => parseLengthValue(props.maxWidth)};
  max-height: ${(props: BoxProps) => parseLengthValue(props.maxHeight)};
  padding: ${(props: BoxProps) => props.padding};
  margin: ${(props: BoxProps) => props.margin};
  overflow: ${(props: BoxProps) => props.overflow || "hidden"};
  //paper
  background: ${(props: BoxProps) => props.background};
  border: ${(props: BoxProps) => props.border};
  border-right: ${(props: BoxProps) => props.borderRight};
  border-left: ${(props: BoxProps) => props.borderLeft};
  border-top: ${(props: BoxProps) => props.borderTop};
  border-bottom: ${(props: BoxProps) => props.borderBottom};
  border-radius: ${(props: BoxProps) => parseLengthValue(props.borderRadius)};
  box-shadow: ${(props: BoxProps) => props.boxShadow};
`;

export default function Box(props: BoxProps) {
  return <BasicBox {...props}></BasicBox>;
}
