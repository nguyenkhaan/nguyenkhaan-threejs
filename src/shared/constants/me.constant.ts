import ai from '../../assets/ai.png';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import cloud from '../../assets/cloud.png';
import starbucks from '../../assets/company/starbucks.png';
import tesla from '../../assets/company/tesla.png';
import meta from '../../assets/company/meta.png';
import shopify from '../../assets/company/shopify.png';
//tech
import javascript from '../../assets/tech/javascript.png';
import typescript from '../../assets/tech/typescript.png';
import docker from '../../assets/tech/docker.png';
import express from '../../assets/tech/express.png';
import git from '../../assets/tech/git.png';
import java from '../../assets/tech/java.png';
import jenkins from '../../assets/tech/jenkins.png';
import nextjs from '../../assets/tech/nextjs.png';
import nestjs from '../../assets/tech/nestjs.png';
import ollama from '../../assets/tech/ollama.png';
import python from '../../assets/tech/python.png';
import reactjs from '../../assets/tech/reactjs.png';
import tailwind from '../../assets/tech/tailwind.png';

export const overviewSkilss = [
    {
        title: 'Frontend Developer',
        icon: frontend,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Prompt Engineering',
        icon: ai,
    },
    {
        title: 'Cloud Computing',
        icon: cloud,
    },
];

export type experienceType = {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
};
//Copy source
export const experiences = [
    {
        title: 'React.js Developer',
        company_name: 'Starbucks',
        icon: starbucks,
        iconBg: '#383E56',
        date: 'March 2020 - April 2021',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'React Native Developer',
        company_name: 'Tesla',
        icon: tesla,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Shopify',
        icon: shopify,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'Meta',
        icon: meta,
        iconBg: '#E6DEDD',
        date: 'Jan 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];
export type technologyType = {
    name: string;
    icon: string;
};

export const technologies = [
    {
        name: 'Javascript',
        icon: javascript,
    },
    {
        name: 'Typescript',
        icon: typescript,
    },
    {
        name: 'React.js',
        icon: reactjs,
    },
    {
        name: 'Next.js',
        icon: nextjs,
    },
    {
        name: 'Express',
        icon: express,
    },
    {
        name: 'NestJS',
        icon: nestjs,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Python',
        icon: python,
    },
    {
        name: 'Java',
        icon: java,
    },
    {
        name: 'Docker',
        icon: docker,
    },
    {
        name: 'Git',
        icon: git,
    },
    {
        name: 'Jenkins',
        icon: jenkins,
    },
    {
        name: 'Ollama',
        icon: ollama,
    },
];
