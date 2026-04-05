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
                className="h-[200vh] xl:h-screen w-full max-w-7xl xl:flex-row flex-col items-center flex justify-center gap-6 md:justify-between overflow-visible"
            >
                <div className="flex-[0.75] w-full h-fit bg-black-100  rounded-2xl p-8">
                    <h3 className={`${styles.sectionSubText}`}>GET IN TOUCH</h3>
                    <h1 className={`${styles.sectionHeadText}`}>Contact.</h1>
                    <form className="flex flex-col gap-8 mt-12">
                        <label className="flex flex-col text-lg">
                            <span className="text-white text-xl font-medium mb-4">
                                Your name
                            </span>
                            <input
                                type="text"
                                placeholder="What's your name?"
                                className="bg-tertiary py-4 rounded-lg outline-none border-none font-medium px-6 text-white placeholder:text-secondary"
                            />
                        </label>

                        <label className="flex flex-col text-lg">
                            <span className="text-white text-xl font-medium mb-4">
                                Your email
                            </span>
                            <input
                                type="text"
                                placeholder="What's your email?"
                                className="bg-tertiary py-4 rounded-lg outline-none border-none font-medium px-6 text-white placeholder:text-secondary"
                            />
                        </label>

                        <label className="flex flex-col text-lg">
                            <span className="text-white text-xl font-medium mb-4">
                                Your message
                            </span>
                            <textarea
                                rows={7}
                                placeholder='What"s your message'
                                className="bg-tertiary py-4 rounded-lg outline-none border-none font-medium px-6 text-white placeholder:text-secondary"
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                toast.success('Thank you for your letter');
                            }}
                            className="py-4 w-fit rounded-2xl text-base sm:text-lg px-8 cursor-pointer inline font-bold text-white bg-tertiary"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="flex-1 xl:h-full"
                >
                    <BlackMagicianGirlCanvas />
                </motion.div>
            </motion.div>
        </SectionLayout>
    );
}
export default ContactSection;
