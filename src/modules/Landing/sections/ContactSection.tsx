import { SectionLayout } from './layouts/SectionWrapper';
import BlackMagicianGirlCanvas from '../../../shared/canvas/DagonRed';
import { styles } from '../../../shared/styles/styles';
function ContactSection() {
    return (
        <SectionLayout id="contact">
            <div className="h-screen max-w-7xl xl:flex-row flex-col-reverse items-center flex justify-between overflow-visible">
                <div className="flex-[0.75] h-fit bg-black-100 rounded-2xl p-8 ">
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
                    </form>
                </div>
                <div className="flex-1 h-full">
                    <BlackMagicianGirlCanvas />
                </div>
            </div>
        </SectionLayout>
    );
}
export default ContactSection;
