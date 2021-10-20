import styled from "@emotion/styled";
import Head from "next/head";
import TopBannerCard from "@/components/home/TopBannerCard";
import AppBarCard from "@/components/home/AppBarCard";
import TopNewsCard from "@/components/home/TopNewsCard";
import MainHeaderCard from "@/components/home/MainHeaderCard";
import WhyNextCard from "@/components/home/WhyNextCard";
import CaseDisplayCard from "@/components/home/CaseDisplayCard";
import WhoUsingNextCard from "@/components/home/WhoUsingNextCard";
import LearnNextCard from "@/components/home/LearnNextCard";
import SubscribeCard from "@/components/home/SubscribeCard";
import FooterCard from "@/components/home/FooterCard";
const Container = styled("section")`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  position: relative;
  background: #fff;
  width: 100%;
  min-height: 100vh;
`;
export default function HomaPage(props: any) {
  return (
    <Container>
      <Head>
        <title>Next.js by Kyloc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBannerCard></TopBannerCard>
      <AppBarCard></AppBarCard>
      <TopNewsCard></TopNewsCard>
      <MainHeaderCard></MainHeaderCard>
      <WhyNextCard></WhyNextCard>
      <CaseDisplayCard></CaseDisplayCard>
      <WhoUsingNextCard></WhoUsingNextCard>
      <LearnNextCard></LearnNextCard>
      <SubscribeCard></SubscribeCard>
      <FooterCard></FooterCard>
    </Container>
  );
}
