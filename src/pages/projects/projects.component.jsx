import React from 'react';
import {Image, SimpleGrid, Text} from "@chakra-ui/react";
import {Box, Heading} from "@chakra-ui/layout";
import {ExternalLink} from 'react-external-link';

import telegramBotGithubPic from "../../assets/projects-images/telegram-bot/telegramBotGithubPic.jpg"
import telegramBotPreviewPic from "../../assets/projects-images/telegram-bot/telegramBotPreviewPic.jpg"

const ProjectsPage = () => {
    const projectsList = [
        {
            title: "RZD Telegram-bot",
            description: "Desc A",
            link: "https://github.com/SergioViacheslaev/RZDTicketsMonitoring-TelegramBot"
        },
        {
            title: "B",
            description: "Desc B",
            link: "www.mail.ru"
        },
        {
            title: "C",
            description: "Desc C",
            link: "www.google.com"
        },
    ]


    return (
        <SimpleGrid columns={2}>
            {
                projectsList.map(project => (
                    <Box>
                        <Heading as="h3">
                            {project.title}
                        </Heading>
                        <Image src={telegramBotPreviewPic}/>
                        <Text>
                            {project.description}
                        </Text>
                        <ExternalLink href={project.link}>
                            <Image src={telegramBotGithubPic}/>
                        </ExternalLink>
                    </Box>
                ))
            }
        </SimpleGrid>
    );
};

export default ProjectsPage;
