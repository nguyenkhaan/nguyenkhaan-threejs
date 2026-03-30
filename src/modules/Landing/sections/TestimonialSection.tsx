import { motion } from 'framer-motion';
import { styles } from '../../../shared/styles/styles';
import { feedbacks } from '../../../shared/constants/me.constant';
interface FeedbackCardProps {
    name: string;
    designation: string;
    avatar: string;
    talk: string;
}
function FeedbackCard({ name, designation, avatar, talk }: FeedbackCardProps) {
    return (
        <motion.div className="bg-black-200 sm:w-[320px] w-full rounded-3xl p-10">
            <p className="text-[48px] font-black text-white">"</p>
            <p className="mt-1 text-[18px] tracking-wider text-white">{talk}</p>
            <div className="mt-7 flex justify-between items-center">
                <div>
                    <p className="text-base font-medium text-white">
                        <span className="blue-text-gradient">@</span> {name}
                    </p>
                    <p className="text-[14px] text-secondary">{designation}</p>
                </div>
                <img
                    src={avatar}
                    className="h-10 w-10 rounded-full object-cover"
                />
            </div>
        </motion.div>
    );
}
function TestimonialSection() {
    return (
        <section className={`max-w-full mx-auto rounded-2xl `}>
            <div
                className={`w-full ${styles.padding} h-[300px] rounded-t-2xl bg-tertiary`}
            >
                <h1 className={`${styles.sectionSubText}`}>What they say?</h1>
                <h3 className={`${styles.sectionHeadText}`}>Testimonial</h3>
            </div>
            <div
                className={`w-full min-h-[300px] lg:h-[300px] rounded-b-2xl flex items-center lg:items-end bg-black-100 lg:flex lg:flex-row flex-col justify-start sm:gap-6 gap-4 ${styles.padding}`}
            >
                {feedbacks.map((feedback, index) => (
                    <FeedbackCard
                        key={index}
                        name={feedback.name}
                        avatar={feedback.avatar}
                        talk={feedback.talk}
                        designation={feedback.designation}
                    />
                ))}
            </div>
        </section>
    );
}
export default TestimonialSection;
