/**
 * Đêm nay bầu trời đầy sao
 * Còn anh thì ngồi suy sụp trong đêm lạnh lẽo
 * Em có biết rằng từ khi em ra đi
 * Cầu vồng đã khuyết đi
 * Cũng như tình yêu của anh đã mất em rồi
 * Giờ này em đang rất vui
 * Em đang vui bên một người khác
 * Chỉ còn lại đây một mình anh
 * Cùng chiếc cầu vồng đã khuyết
 *
 */
import { textVariant } from '../../../shared/motions/motion';
import { SectionLayout } from './layouts/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../../../shared/styles/styles';
import 'react-vertical-timeline-component/style.min.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {
    experiences,
    type experienceType,
} from '../../../shared/constants/me.constant';
function ExperienceCard({ experience }: { experience: experienceType }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#fff',
            }}
            contentArrowStyle={{
                borderRight: '7px solid #232631',
            }}
            date={experience.date}
            iconStyle={{
                background: experience.iconBg,
            }}
            icon={
                <div className="flex items-center justify-center w-full h-full">
                    <img
                        src={experience.icon}
                        className="w-[80%] h-[80%] object-contain"
                    />
                </div>
            }
        >
            <h3 className="text-white text-2xl font-bold">
                {experience.title}
            </h3>
            <span className="my-3 text-secondary mt-2 block text-base font-semibold">
                {experience.company_name}
            </span>
            <ul className="list-disc ml-5 mt-5 text-white space-y-3">
                {experience.points.map((point, index) => (
                    <li
                        key={index}
                        className="text-base text-white-100 tracking-wider pl-1"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}
function ExperienceSection() {
    return (
        <SectionLayout id="work">
            <motion.div variants={textVariant(0.2)}>
                <h3 className={`${styles.sectionSubText}`}>
                    What I have done so far
                </h3>
                <h1 className={`${styles.sectionHeadText}`}>
                    Work Experience.
                </h1>
            </motion.div>
            <VerticalTimeline>
                {experiences.map((experience) => {
                    return <ExperienceCard experience={experience} />;
                })}
            </VerticalTimeline>
        </SectionLayout>
    );
}
export default ExperienceSection;
