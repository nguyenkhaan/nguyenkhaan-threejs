import HeroSection from '../../modules/Landing/sections/HeroSection';
import AboutSection from '../../modules/Landing/sections/AboutSection';
function Landing() {
    return (
        <div className="w-full min-h-screen bg-primary">
            <HeroSection />
            <AboutSection />
        </div>
    );
}
export default Landing;
