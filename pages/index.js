import React from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainLayout from '../src/components/Layout'
import BannerSection from '../src/containers/BannerSection'
import AboutSection from '../src/containers/AboutSection'
import WorkSection from '../src/containers/WorkSection'
import RoadMapSection from '../src/containers/RoadMapSection'
import FeatureSection from '../src/containers/FeatureSection'
import TeamSection from '../src/containers/TeamSection'
import PriceSection from '../src/containers/PriceSection'
import FunFactSection from '../src/containers/FunFactSection'
import SafeSection from '../src/containers/SafeSection'
import ContactSection from '../src/containers/ContactSection'
import FooterSection from '../src/containers/FooterSection'

const index = () => {
  return (
   <MainLayout>
     <BannerSection />
     <AboutSection />
     <WorkSection />
     <FeatureSection />
     <RoadMapSection />
     <TeamSection />
     {/* <PriceSection /> */}
     {/* <FunFactSection /> */}
     {/* <SafeSection /> */}
     <ContactSection />
     <FooterSection />
   </MainLayout>
  );
}

index.getInitialProps = () => {
  return {};
};

export default index;