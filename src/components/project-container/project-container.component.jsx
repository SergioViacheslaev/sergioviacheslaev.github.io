import React from 'react';
import { Grid } from '@chakra-ui/layout';

import ProjectInfo from '../project-info/project-info.component';
import ProjectMeta from '../project-meta/project-meta.component';

const ProjectContainer = ({ project }) => {
  const { name, description, ...otherProps } = project;
  return (
    <Grid
      padding="8px"
      cursor="pointer"
      color="white"
      borderRadius="base"
      bgGradient="linear-gradient(135deg, rgba(38,159,233,1) 30%, rgba(11,86,170,1) 87%)"
      _hover={{
        transform: 'translateY(-2px)',
        transition: 'all .2s',
      }}
      height={{ base: '135px', md: '123px' }}
    >
      <ProjectInfo name={name} description={description} />
      <ProjectMeta projectMeta={otherProps} />
    </Grid>
  );
};

export default ProjectContainer;
