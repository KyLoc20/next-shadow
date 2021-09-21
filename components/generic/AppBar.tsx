import * as React from "react";
import styled from "@emotion/styled";
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
const Logo = styled.div``;
const NavigationMenu = styled.div``;
type AppBarProps ={}
export default function AppBar(props: AppBarProps) {
  const NavigationMenuItems = [
    <NavigationMenu>123</NavigationMenu>,
    <NavigationMenu>123</NavigationMenu>,
  ];
  const LearnButton = <div></div>;
  const GithubButton = <div></div>;
  return (
    <Component className="app-bar">
      <Content>
        {NavigationMenuItems}
        {LearnButton}
        {GithubButton}
      </Content>
    </Component>
  );
}
