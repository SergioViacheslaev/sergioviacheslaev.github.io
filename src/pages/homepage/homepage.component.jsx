import React from 'react';
import {Box} from '@chakra-ui/layout';

import ProfileCard from '../../components/profile-card/profile-card.component';
import Skills from '../../components/skills/skills.component';

const HomePage = () => {
    return (
        <Box>
            <ProfileCard/>
            <Skills/>
        </Box>
    );
};

export default HomePage;
