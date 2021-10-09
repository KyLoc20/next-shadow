import * as React from "react";
import styled from "@emotion/styled";
import { useCustomText, HTMLTag, CustomTextType } from "@/hooks/Text";
import { Link } from "../generic/Link";
import FeatureCard from "./FeatureCard";
type WhyNextProps = {
  children?: React.ReactNode;
};
export default function WhyNextCard(props: WhyNextProps) {
  const [TitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main32,
    "center"
  );
  const [SubTitleText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Title_main16,
    "center"
  );
  const FeatureItems = features.map((item, index) => (
    <FeatureCard
      key={index}
      title={item.title}
      description={item.description}
      docLink={item.docLink}
    ></FeatureCard>
  ));
  const [MoreText] = useCustomText(
    HTMLTag.div,
    CustomTextType.Content_normal14,
    "center"
  );
  const [LinkText] = useCustomText(HTMLTag.span, CustomTextType.Link_primary14);
  return (
    <Component>
      <Content>
        <Title>
          <TitleText>Why Next.js</TitleText>{" "}
        </Title>
        <SubTitle>
          <SubTitleText>
            The world’s leading companies use and love Next.js
          </SubTitleText>
        </SubTitle>
        <FeatureGrid>{FeatureItems}</FeatureGrid>
        <More>
          <MoreText>
            <strong>And more:</strong> Support for{" "}
            <Link href="https://nextjs.org/docs/basic-features/environment-variables">
              <LinkText>environment variables</LinkText>
            </Link>
            ,{" "}
            <Link href="https://nextjs.org/docs/advanced-features/preview-mode">
              <LinkText>preview mode</LinkText>
            </Link>
            ,{" "}
            <Link href="https://nextjs.org/docs/api-reference/next/head">
              <LinkText>custom head tags</LinkText>
            </Link>
            ,{" "}
            <Link href="https://nextjs.org/docs/basic-features/supported-browsers-features#polyfills">
              <LinkText>automatic polyfills</LinkText>
            </Link>
            , and more.
          </MoreText>
        </More>
      </Content>
    </Component>
  );
}
const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; //width: 992px;
  margin: 0 auto;
`;
const Content = styled.div`
  //for content
  width: 100%;
  overflow: hidden;

  padding: 100px 16px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin: 16px 0;
`;
const SubTitle = styled.div`
  margin-bottom: 48px;
`;
const FeatureGrid = styled.div`
  margin: 0 auto;
  max-width: 992px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 24px;
  gap: 24px;
`;
const More = styled.div`
  margin: 40px 0;
  line-height: 25px;
`;
type Feature = {
  title: string;
  description: string;
  docLink: string;
};
const features: Feature[] = [
  {
    title: "Image Optimization",
    description:
      "<Image> and Automatic Image Optimization with instant builds.",
    docLink: "https://nextjs.org/docs/basic-features/image-optimization",
  },
  {
    title: "Internationalization",
    description:
      "Built-in Domain & Subdomain Routing and Automatic Language detection.",
    docLink: "https://nextjs.org/docs/advanced-features/i18n-routing",
  },
  {
    title: "Next.js Analytics",
    description:
      "A true lighthouse score based on real visitor data & page-by-page insights",
    docLink: "https://nextjs.org/analytics",
  },
  {
    title: "Zero Config",
    description:
      "Automatic compilation and bundling. Optimized for production from the start.",
    docLink: "https://nextjs.org/docs/getting-started",
  },
  {
    title: "Hybrid: SSG and SSR",
    description:
      "Pre-render pages at build time (SSG) or request time (SSR) in a single project.",
    docLink: "https://nextjs.org/docs/basic-features/data-fetching",
  },
  {
    title: "Incremental Static Regeneration",
    description:
      "Add and update statically pre-rendered pages incrementally after build time.",
    docLink:
      "https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration",
  },
  {
    title: "TypeScript Support",
    description: "Automatic TypeScript configuration and compilation.",
    docLink: "https://nextjs.org/docs/basic-features/typescript",
  },
  {
    title: "Fast Refresh",
    description:
      "Fast, reliable live-editing experience, as proven at Facebook scale.",
    docLink: "https://nextjs.org/docs/basic-features/fast-refresh",
  },
  {
    title: "File-system Routing",
    description: "Every component in the 'page' directory becomes a route.",
    docLink: "https://nextjs.org/docs/basic-features/typescript",
  },
  {
    title: "API Routes",
    description:
      "Optionally create API endpoints to provide backend functionality.",
    docLink: "https://nextjs.org/docs/api-routes/introduction",
  },
  {
    title: "Built-in CSS Support",
    description:
      "Create component-level styles with CSS modules. Built-in Sass support.",
    docLink: "https://nextjs.org/docs/basic-features/built-in-css-support",
  },
  {
    title: "Code-splitting and Bundling",
    description:
      "Optimized bundle splitting algorithm created by the Google Chrome team.",
    docLink: "https://nextjs.org/docs",
  },
];
