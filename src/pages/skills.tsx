import { Box, Flex, Heading, Tooltip, useColorModeValue } from '@chakra-ui/react';
import '../App.css'

import iconAngular from '../assets/icons/angular.svg'
import iconHtml from '../assets/icons/html5.svg'
import iconCss from '../assets/icons/css.svg'
import iconJavaScript from '../assets/icons/javascript.svg'
import iconTypeScript from '../assets/icons/typescript.svg'
import iconSwagger from '../assets/icons/swagger.svg'
import iconPostman from '../assets/icons/postman.svg'
import iconMySql from '../assets/icons/mysql.svg'
import iconPHP from '../assets/icons/php.svg'
import iconReact from '../assets/icons/react.svg'
import iconChakraUI from '../assets/icons/chakra-ui.svg'
import iconDjango from '../assets/icons/django.svg'
import iconSpring from '../assets/icons/spring.svg'
import iconNodejs from '../assets/icons/nodejs.svg'
import iconNet from '../assets/icons/NET core.svg'
import iconJava from '../assets/icons/java.svg'
import iconPython from '../assets/icons/python.svg'
import iconCsharp from '../assets/icons/csharp.svg'
import iconElectron from '../assets/icons/electron.svg'
import iconCplusplus from '../assets/icons/c++.svg'
import iconVsCode from '../assets/icons/vscode.svg'
import iconVsStudio from '../assets/icons/visual-studio.svg'
import iconSublime from '../assets/icons/sublimetext.svg'
import iconIntelliji from '../assets/icons/intellijidea.svg'
import iconPyCharm from '../assets/icons/pycharm.svg'
import iconGodot from '../assets/icons/godot_engine.svg'
import iconGithub from '../assets/icons/github.svg'
import iconGit from '../assets/icons/git.svg'
import iconFigma from '../assets/icons/figma.svg'


const SkillsSection = () => {
    const badgeBgColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <Box py={{ base: 10, md: 20, lg: 24 }} bg={badgeBgColor} id="skills">
            <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }}>
                <Heading as="h2" textAlign="center" mb={12} fontSize={{ base: '3xl', md: '5xl' }}>
                    Our Skills
                </Heading>
                <Flex flexWrap="wrap" justifyContent="center" gap={{ base: 6, md: 12 }}>
                    {/* Frontend */}
                    <Box textAlign="center">
                        <Heading as="h3" fontSize="xl" mb={4}>
                            Frontend
                        </Heading>
                        <Flex justifyContent="center">
                            <Tooltip label="HTML 5">

                                <img
                                    src={iconHtml}
                                    alt="HTML 5 Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="CSS">

                                <img
                                    src={iconCss}
                                    alt="CSS Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="JavaScript">
                                <img
                                    src={iconJavaScript}
                                    alt="JavaScript Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="TypeScript">
                                <img
                                    src={iconTypeScript}
                                    alt="JTypeScript Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            {/* Agrega más insignias para otras tecnologías frontend según sea necesario */}
                        </Flex>
                    </Box>

                    {/* Backend */}
                    <Box textAlign="center">
                        <Heading as="h3" fontSize="xl" mb={4}>
                            Backend
                        </Heading>
                        <Flex justifyContent="center">
                            <Tooltip label="Swagger">
                                <img
                                    src={iconSwagger}
                                    alt="Swagger Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Postman">

                                <img
                                    src={iconPostman}
                                    alt="Postman Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="MySQL">

                                <img
                                    src={iconMySql}
                                    alt="My SQL Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="PHP">

                                <img
                                    src={iconPHP}
                                    alt="PHP Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            {/* Agrega más insignias para otras tecnologías backend según sea necesario */}
                        </Flex>
                    </Box>

                    {/* Frameworks */}
                    <Box textAlign="center">
                        <Heading as="h3" fontSize="xl" mb={4}>
                            Frameworks
                        </Heading>
                        <Box textAlign="center">

                            <Flex justifyContent="center">
                                {/* Agrega insignias para frameworks frontend como React, Angular, etc. */}
                                <Tooltip label="React">
                                    <img
                                        src={iconReact}
                                        alt="React Icon"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="Angular">
                                    <img
                                        src={iconAngular}
                                        alt="Angular Icon"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="Chakra UI">
                                    <img
                                        src={iconChakraUI}
                                        alt="Chakra UI"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="Electron">
                                    <img
                                        src={iconElectron}
                                        alt="Electron"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                {/* Agrega más insignias para otros frameworks frontend según sea necesario */}
                            </Flex>
                            <Heading as="h3" fontSize="xl" mb={4}>
                                Frontend
                            </Heading>
                        </Box>

                        <Box textAlign="center" mt={6}>

                            <Flex justifyContent="center">
                                {/* Agrega insignias para frameworks backend como Node.js, Django, etc. */}
                                <Tooltip label="Node.js">
                                    <img
                                        src={iconNodejs}
                                        alt="Node.js Icon"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="Django">
                                    <img
                                        src={iconDjango}
                                        alt="Django Icon"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="Spring">
                                    <img
                                        src={iconSpring}
                                        alt="Spring Icon"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                <Tooltip label="ASP .NET Core">
                                    <img
                                        src={iconNet}
                                        alt="ASP .NET Core"
                                        className="icono-html"
                                    />
                                </Tooltip>
                                {/* Agrega más insignias para otros frameworks backend según sea necesario */}
                            </Flex>
                            <Heading as="h3" fontSize="xl" mb={4}>
                                Backend
                            </Heading>
                        </Box>

                    </Box>

                    {/* Lenguajes de programación */}
                    <Box textAlign="center">
                        <Heading as="h3" fontSize="xl" mb={4}>
                            Languages
                        </Heading>
                        <Flex justifyContent="center">
                            {/* Agrega insignias para frameworks como Next.js, Vue.js, etc. */}
                            <Tooltip label="Java">
                                <img
                                    src={iconJava}
                                    alt="Java Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Python">
                                <img
                                    src={iconPython}
                                    alt="Python Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="C#">
                                <img
                                    src={iconCsharp}
                                    alt="C# Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="C++">
                                <img
                                    src={iconCplusplus}
                                    alt="C++"
                                    className="icono-html"
                                />
                            </Tooltip>
                        </Flex>
                    </Box>

                    {/* Herramientas */}
                    <Box textAlign="center">
                        <Heading as="h3" fontSize="xl" mb={4}>
                            Tools
                        </Heading>
                        <Flex justifyContent="center">
                            <Tooltip label="Git">
                                <img
                                    src={iconGit}
                                    alt="Git Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="GitHub">
                                <img
                                    src={iconGithub}
                                    alt="GitHub Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Figma">
                                <img
                                    src={iconFigma}
                                    alt="Figma Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Godot Engine">
                                <img
                                    src={iconGodot}
                                    alt="Godot Eengine Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Visual Studio Code">
                                <img
                                    src={iconVsCode}
                                    alt="Visual Studio Code Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Visual Studio Professional">
                                <img
                                    src={iconVsStudio}
                                    alt="Visual Studio Professional Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Sublime Text">
                                <img
                                    src={iconSublime}
                                    alt="Sublime Text Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Intellijidea">
                                <img
                                    src={iconIntelliji}
                                    alt="Intellijidea Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            <Tooltip label="Pycharm">
                                <img
                                    src={iconPyCharm}
                                    alt="Pycharm Icon"
                                    className="icono-html"
                                />
                            </Tooltip>
                            
                            {/* Agrega más insignias para otras herramientas como GitHub, Figma, etc. */}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default SkillsSection;
