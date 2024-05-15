import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaGithub, FaYoutube } from 'react-icons/fa';
import { ChakraProvider, Box, Container, Heading, SimpleGrid, Link, IconButton, Button, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useBreakpointValue, } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react";
import '../App.css'

//Impor images
import societyEvents from '../assets/images/webProjects/societyEvents.png';
import guionInstruccional from '../assets/images/webProjects/guion_Instruccional.png';
import theArgentino from '../assets/images/webProjects/theArgentino.png';
import pdfGenerator from '../assets/images/desktopProjects/pdfReportGUI.png';
import acountingProject from '../assets/images/desktopProjects/pdf_Generator.jpeg';
import movieDB from '../assets/images/schoolProjects/moviesDatabase.png';
import gloveAI from '../assets/images/schoolProjects/gloveAI.png';
import schoolManagement from '../assets/images/schoolProjects/schoolManagmentSystem.png';
import musicPlayer from '../assets/images/schoolProjects/musicPlayer.png';
import pathFinder from '../assets/images/personalProjects/pathFinderVisualizer.png';
import sortVisualizer from '../assets/images/personalProjects/sortVisualizer.png';
import uxuiDesign from '../assets/images/uxUiDesign/uxuiDesing.png';
import Footer from '../components/footer';



export interface Project {
  id: number;
  title: string;
  description: string | JSX.Element | any;
  image: string;
  youtubeLink: string;
  githubLink: string;
  githubPagesLink: string;
  images?: string[];
}

export interface ProjectCategory {
  category: string;
  items: Project[];
}

export interface ProjectData {
  projects: ProjectCategory[];
}

// Define tus proyectos y sus categorías
const projects: ProjectCategory[] = [
  {
    category: "Web Projects",
    items: [
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
        youtubeLink: "",
        githubLink: "https://github.com/TheIcySpark/Guion-instruccional",
        githubPagesLink: "https://theicyspark.github.io/Guion-instruccional/instructionalScript/units/index.html",

      }
      ,
      {
        id: 3,
        title: "Market Scraping and Updating",
        description:
          <p>
            The project involves an application to extract{' '}
            <b style={{ color: "green" }}>data</b> from online stores, similar to Amazon.
            It uses <b style={{ color: "green" }}>Puppeteer</b> for scraping product information.
            The data is stored in a <b style={{ color: "green" }}>database</b> and accessed through
            a user interface developed with <b style={{ color: "green" }}>Electron</b>,{' '}
            <b style={{ color: "green" }}>Node</b>, and <b style={{ color: "green" }}>React.js</b>.
            The application integrates with the <b style={{ color: "green" }}>DeepL</b> API for automatic translation
            and connects to a <b style={{ color: "green" }}>Shopify</b> store. It combines scraping techniques,
            user interface development, and connection to an e-commerce platform to manage product data in Shopify.
          </p>

        ,
        image: theArgentino,
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: "",

      }
    ]
  },
  {
    category: "Desktop Projects",
    items: [
      {
        id: 4,
        title: "PDF Report Generator",
        description:
          <p>
            Desktop application, made with{' '}
            <b style={{ color: "green" }}>Java</b>. An application was needed to generate a report in PDF format running on Windows.
            This was to avoid using a Word document where formatting mistakes could occur.
            The application includes fields to complete and a button to generate the corresponding PDF file.
          </p>
        ,
        image: pdfGenerator,
        youtubeLink: "",
        githubLink: "https://github.com/TheIcySpark/Java-pdf-report-generator",
        githubPagesLink: ""
      },
      {
        id: 5,
        title: "Accounting Project",
        description: "Accounting software implementation of a pdf report generator for the treatment of information from excel files for income and expense balance."
        ,
        image: acountingProject,
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: ""
      }
    ]
  },
  {
    category: "School Projects",
    items: [
      {
        id: 6,
        title: "Movies database",
        description:
          <p>
            Web application created with{" "}
            <b style={{ color: "green" }}>ASP.Net Core</b>, uses OAuth2
            authentication for access to users by saving them in a{" "}
            <b style={{ color: "green" }}>SQL</b> database which is
            manipulated within the framework with{" "}
            <b style={{ color: "green" }}>C#</b>, as well as having a record
            of the different data of the film. The database connects to the IMDB{" "}
            <b style={{ color: "green" }}>API</b> to update its data.
          </p>

        ,
        image: movieDB,
        youtubeLink: "https://www.youtube.com/watch?v=xSsXQeolOvI&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/PAM",
        githubPagesLink: ""
      },
      {
        id: 7,
        title: "Artificial Intelligence Glove",
        description:
          <p>
            The project consists of a glove which has different{" "}
            <b style={{ color: "green" }}>sensors</b> connected to detect how much each finger is flexed.
            From this, the user can create an alphabet with defined letters, and is{" "}
            <b style={{ color: "green" }}>loaded</b> into the program that letter is being represented in the glove.
            These <b style={{ color: "green" }}>data</b> are used to <b style={{ color: "green" }}>train</b>
            a <b style={{ color: "green" }}>neural network</b>, which is used to identify which letter is being represented in the glove.
          </p>
        ,
        image: gloveAI,
        youtubeLink: "https://www.youtube.com/watch?v=VqprLYphfFU&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Flex-Sensors-Glove",
        githubPagesLink: ""
      },
      {
        id: 8,
        title: "School Managment System",
        description:
          <p>
            The School Management System is capable of tracking members within a
            school, as well as books and sets of books within an academic space.
            The application supports different types of users, such as students,
            library administrators, and management system administrators, each
            having different levels of access to the application secured through{" "}
            <b style={{ color: "green" }}>authorization</b> and{" "}
            <b style={{ color: "green" }}>authentication</b>. The
            application interface is created with{" "}
            <b style={{ color: "green" }}>React</b>, while the backend was
            developed with <b style={{ color: "green" }}>Java Spring</b>.
            Data is stored using <b style={{ color: "green" }}>SQL</b>, and{" "}
            <b style={{ color: "green" }}>Postman</b> was used to test the
            communication.
          </p>
        ,
        image: schoolManagement,
        youtubeLink: "https://www.youtube.com/watch?v=QvOo7E49PRM&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Control-Scholar",
        githubPagesLink: ""
      },
      {
        id: 9,
        title: "Music Player",
        description:
          <p>
            The project is developed with <b style={{ color: "green" }}>Django (Python)</b> and <b style={{ color: "green" }}>React (JavaScript)</b>.
            Music is automatically downloaded by connecting to the Spotify <b style={{ color: "green" }}>API</b> to fetch song data such as images, name, album, etc.
            The actual songs are downloaded using a library to download audios from YouTube, leveraging the information collected from Spotify.
            All this data is stored in a local <b style={{ color: "green" }}>MySQL</b> database, facilitated by custom commands programmed in <b style={{ color: "green" }}>Python</b>.
            Each user can create their own account with custom playlists.
          </p>
        ,
        image: musicPlayer,
        youtubeLink: "https://www.youtube.com/watch?v=SvrwKZk7tT4&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/django-music-app",
        githubPagesLink: ""
      }
    ]
  },
  {
    category: "Personal Projects",
    items: [
      {
        id: 10,
        title: "Path Finder Visualizer",
        description:
          <p>
            This application is created using <b style={{ color: "green" }}>React JS</b>.
            Its purpose is to demonstrate various <b style={{ color: "green" }}>algorithms</b>
            used in searches from point A to point B. Users can select from a set of different search algorithms and specify the points A and B.
          </p>
        ,
        image: pathFinder,
        youtubeLink: "https://www.youtube.com/watch?v=3pnwV86JDyk&t=9s&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Visualizador-buscador-de-caminos",
        githubPagesLink: "https://visualizador-buscador.web.app/"
      },
      {
        id: 11,
        title: "Sort visualizer",
        description:
          <p>
            Application created using <b style={{ color: "green" }}>React JS</b>, it is composed of a set of different popular
            <b style={{ color: "green" }}>algorithms</b> used to sort data. It features a graphical interface that visualizes the sorting process.
          </p>
        ,
        image: sortVisualizer,
        youtubeLink: "https://www.youtube.com/watch?v=ALpLMqqhjmQ&ab_channel=IsaacManjarrezleyva",
        githubLink: "https://github.com/TheIcySpark/Visualizador-Ordenamientos",
        githubPagesLink: "https://visualizador-ordenamientos.web.app/"
      }
    ]
  },
  {
    category: "UX/UI Design",
    items: [
      {
        id: 12,
        title: "Digital Document Center",
        description: "",
        image: uxuiDesign,
        youtubeLink: "",
        githubLink: "",
        githubPagesLink: "",
        images: [guionInstruccional, schoolManagement],
      },
    ]
  }
];

const FeaturedProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const arrowSize = useBreakpointValue({ base: 'md', md: 'lg' });

  const handleOpenModal = (images: string[]) => {
    setCurrentImages(images);
    onOpen(); // Abre el modal cuando se llama a esta función
  };
  
  const handleCloseModal = () => {
    setCurrentImages([]);
    onClose(); // Cierra el modal cuando se llama a esta función
  };
  const totalImages = currentImages.length;

  const height = useBreakpointValue({ base: '300px', md: '400px' });

  return (
    <ChakraProvider>
      <Box bg="#F1FAEE" w="100%">
        <Container maxW="container.xl" py={12}>
          <Box textAlign="center" mb={12}>
            <Heading as="h2" mb={4} fontSize="3xl" fontWeight="bold">
              Featured Projects
            </Heading>
            <Text className="mx-auto max-w-[700px]" color="gray.500" fontSize={['xl', 'lg', 'xl']} textStyle={['relaxed', 'base', 'relaxed']} colorScheme="gray">
              Check out some of my recent work.
            </Text>

          </Box>
          {/* Pestañas para diferentes categorías */}
          <Tabs isFitted variant="enclosed-colored" colorScheme="teal" defaultIndex={0} >
            <TabList mb="1em"
              overflowX={["auto", "visible"]}
              flexWrap={["nowrap", "wrap"]}>
              {projects.map((category, index) => (
                <Tab key={index} flexShrink={0}>{category.category}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {projects.map((category, index) => (
                <TabPanel key={index}>
                  <SimpleGrid columns={1} gap={6}>
                    {category.items.map((project) => (
                      <Box key={project.id} borderWidth="1px" borderRadius="lg" bg="white" overflow="hidden">
                        {/* Contenido para dispositivos de escritorio */}
                        <Box display={{ base: 'none', md: 'block' }}>
                          <Box p={6} display="flex" flexDirection={project.id % 2 === 0 ? "row" : "row-reverse"} alignItems="center">
                            <Box flex="1">
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
                              <Box py={4} display="flex" justifyContent="center" gap={2}>
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
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
                                    <IconButton aria-label="Icono" colorScheme='cyan'>
                                      <span className="material-symbols-outlined">public</span>
                                    </IconButton>
                                  </Link>
                                )}
                                {category.category === 'UX/UI Design' && (
                                  <Button onClick={() => handleOpenModal(project.images || [])}>
                                    Open Modal
                                  </Button>

                                )}
                              </Box>
                            </Box>
                            <img
                              alt={project.title}
                              src={project.image}
                              className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                              height="310"
                              width="550"
                              style={{ margin: '10px' }}
                            />
                          </Box>
                        </Box>
                        {/* Contenido para dispositivos móviles */}
                        <Box display={{ base: 'block', md: 'none' }}>
                          <img
                            alt={project.title}
                            src={project.image}
                            className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                            width="550%"
                            height="310"
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
                            <Box py={4} display="flex" justifyContent="center" gap={2} >
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
                                  <IconButton aria-label="Icono" colorScheme='cyan'>
                                    <span className="material-symbols-outlined">public</span>
                                  </IconButton>
                                </Link>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
          {/* Modal */}
          <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Image Carousel</ModalHeader>
              <ModalBody>
                <Box position="relative" width="full" overflow="hidden">
                  <img
                    src={currentImages[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    width="full"
                    height={height}
                    style={{ objectFit: 'cover' }}
                  />
                  <IconButton
                    aria-label="Previous Slide"
                    icon={<FaArrowLeft />}
                    size={arrowSize}
                    position="absolute"
                    top="50%"
                    left="10px"
                    transform="translateY(-50%)"
                    onClick={prevSlide}
                  />
                  <IconButton
                    aria-label="Next Slide"
                    icon={<FaArrowRight />}
                    size={arrowSize}
                    position="absolute"
                    top="50%"
                    right="10px"
                    transform="translateY(-50%)"
                    onClick={nextSlide}
                  />
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={handleCloseModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default FeaturedProjects;