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
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CB21D4267F2081090B7436781EF64A4AAA0BF6060CE5F9137945C17D981127C3',
        },
        {
            label: 'OCA',
            src: ocaImg,
            link: 'https://www.credly.com/badges/e7c15dbb-8ec3-4f40-ac01-495a420c1d7a',
        },
        {
            label: 'OTUS',
            src: otusImg,
            link: 'https://drive.google.com/file/d/1SibUv2rs3sdnlp_cQO-Nb0gUUGVTWCtD/view?usp=share_link',
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
