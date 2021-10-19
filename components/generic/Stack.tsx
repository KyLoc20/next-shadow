import * as React from "react";
import styled from "@emotion/styled";

type BasicStackProp = {};
export type StackProp = {
  children?: React.ReactNode;
} & BasicStackProp;
export default function Stack(props: StackProp) {
  let stackItems = React.Children.map(props.children, (child, index) => (
    <UnitWrapper key={index}>{child}</UnitWrapper>
  ));
  return <BasicStack>{stackItems}</BasicStack>;
}
const BasicStack = styled.div`
  text-align: center;
`;
const UnitWrapper = styled.span`
  display: inline-block;
  padding: 10px;
`;
