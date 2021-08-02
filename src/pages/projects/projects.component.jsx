import React from 'react';
import {Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {Box, Heading} from "@chakra-ui/layout";
import {ExternalLink} from 'react-external-link';

import telegramBotGithubPic from "../../assets/projects-images/telegram-bot/telegramBotGithubPic.jpg"
import telegramBotPreviewPic from "../../assets/projects-images/telegram-bot/telegramBotPreviewPic.jpg"
import filesAnalyzerPreviewPic from "../../assets/projects-images/filese-analyzer/filesAnalyzerPreviewPic.jpg"

const ProjectsPage = () => {
    const projectsList = [
        {
            title: "RZD Tickets Telegram-bot",
            previewImg: telegramBotPreviewPic,
            description: "File tabs have been enhanced to make split views effortless, with support throughout the interface and built-in commands. The side bar, tab bar, Goto Anything, Goto Definition, auto complete and more have all been tweaked to make code navigation easier and more intuitive than ever.",
            link: "https://github.com/SergioViacheslaev/RZDTicketsMonitoring-TelegramBot"
        },
        {
            title: "JavaFX Files Analyzer",
            previewImg: filesAnalyzerPreviewPic,
            description: "Desc B",
            link: "www.mail.ru"
        },
        {
            title: "C",
            previewImg: "../../assets/projects-images/telegram-bot/telegramBotPreviewPic.jpg",
            description: "Desc C",
            link: "www.google.com"
        },
    ]


    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
            {
                projectsList.map(project => (
                    <Stack key={project.title} spacing={2} _hover={{shadow: 'md'}} p={2}>
                        {/*todo: Подоборать шрифт цвет заголовка проекта*/}
                        <Heading as="h3" isTruncated>
                            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1da1f2'}}>
                            {project.title}
                            </span>
                        </Heading>
                        <Image src={project.previewImg}/>
                        <Text>
                            {project.description}
                        </Text>
                        <ExternalLink href={project.link}>
                            <Image src={telegramBotGithubPic}/>
                        </ExternalLink>
                    </Stack>
                ))
            }
        </SimpleGrid>
    );
};

export default ProjectsPage;
