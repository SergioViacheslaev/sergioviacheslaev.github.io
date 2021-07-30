import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {FaGithubSquare, FaLinkedin,} from 'react-icons/fa';

const socialsInfo = [
    {
        name: 'github',
        socialUrl: 'https://github.com/SergioViacheslaev',
        svgIcon: FaGithubSquare,
        color: 'black',
    },
    {
        name: 'linkedin',
        socialUrl: 'https://www.linkedin.com/in/sergei-viacheslaev-2109a01a1/',
        svgIcon: FaLinkedin,
        color: 'linkedin',
    }
];

const Socials = () => {
    return (
        <Box p={2}>
            <Text fontSize="lg" fontWeight="bold">
                You can find me on:
            </Text>
            <br/>
            <Flex maxW="240px">
                {socialsInfo.map((socialInfo) => (
                    <SociaLink
                        key={socialInfo.name}
                        color={socialInfo.color}
                        socialUrl={socialInfo.socialUrl}
                        svgIcon={socialInfo.svgIcon}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default Socials;
