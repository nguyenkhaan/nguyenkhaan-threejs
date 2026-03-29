//In this case, we should using higher order function
import { motion } from 'framer-motion';
import { staggerContainer } from '../../../../shared/motions/motion';
import { styles } from '../../../../shared/styles/styles';
interface SectionLayoutProps {
    id: string;
    children: React.ReactNode;
}

export function SectionLayout({ id, children }: SectionLayoutProps) {
    return (
        <motion.section
            variants={staggerContainer(1, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.25 }}
            id={id}
            className={`mx-auto ${styles.padding} max-w-7xl z-0 relative min-h-screen`}
        >
            {children}
        </motion.section>
    );
}
