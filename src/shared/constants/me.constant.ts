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
//Projects
import rainyword from '../../assets/works/rainyword.png';
import stkt from '../../assets/works/stkt.png';
//Feedbacks
import emilia from '../../assets/feedbacks/emilia.jpg';
import eri from '../../assets/feedbacks/eri.jpg';
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

export const projects = [
    {
        title: 'Rainy Word Coders',
        imgUrl: rainyword,
        url: 'Private Link',
        description:
            'An English game learning platform. It helps students to learn English through a game, currently using by over 10000 students in Thu Duc - Ho Chi Minh city',
        tags: [
            {
                name: 'reactjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'expressjs',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
    },
    {
        title: 'Sổ tay kiến thức',
        imgUrl: stkt,
        url: 'Private Link',
        description:
            'A well-structured notebook website designed for reviewing and studying key subjects at UIT, including Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Databases, and Fundamental Programming.',
        tags: [
            {
                name: 'docusarus',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'blue-text-gradient',
            },
        ],
    },
];

export const feedbacks = [
    {
        name: 'Emily-chan',
        designation: 'CTO of 456 Enterprises',
        avatar: emilia,
        talk: 'After Rick optimized our website, our traffic increased by 50%. He is very good and sweet',
    },
    {
        name: 'Eri chan',
        designation: 'COO of DEF Corp',
        avatar: eri,
        talk: "I've never met a web developer who truly cares about their clients' success like Ruby does.",
    },
];
