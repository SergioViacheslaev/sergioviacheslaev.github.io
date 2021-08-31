import React from 'react';
import {Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {Heading} from "@chakra-ui/layout";
import {ExternalLink} from 'react-external-link';

import telegramBotGithubPic from "../../assets/projects-images/telegram-bot/telegramBotGithubPic.jpg"
import telegramBotPreviewPic from "../../assets/projects-images/telegram-bot/telegramBotPreviewPic.jpg"
import filesAnalyzerPreviewPic from "../../assets/projects-images/files-analyzer/filesAnalyzerPreviewPic.jpg"
import filesAnalyzerGithubPic from "../../assets/projects-images/files-analyzer/filesAnalyzerGithubPic.jpg"
import statusMonitorGithubPic from "../../assets/projects-images/status-monitor/status-monitorGithubPic.jpg"
import statusMonitorPreviewPic from "../../assets/projects-images/status-monitor/status-monitorPreviewPic.jpg"

const ProjectsPage = () => {
    const projectsList = [
        {
            title: "Services status Monitor",
            previewImg: statusMonitorPreviewPic,
            githubIcon: statusMonitorGithubPic,
            description: "Monitors and shows statuses of the services",
            env: "Kotlin, SpringBoot, Spring Security, Spring Data, WebSockets, JS, Jquery, MongoDB, Swagger, JUnit, Mockito, Gradle",
            link: "https://github.com/SergioViacheslaev/services-status-monitor"
        },
        {
            title: "RZD Tickets Telegram-bot",
            previewImg: telegramBotPreviewPic,
            githubIcon: telegramBotGithubPic,
            description: "Finds train tickets and notifies if price changes.",
            env: "Java 12, Spring Boot, Spring Data, Mongo Cloud, RZD API, lombok, Gradle",
            link: "https://github.com/SergioViacheslaev/RZDTicketsMonitoring-TelegramBot"
        },
        {
            title: "Files Analyzer",
            previewImg: filesAnalyzerPreviewPic,
            githubIcon: filesAnalyzerGithubPic,
            description: "This application can find and read files with plain text inside (txt, log). Supports reading large files (more than 1 GB) and search by different criterias.",
            env: "Java 12, OpenJFX, RichTextFx, lombok, Maven",
            link: "https://github.com/SergioViacheslaev/JavaFX-FilesAnalyzer"
        },

    ]


    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
            {
                projectsList.map(project => (
                    <Stack key={project.title} spacing={2} _hover={{shadow: 'md'}} p={2}>
                        {/*todo: Подоборать шрифт цвет заголовка проекта*/}
                        <Heading isTruncated>
                            <span style={{fontSize: '22px', color: '#1da1f2'}}>
                            {project.title}
                            </span>
                        </Heading>
                        <Text>
                            {project.description}
                        </Text>
                        <Image src={project.previewImg}/>
                        <Text py={0}>
                            <span style={{fontSize: '18px', fontWeight: 'bold', color: '#1da1f2'}}>
                            Env: {''}
                            </span>
                            <Text as="abbr">
                                {project.env}
                            </Text>
                        </Text>

                        <ExternalLink href={project.link}>
                            <Image src={project.githubIcon}/>
                        </ExternalLink>
                    </Stack>
                ))
            }
        </SimpleGrid>
    );
};

export default ProjectsPage;
