import React from 'react';
import { Box, Heading, Text, Button, ChakraProvider, Container, Link as ChakraLink, SimpleGrid, IconButton, Flex, AvatarGroup, Avatar, AvatarBadge } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import Banner from '../components/banner';
import Footer from '../components/footer';
import { FaGithub, FaYoutube } from "react-icons/fa"
import Skills from './skills';
import Contact from './contact';


import societyEvents from '../assets/images/webProjects/societyEvents.png';
import guionInstruccional from '../assets/images/webProjects/guion_Instruccional.png'; // Ajusta la ruta según la estructura de tu proyecto
import pdfGenerator from '../assets/images/desktopProjects/pdf_Generator.jpeg';


export interface Project {
    id: number;
    title: string;
    description: string | JSX.Element | any;
    image: string;
    youtubeLink: string;
    githubLink: string;
    githubPagesLink: string;
}

interface TeamMember {
    name: string;
    roles: { role: string; color?: string }[];
    description: string;
    avatar: string;
    portfolio:string;
}

const team: TeamMember[] = [
    {
        name: "Luis Eduardo Zaldivar",
        roles: [
            { role: "Backend Developer", color: "blue.500" },
        ],
        description: "Luis is an engineer focused and dedicated to building backend problem solving code implementing innovative solutions.",
        avatar: "/jared_avatar.jpg",
        portfolio:"https://luis-zaldivar.github.io/Mi-portafolio/"
    },
    {
        name: "Isaac Manjarrez",
        roles: [
            { role: "Project Manager", color: "blue.500" },
            { role: "FullStack Developer" },
        ],
        description: "Isaac is a Fullstack developer with strong leadership skills to carry out software development projects and assign tasks to the team.",
        avatar: "/jared_avatar.jpg",
        portfolio:"https://theicyspark.github.io/portfolio/"
    },
    {
        name: "Edward Navarrete",
        roles: [
            { role: "FullStack", color: "blue.500" },
            { role: "UI/UX Designer" },
        ],

        description: "Edward is a software development with a focus on web application design and layout with frontend and backend technologies.",
        avatar: "/jared_avatar.jpg",
        portfolio:""
    },
];

const HomePage: React.FC = () => {
    // Array de proyectos para mostrar en la página de inicio
    const projects: Project[] = [
        {
            id: 1,
            title: "Society Events",
            description:
                <p>
                    This project is a platform that allows the creation of social events
                    that encourage community participation to solve problems that afflict
                    the society without profit, being a web application divided into frontend
                    with <b style={{ color: "green" }}>Chakra UI</b> and backend with <b style={{ color: "green" }}>Django </b>
                    using languages such as <b style={{ color: "green" }}>Typescript</b>, <b style={{ color: "green" }}>Python</b>, etc.
                </p>
            ,
            image: societyEvents,
            youtubeLink: "",
            githubLink: "https://github.com/TheIcySpark/Society-events",
            githubPagesLink: ""
        },
        {
            id: 2,
            title: "Instructional Script",
            description:
                <p>
                    Website development for instructional script activity based on didactic
                    platform <b style={{ color: "green" }}>HTML</b>, <b style={{ color: "green" }}>CSS </b>
                    and pure <b style={{ color: "green" }}>JavaScript</b> (vanilla) responsively designed for
                    adaptation to different devices.
                </p>
            ,
            image: guionInstruccional,
            youtubeLink: "",
            githubLink: "https://github.com/TheIcySpark/Guion-instruccional",
            githubPagesLink: "https://theicyspark.github.io/Guion-instruccional/instructionalScript/units/index.html"
        },
        {
            id: 3,
            title: "PDF Report Generator",
            description:
                <p>
                    Desktop application to <b style={{ color: "green" }}>generate reports</b> in pdf or excel,
                    process automation, made with <b style={{ color: "green" }}>Java</b> and <b style={{ color: "green" }}>data import</b> of text
                    files or spreadsheets for extraction and processing of data, information, to visualize graphically
                    with <b style={{ color: "green" }}>interfaces design</b> and|or data export.
                </p>
            ,
            image: pdfGenerator,
            youtubeLink: "",
            githubLink: "https://github.com/TheIcySpark/Guion-instruccional",
            githubPagesLink: ""
        },
    ];

    return (
        <ChakraProvider>

            <Box bg="#F1FAEE" >
                <Banner />
                <Box id="featuredProjects">
                    <Container maxW="container.xl" py={12}>
                        <Box textAlign="center" mb={12}>
                            <Heading as="h2" mb={4} fontSize="3xl" fontWeight="bold">
                                Featured Projects
                            </Heading>
                            <Text className="mx-auto max-w-[700px]" color="gray.500" fontSize={['xl', 'lg', 'xl']} textStyle={['relaxed', 'base', 'relaxed']} colorScheme="gray">
                                Check out some of my recent work.
                            </Text>
                        </Box>
                        <SimpleGrid columns={[1, 2, 3]} gap={6}>
                            {/* Renderizar los tres proyectos */}
                            {projects.map((project) => (
                                <Box key={project.id} borderWidth="1px" borderRadius="lg" bg="white" overflow="hidden">
                                    <img
                                        alt={project.title}
                                        src={project.image}
                                        className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                                        height="310"
                                        width="550"
                                    />
                                    <Box p={6}>
                                        <Heading as="h3" size="md" mb={2}>
                                            {project.title}
                                        </Heading>
                                        <Box color="gray.500">
                                            {typeof project.description === "string" ? (
                                                project.description
                                            ) : (
                                                project.description
                                            )}
                                        </Box>

                                        <Box px={6} py={4} display="flex" justifyContent="center" alignItems="center" gap={2}>
                                            {project.youtubeLink && (
                                                <ChakraLink href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                                                    <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                                    </IconButton>
                                                </ChakraLink>
                                            )}
                                            {project.githubLink && (
                                                <ChakraLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                                    </IconButton>
                                                </ChakraLink>
                                            )}
                                            {project.githubPagesLink && (
                                                <ChakraLink href={project.githubPagesLink} target="_blank" rel="noopener noreferrer">
                                                    <Button colorScheme="teal" size="sm" mr={2}>GitHub Pages</Button>
                                                </ChakraLink>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </SimpleGrid>
                        {/* Botón para ver todos los proyectos */}
                        <Box mt={8} textAlign="center">
                            <ChakraLink as={RouterLink} to="/featuredProjects">
                                <Button variant="outline" colorScheme="gray" size="lg">
                                    View All
                                </Button>
                            </ChakraLink>
                        </Box>
                    </Container>
                </Box>
                <Box id="skills">
                    <Skills />
                </Box>
                <Box id="team">
                    
                        <Container px={{ base: 4, md: 6 }} maxW="container.xl">
                            <Flex direction="column" alignItems="center" justifyContent="center" textAlign="center">
                                <Box mb={6}>
                                    <Text fontSize={{ base: '3xl', sm: '5xl' }} fontWeight="bold">
                                        Our Talented Team
                                    </Text>
                                    <Text maxW="900px" fontSize={{ md: 'xl', lg: 'base', xl: 'xl' }} color="gray.500">
                                        Meet the individuals who make our success possible.
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex mx="auto" maxW="5xl" alignItems="center" gap={6} py={12} flexWrap={{ base: 'wrap', lg: 'nowrap' }} justifyContent="center">
                                {team.map((member, index) => (
                                    <Flex
                                        key={index}
                                        direction="column"
                                        alignItems="center"
                                        mx={4}
                                        w={{ base: '100%', md: 'auto' }}
                                        maxW={{ base: '100%', md: '200px' }}
                                    >
                                        <AvatarGroup>
                                            <Avatar src={member.avatar} size="xl">
                                                <AvatarBadge boxSize="1em" bg="green.500" />
                                            </Avatar>
                                        </AvatarGroup>
                                        <Flex direction="column" alignItems="center" mt={4}>
                                            <Text fontSize="lg" fontWeight="bold" textAlign="center">{member.name}</Text>
                                            <Flex direction="column" alignItems="center" textAlign="center">
                                                {member.roles.map((role, idx) => (
                                                    <Text key={idx} fontSize="sm" color={role.color || 'gray.500'}>
                                                        {role.role}
                                                    </Text>
                                                ))}
                                            </Flex>
                                            <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">{member.description}</Text>
                                            <Button
                                                as="a"
                                                href={member.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                mt={4}
                                                colorScheme="teal"
                                                size="sm"
                                                
                                            >
                                                View Portfolio
                                            </Button>
                                        </Flex>
                                    </Flex>
                                ))}
                            </Flex>
                        </Container>
                    
                </Box>
                <Box id="contact">
                    <Contact />
                </Box>

                <Footer />
            </Box>

        </ChakraProvider>

    );
};

export default HomePage;
