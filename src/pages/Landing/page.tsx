import HeroSection from '../../modules/Landing/sections/HeroSection';
import AboutSection from '../../modules/Landing/sections/AboutSection';
import ExperienceSection from '../../modules/Landing/sections/Experience';
import TechSection from '../../modules/Landing/sections/TechSection';
import WorkSection from '../../modules/Landing/sections/WorkSection';
import TestimonialSection from '../../modules/Landing/sections/TestimonialSection';
function Landing() {
    return (
        <div className="w-full min-h-screen bg-primary">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechSection />
            <WorkSection />
            <TestimonialSection />
        </div>
    );
}
export default Landing;
