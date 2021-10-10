import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
const parseNumberWithEm = (v: number | undefined) =>
  v != null ? `${v}em` : undefined;
type BasicBoxProps = {
  flexDirection?: "row" | "column"; //by default flex-direction:row
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
  width?: number | string; //by default "100%"
  height?: number | string; //"100%"
  padding?: string;
  margin?: string;
  vertical?: boolean; // shortcut for flex-direction:column
  notFlex?: boolean; //by default display:flex
};
export type BoxProps = {
  children?: React.ReactNode;
} & BasicBoxProps;
const BasicBox = styled.div`
  display: ${(props: BoxProps) => (props.notFlex ? "block" : "flex")};
  flex-direction: ${(props: BoxProps) =>
    props.vertical ? "column" : props.flexDirection};
  justify-content: ${(props: BoxProps) => props.justifyContent};
  align-items: ${(props: BoxProps) => props.alignItems};
  align-content: ${(props: BoxProps) => props.alignContent};
  width: ${(props: BoxProps) => (props.width != null ? props.width : "100%")};
  height: ${(props: BoxProps) => props.height};
  padding: ${(props: BoxProps) => props.padding};
  margin: ${(props: BoxProps) => props.margin};
  overflow: ${(props: BoxProps) => props.overflow || "hidden"};
`;

export default function Box(props: BoxProps) {
  return <BasicBox {...props}></BasicBox>;
}
// //genStyle > genCSS
// const genStyle = (props: TextProps): React.CSSProperties => {
//   return {
//     fontSize: parseNumberWithPx(props.fontSize),
//     fontWeight: props.fontWeight,
//     lineHeight: parseNumberWithPx(props.lineHeight),
//     letterSpacing: parseNumberWithEm(props.letterSpacing),
//     textAlign: props.textAlign,
//   };
// };
// const genCSS = (props: TextProps) => css`
//   color: ${props.color || "currentColor"};
//   &:hover {
//     color: ${props.hoverColor || null};
//     text-decoration: ${props.hoverUnderlined ? "underline" : null};
//   }
// `;
