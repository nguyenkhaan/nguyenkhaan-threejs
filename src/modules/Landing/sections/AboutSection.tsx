import { styles } from '../../../shared/styles/styles';
import { fadeIn, textVariant } from '../../../shared/motions/motion';
import { motion } from 'framer-motion';
import { SectionLayout } from './layouts/SectionWrapper';
import { overviewSkilss } from '../../../shared/constants/me.constant';
import Tilt from 'react-parallax-tilt';

interface SkillCardProps {
    title: string;
    icon: string;
    index: number;
}
function SkillCard({ title, icon, index }: SkillCardProps) {
    return (
        // xs is very small, so we set it ot the full width
        <Tilt
            glareEnable
            tiltEnable
            className="w-[250px] mx-auto"
            scale={1.1}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            glareColor="#aaa6c3"
        >
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full rounded-2xl shadow-card green-pink-gradient p-px"
            >
                <div className="min-h-[280px] bg-tertiary flex flex-col items-center justify-evenly text-white rounded-2xl p-6">
                    <img src={icon} className="w-16 h-16 object-contain" />
                    <h3 className="text-center text-[20px] font-bold text-white">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
}
function AboutSection() {
    return (
        <SectionLayout id="about">
            <motion.div variants={textVariant(0.2)}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
            </motion.div>
            <p className="text-secondary max-w-2xl my-3 text-base sm:text-lg">
                I'm a fullstack developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like NestJS, Node.js,
                and FastAPI. I'm a quick learner and collaborate closely with
                clients to create efficient, scalable, and user-friendly
                solutions that solve real-world problems. Let's work together to
                bring your ideas to life!
            </p>
            <div className="sm:mt-20 mt-12 flex sm:flex-row flex-wrap flex-col justify-center items-center sm:justify-between gap-5">
                {overviewSkilss.map((skill, index) => {
                    return (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            index={index}
                        />
                    );
                })}
            </div>
        </SectionLayout>
    );
}
export default AboutSection;
