import { SectionLayout } from './layouts/SectionWrapper';
import BlackMagicianGirlCanvas from '../../../shared/canvas/DagonRed';
import { styles } from '../../../shared/styles/styles';
import { motion } from 'framer-motion';
import { slideIn } from '../../../shared/motions/motion';
import StarsCanvas from '../../../shared/canvas/StarCanvas';
import toast from 'react-hot-toast';
function ContactSection() {
    return (
        <SectionLayout id="contact">
            <StarsCanvas />
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="w-full max-w-7xl flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-6 xl:gap-8 min-h-screen overflow-hidden"
            >
                <div className="flex-1 w-full h-fit xl:h-full bg-black-100 rounded-2xl p-6 sm:p-8">
                    <h3 className={`${styles.sectionSubText}`}>GET IN TOUCH</h3>
                    <h1 className={`${styles.sectionHeadText}`}>Contact.</h1>
                    <form className="flex flex-col gap-6 sm:gap-8 mt-12">
                        <label className="flex flex-col text-sm sm:text-base">
                            <span className="text-white text-base sm:text-xl font-medium mb-2 sm:mb-4">
                                Your name
                            </span>
                            <input
                                type="text"
                                placeholder="What's your name?"
                                className="bg-tertiary py-3 sm:py-4 rounded-lg outline-none border-none font-medium px-4 sm:px-6 text-white placeholder:text-secondary text-sm sm:text-base"
                            />
                        </label>

                        <label className="flex flex-col text-sm sm:text-base">
                            <span className="text-white text-base sm:text-xl font-medium mb-2 sm:mb-4">
                                Your email
                            </span>
                            <input
                                type="email"
                                placeholder="What's your email?"
                                className="bg-tertiary py-3 sm:py-4 rounded-lg outline-none border-none font-medium px-4 sm:px-6 text-white placeholder:text-secondary text-sm sm:text-base"
                            />
                        </label>

                        <label className="flex flex-col text-sm sm:text-base">
                            <span className="text-white text-base sm:text-xl font-medium mb-2 sm:mb-4">
                                Your message
                            </span>
                            <textarea
                                rows={5}
                                placeholder='What"s your message'
                                className="bg-tertiary py-3 sm:py-4 rounded-lg outline-none border-none font-medium px-4 sm:px-6 text-white placeholder:text-secondary text-sm sm:text-base resize-none"
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                toast.success('Thank you for your letter');
                            }}
                            className="py-3 sm:py-4 w-fit rounded-2xl text-sm sm:text-base md:text-lg px-6 sm:px-8 cursor-pointer font-bold text-white bg-tertiary hover:opacity-90 transition-opacity duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="w-full xl:flex-1 h-[300px] sm:h-[400px] xl:h-full"
                >
                    <BlackMagicianGirlCanvas />
                </motion.div>
            </motion.div>
        </SectionLayout>
    );
}
export default ContactSection;
