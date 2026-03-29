import HeroSection from '../../modules/Landing/sections/HeroSection';
import AboutSection from '../../modules/Landing/sections/AboutSection';
import ExperienceSection from '../../modules/Landing/sections/Experience';
function Landing() {
    return (
        <div className="w-full min-h-screen bg-primary">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
        </div>
    );
}
export default Landing;
