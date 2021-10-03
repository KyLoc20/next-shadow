import * as React from "react";
import styled from "@emotion/styled";
type SVGBase = {
  fill?: string;
  hoverFill?: string;
};
export type GroupProps = {
  transform?: string;
  path?: PathProps[];
  circle?: CircleProps[];
  ellipse?: EllipseProps[];
  polygon?: PolygonProps[];
  group?: GroupProps[];
} & SVGBase;
function Group(props: GroupProps) {
  return (
    <g transform={props.transform} fill={props.fill}>
      {props.path && props.path.map((path) => <Path {...path}></Path>)}
      {props.circle &&
        props.circle.map((circle) => <Circle {...circle}></Circle>)}
      {props.ellipse &&
        props.ellipse.map((ellipse) => <Ellipse {...ellipse}></Ellipse>)}
      {props.polygon &&
        props.polygon.map((polygon) => <Polygon {...polygon}></Polygon>)}
      {props.group &&
        props.group.map((subGroup) => <Group {...subGroup}></Group>)}
    </g>
  );
}
export type PathProps = {
  d: string;
} & SVGBase;
function Path(props: PathProps) {
  return <path d={props.d} fill={props.fill} />;
}
export type EllipseProps = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
} & SVGBase;
function Ellipse(props: EllipseProps) {
  return (
    <ellipse
      cx={props.cx}
      cy={props.cy}
      rx={props.rx}
      ry={props.ry}
      fill={props.fill}
    />
  );
}
export type CircleProps = {
  cx: number;
  cy: number;
  r: number;
} & SVGBase;
function Circle(props: CircleProps) {
  return <circle cx={props.cx} cy={props.cy} r={props.r} fill={props.fill} />;
}
export type PolygonProps = {
  points: string;
} & SVGBase;
function Polygon(props: PolygonProps) {
  return <polygon points={props.points} fill={props.fill} />;
}

export { Group, Path, Ellipse, Polygon, Circle };