import React from 'react';
import {Container} from 'react-bootstrap';
import {Box, Flex, Heading} from "@chakra-ui/layout";
import {Grid} from "@chakra-ui/react";

import ocaImg from '../../assets/certifications/OCA.png';
import ocpImg from '../../assets/certifications/OCP.png';
import otusImg from '../../assets/certifications/otus.png';
import linkedinLearningImg from '../../assets/certifications/linkedinLearning.png';
import {ExternalLink} from "react-external-link";


const Certifications = () => {
    const certificationsList = [
        {
            label: 'OCP',
            src: ocpImg,
            link: 'https://www.credly.com/badges/9a8840e9-0470-41af-945a-192d0a8f20de',
        },
        {
            label: 'OCA',
            src: ocaImg,
            link: 'https://www.credly.com/badges/e7c15dbb-8ec3-4f40-ac01-495a420c1d7a',
        },
        {
            label: 'OTUS',
            src: otusImg,
            link: 'https://otus.ru/async/docs.certificate?uid=1670c803eece42a7ae4fcd2bff653fce&lang=ru-ru',
        },
        {
            label: 'Kotlin',
            src: linkedinLearningImg,
            link: 'https://drive.google.com/file/d/1upHgdsWNnEfSYtyjozSJQ2dj95vIkTvY/view?usp=sharing',
        },

    ]

    return (
        <Container>
            <Heading size="lg" paddingLeft={5} pb={5}>Certifications</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                <Flex paddingLeft={5}>
                    {certificationsList.map(s => (
                        <ExternalLink href={s.link}>
                            <Box boxSize="150" p={1}>
                                <img src={s.src} alt="Logo"/>
                            </Box>
                        </ExternalLink>
                    ))}
                </Flex>
            </Grid>
        </Container>
    )
};

export default Certifications;
