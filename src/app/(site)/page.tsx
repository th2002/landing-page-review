import AboutUs from './AboutUs';
import AmazingProjects from './AmazingProjects';
import DedicatedTeams from './DedicatedTeams';
import Faq from './Faq';
import FeaturedInsigns from './FeaturedInsights';
import Hero from './Hero';
import IndustriesWeServe from './IndustriesWeServe';
import IndustryFocusedInsights from './IndustryFocusedInsights';
import LatestInsight from './LatestInsight';
import ModernItServices from './ModernItServices';
import OurRecentWork from './OurRecentWork';
import OurWork from './OurWork';
import Testimonial from './Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <OurWork />
      <ModernItServices />
      <AmazingProjects />
      <DedicatedTeams />
      <OurRecentWork />
      <IndustriesWeServe />
      <IndustryFocusedInsights />
      <AboutUs />
      <FeaturedInsigns />
      <Faq />
      <Testimonial />
      <LatestInsight />
    </>
  );
}
