import { motion } from 'framer-motion';
import { styles } from '../../../shared/styles/styles';
import { staggerContainer } from '../../../shared/motions/motion';
import BallCanvas from '../../../shared/canvas/BallCanvas';
import { technologies } from '../../../shared/constants/me.constant';
function TechSection() {
    return (
        <motion.section
            variants={staggerContainer(1, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.25 }}
            id={'tech'}
            className={`mx-auto ${styles.padding} max-w-7xl z-0 relative min-h-100 mt-12`}
        >
            <div className="w-full h-full flex gap-6 flex-row flex-wrap items-center justify-center">
                {technologies.map((tech, index) => (
                    <div key={index} className="w-[120px] h-[120px]">
                        <BallCanvas icon={tech.icon} />
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
export default TechSection;
