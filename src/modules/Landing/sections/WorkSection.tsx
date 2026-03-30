import { styles } from '../../../shared/styles/styles';
import { SectionLayout } from './layouts/SectionWrapper';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../shared/motions/motion';
import { projects } from '../../../shared/constants/me.constant';
import github from '../../../assets/github.png';
interface ProjectCardProps {
    index: number;
    description: string;
    title: string;
    imgUrl: string;
    url: string;
    tags: { name: string; color: string }[];
}
function ProjectCard({
    index,
    title,
    description,
    imgUrl,
    url,
    tags,
}: ProjectCardProps) {
    return (
        <Tilt
            glareEnable
            tiltEnable
            className="w-[360px]"
            scale={1.1}
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            glareColor="#aaa6c3"
        >
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full p-5 rounded-2xl bg-tertiary"
            >
                <div className="h-[230px] relative rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={imgUrl}
                        alt=""
                    />
                    <a
                        href={url}
                        target="_blank"
                        className="w-10 h-10 black-gradient top-2 cursor-pointer flex items-center justify-center right-2 rounded-full absolute"
                    >
                        <img
                            src={github}
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </a>
                </div>
                <div className="mt-5">
                    <h3 className="text-2xl text-white font-bold">{title}</h3>
                    <p className="mt-2 text-secondary text-base">
                        {description}
                    </p>
                    <div className="mt-4 flex items-start justify-start gap-2">
                        {tags.map((tag) => (
                            <span className={`text-base ${tag.color}`}>
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Tilt>
    );
}

function WorkSection() {
    return (
        <SectionLayout id="work">
            <h3 className={`${styles.sectionSubText}`}>MY WORK </h3>
            <h1 className={`${styles.sectionHeadText}`}>Projects</h1>
            <p className="text-secondary max-w-2xl my-3 text-base sm:text-lg">
                The following projects showing my skills and journey of
                maturity. Each project is briefly described with link to codes
                github repository, click to enjoy them. It reflects my ability
                to self-study, work with different technologies and manage
                projects efficiently
            </p>
            <div className="my-4 flex items-start justify-center sm:justify-start gap-6 flex-wrap">
                {projects.map((project, index) => (
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        key={index}
                        url={project.url}
                        tags={project.tags}
                        index={index}
                    />
                ))}
            </div>
        </SectionLayout>
    );
}
export default WorkSection;
