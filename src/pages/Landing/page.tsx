import HeroSection from '../../modules/Landing/sections/HeroSection';
import AboutSection from '../../modules/Landing/sections/AboutSection';
import ExperienceSection from '../../modules/Landing/sections/Experience';
import TechSection from '../../modules/Landing/sections/TechSection';
import WorkSection from '../../modules/Landing/sections/WorkSection';
// import TestimonialSection from '../../modules/Landing/sections/TestimonialSection';
import ContactSection from '../../modules/Landing/sections/ContactSection';
function Landing() {
    return (
        <div className="w-full relative min-h-screen bg-primary">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechSection />
            <WorkSection />
            {/* <TestimonialSection /> */}
            <div className="my-6 bg-transparent w-4 h-full"></div>
            <ContactSection />
        </div>
    );
}
export default Landing;
