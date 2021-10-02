import * as React from "react";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/react";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Link } from "../generic/Link";
const Component = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 160px;
  margin: 34px 0 64px;
`;
const move = keyframes`
  to {
    transform: translate3d(-50%,0,0);
  }
`;
const WaveSlide = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  animation: ${move} 3s linear infinite;
`;

const CaseWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0 35px;
`;
type CaseProps = {
  children?: React.ReactNode;
  width: number;
  height: number;
  viewBox: string;
  path: string[];
};
function Case(props: CaseProps) {
  return (
    <CaseWrapper>
      <svg
        width={`${props.width}px`}
        height={`${props.height}px`}
        viewBox={props.viewBox}
      >
        {props.path.map((path, index) => (
          <path d={path} key={index}></path>
        ))}
      </svg>
    </CaseWrapper>
  );
}
type CaseDisplayProps = {
  children?: React.ReactNode;
};

export default function CaseDisplayCard(props: CaseDisplayProps) {
  return (
    <Component>
      <WaveSlide>
      <Case {...CaseNetflix}></Case>
      
      </WaveSlide>
    </Component>
  );
}
const CaseNetflix = {
  width: 112,
  height: 31,
  viewBox: "0 0 112 31",
  path: [
    "M74.682.8h-4.717v26.376c4.286.148 8.555.364 12.805.648v-4.648c-2.688-.18-5.385-.331-8.088-.456V.8zm37.48.002h-5.18l-3.416 7.916-3.068-7.916h-5.102l5.483 14.144-5.986 13.875c1.656.161 3.308.334 4.957.516l3.482-8.064 3.448 8.893c1.796.23 3.587.472 5.376.727l.006-.003-6.144-15.845L112.162.803zM53.776 26.946l4.716-.001V16.216h6.393v-4.648h-6.393V5.493h8.45V.805H53.776v26.141zM36.162 5.49H41.1v21.73c1.568-.058 3.141-.107 4.716-.148V5.492h4.936V.804h-14.59v4.688-.002zM20.04 28.573c4.347-.395 8.713-.72 13.1-.974v-4.648c-2.803.16-5.597.352-8.383.571v-7.034c1.828-.018 4.236-.074 6.368-.048v-4.648c-1.704-.002-4.443.024-6.368.05V5.49h8.384V.802H20.039v27.772-.001zm-9.254-10.744L4.646.803H.161v30.088c1.568-.224 3.14-.437 4.717-.642V13.888l5.462 15.69c1.717-.2 3.44-.388 5.163-.565V.803h-4.718V17.83v-.001zm75.872 10.274c1.575.12 3.147.248 4.717.387V.802h-4.716v27.302z",
  ],
};
