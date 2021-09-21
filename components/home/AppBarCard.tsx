import * as React from "react";
import styled from "@emotion/styled";
import { useCustomButton, CustomButtonType } from "@/hooks/Button";
import { Icon } from "@/ui/Icon";
const BasicAppBar = styled("section")`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  z-index: 20;
`;
const Component = styled(BasicAppBar)`
  position: sticky;
  top: 0px;
  justify-content: center;
  height: 80px;
  background: #fff;
  box-shadow: 0 0 1px 1px rgba(33, 41, 63, 0.1);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 992px;
  height: 100%;
  padding: 0 16px;
`;

function Logo() {
  return (
    <span className="logo">
      <svg width={82} height={40} viewBox="0 0 148 90">
        <path
          d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
          fill="#000"
          fillRule="nonzero"
        ></path>
      </svg>
    </span>
  );
}
const Navigation = styled.a``;
type AppBarProps = {
  children?: React.ReactNode;
};
export default function AppBarCard(props: AppBarProps) {
  const NavigationMenuItems = [
    "Showcase",
    "Docs",
    "Live",
    "Analytics",
    "Commerce",
    "Enterprise",
  ].map((item) => <Navigation key={item}>item</Navigation>);
  const LearnButton = useCustomButton(CustomButtonType.Primary1)[0];
  const GithubButton = <div></div>;
  return (
    <Component className="app-bar">
      <Content>
        <Logo></Logo>
        {NavigationMenuItems}
        <LearnButton>Learn</LearnButton>
        <Icon name="github"></Icon>
        {/* {NavigationMenuItems}
        
        {GithubButton} */}
      </Content>
    </Component>
  );
}
