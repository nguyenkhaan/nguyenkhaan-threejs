import HeroSection from '../../modules/Landing/sections/HeroSection';
import AboutSection from '../../modules/Landing/sections/AboutSection';
import ExperienceSection from '../../modules/Landing/sections/Experience';
import TechSection from '../../modules/Landing/sections/TechSection';
function Landing() {
    return (
        <div className="w-full min-h-screen bg-primary">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechSection />
        </div>
    );
}
export default Landing;
