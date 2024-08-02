import React from 'react';
import {Box, Flex} from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {FaCameraRetro, FaGithubSquare, FaLinkedin, FaTelegram, FaYoutubeSquare,} from 'react-icons/fa';

const socialsInfo = [
    {
        name: 'telegram',
        socialUrl: 'https://t.me/S3R3N1TY87',
        svgIcon: FaTelegram,
        color: 'telegram',
    },
    {
        name: 'github',
        socialUrl: 'https://github.com/SergioViacheslaev',
        svgIcon: FaGithubSquare,
        color: 'black',
    },
    {
        name: 'linkedin',
        socialUrl: 'https://www.linkedin.com/in/sergei-viacheslaev/',
        svgIcon: FaLinkedin,
        color: 'linkedin',
    },
    {
        name: 'youtube',
        socialUrl: 'https://www.youtube.com/playlist?list=PLHkGizioHWF0eImDkUinfDr4ah-YWYHjk',
        svgIcon: FaYoutubeSquare,
        color: 'red',
    },
    {
        name: 'website',
        socialUrl: 'https://sergeyvyacheslaev.com',
        svgIcon: FaCameraRetro,
        color: 'facebook',
    }
];

const Socials = () => {
    return (
        <Box p={2}>
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
