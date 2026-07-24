import ContentHeroSection from "../components/HomeComponents/ContentHeroSection";
import HowWeTrainYou from "../components/HomeComponents/HowWeTrainYou";
import ReadyToTrain from "../components/HomeComponents/ReadyToTrain";
import ShopByCategory from "../components/HomeComponents/ShopByCategory";
import StatisticsHomePage from "../components/HomeComponents/StatisticsHomePage";
import TrainingCourses from "../components/HomeComponents/TrainingCourses";
import WhatMembersSay from "../components/HomeComponents/WhatMembersSay";
import WhyIronBeast from "../components/HomeComponents/WhyIronBeast";

export default function HomePage() {
  return (
    <>
      <ContentHeroSection />
      <StatisticsHomePage />
      <WhyIronBeast />
      <TrainingCourses />
      <HowWeTrainYou />
      <ShopByCategory />
      <WhatMembersSay />
      <ReadyToTrain />
    </>
  );
}
