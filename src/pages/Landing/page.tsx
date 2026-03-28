import herobg from '../../assets/herobg.png';
import { styles } from '../../shared/styles/styles';
// import ComputerCanvas from "../../shared/canvas/ComputerCanvas"
import DragonCanvas from '../../shared/canvas/DragonCanvas';
import { motion } from 'framer-motion';
function Landing() {
    return (
        <div className="w-full min-h-screen">
            <section
                className=" relative bg-cover bg-center bg-no-repeat w-full h-screen"
                style={{
                    backgroundImage: `url(${herobg})`,
                }}
            >
                <div
                    className={`top-30 mx-auto max-w-7xl inset-0 absolute flex items-start px-6 gap-5 ${styles.paddingX}}`}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#915eff]"></div>
                        <div className="w-1 h-60 violet-gradient"></div>
                    </div>
                    <div>
                        <h1 className={`${styles.heroHeadText}`}>
                            Hi! I'm{' '}
                            <span className="text-[#915eff]">Cloudian</span>
                        </h1>

                        <p
                            className={`${styles.heroSubText} mt-2 sm:pr-14 xl:pr-28`}
                        >
                            I develop Backend and Frontend applications, also I
                            maintain the production lifecycle.
                        </p>
                    </div>
                </div>
                <DragonCanvas />
                <div className="flex -mt-20 items-center justify-center w-full">
                    <a href="#about">
                        <div className="w-9 h-16 border-secondary border-4 rounded-3xl relative">
                            <motion.div
                                className="w-3 h-3 mx-auto rounded-full bg-secondary"
                                animate={{
                                    y: [8, 36, 8],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'linear',
                                    duration: 1.5,
                                }}
                            ></motion.div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}
export default Landing;
