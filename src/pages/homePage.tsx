import React from 'react';
import { Box, Heading, Text, Button, ChakraProvider, Container, Link, SimpleGrid, IconButton } from '@chakra-ui/react'; // Importa componentes de Chakra UI según sea necesario
import Banner from '../components/banner';
import Footer from '../components/footer';
import { FaGithub, FaYoutube } from "react-icons/fa"
import Skills from './skills';

import societyEvents from '../assets/images/webProjects/societyEvents.png';
import guionInstruccional from '../assets/images/webProjects/guion_Instruccional.png'; // Ajusta la ruta según la estructura de tu proyecto
import pdfGenerator from '../assets/images/desktopProjects/pdf_Generator.jpeg';


const HomePage: React.FC = () => {
    // Array de proyectos para mostrar en la página de inicio
    const projects = [
        {
            id: 1,
            title: "Society Events",
            description: "This project is a platform that allows the creation of social events which encourage the participation of the community to solve problems that afflict society without a profit motive.",
            image: societyEvents,
            youtubeLink: "",
            githubLink: "https://github.com/TheIcySpark/Society-events",
            githubPagesLink: ""
        },
        {
            id: 2,
            title: "Instructional Script",
            description: "Website development for didactic instructional script with html,css and pure javascript (vanilla) designed responsive.",
            image: guionInstruccional,
            githubLink: "https://github.com/TheIcySpark/Guion-instruccional",
            githubPagesLink: "https://theicyspark.github.io/Guion-instruccional/instructionalScript/units/index.html"
        },
        {
            id: 3,
            title: "PDF Report Generator",
            description: "Desktop application to generate pdf or excel reports, process automation, made with JAVA and data management of text files or spreadsheets for data extraction and processing, information.",
            image: pdfGenerator,
        },
    ];

    return (
        <ChakraProvider>
            <Banner />
            <Box bg="#F1FAEE">
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
                                    <Text color="gray.500" colorScheme="gray">{project.description}</Text>
                                </Box>
                                <Box px={6} py={4} display="flex" justifyContent="center" alignItems="center" gap={2}>
                                    {project.youtubeLink && (
                                        <Link href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label={''} icon={<FaYoutube />} colorScheme='red'>
                                            </IconButton>
                                        </Link>
                                    )}
                                    {project.githubLink && (
                                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            <IconButton aria-label={''} icon={<FaGithub />} colorScheme='gray'>
                                            </IconButton>
                                        </Link>
                                    )}
                                    {project.githubPagesLink && (
                                        <Link href={project.githubPagesLink} target="_blank" rel="noopener noreferrer">
                                            <Button colorScheme="teal" size="sm" mr={2}>GitHub Pages</Button>
                                        </Link>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                    {/* Botón para ver todos los proyectos */}
                    <Box mt={8} textAlign="center">
                        <Link href="/portfolioTeam/featuredProjects">
                            <Button variant="outline" colorScheme="gray" size="lg">
                                View All
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Skills />
            <Footer />
        </ChakraProvider>

    );
};

export default HomePage;
