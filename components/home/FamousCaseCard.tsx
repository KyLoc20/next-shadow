import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
const Component = styled.div`
  position: relative;
  flex-shrink: 1;
  flex-basis: 330px;
  margin: 0 calc(7.142857142857143vw - 165px); // (100vw/7-330px)/2
  transition: all 0.5s ease;
  cursor: pointer;
  //paper
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 12px rgb(0, 0, 0, 0.1);
  border-radius: 7px;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    .name-info {
      opacity: 1;
    }
  }
`;
type FamousCaseCardProps = {
  children?: React.ReactNode;
  zIndex: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  imgUrl: string;
  caseLink: string;
  name: string;
};
type CaseProps = {
  url: string;
};
const Image = styled.div`
  border-radius: 7px;
  height: 100%;
  background: url(${(props: CaseProps) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;
const NameInfo = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  bottom: 0px;
  padding: 1rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.6s ease 0s;
  opacity: 0;
`;
export default function FamousCaseCard(props: FamousCaseCardProps) {
  const { zIndex, offsetX, offsetY, scale, name } = props;
  const computedTransform = React.useMemo(() => {
    return `scale(${scale}) translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }, [offsetX, offsetY, scale]);
  const computedZIndex = React.useMemo(() => {
    return zIndex;
  }, [zIndex]);
  return (
    <Component style={{ zIndex: computedZIndex, transform: computedTransform }}>
      <Link href={props.caseLink}>
        <Image url={props.imgUrl}></Image>
        <NameInfo className="name-info">{name}</NameInfo>
      </Link>
    </Component>
  );
}
