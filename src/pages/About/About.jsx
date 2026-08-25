import { AboutHero } from "./AboutHero";
import Skill from "./Skill";
import { CareerJourney } from "./CareerJourney";
import CertificationsAwards from "./CertificationsAwards";

export const About = () => {
  return (
    <>
      <AboutHero />
      <CareerJourney />
      <Skill />
      <CertificationsAwards />
      
    </>
  );
};

export default About;