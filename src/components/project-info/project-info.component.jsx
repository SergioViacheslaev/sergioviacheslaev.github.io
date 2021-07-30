import React from 'react';
import { GridItem, Heading, Text } from '@chakra-ui/layout';

const ProjectInfo = ({ name, description }) => {
  return (
    <GridItem alignSelf="start">
      <Heading
        fontSize={{ base: '14px', md: '16px', lg: '18px' }}
        paddingBottom="2px"
      >
        {name}
      </Heading>
      <Text fontSize={{ base: '10px', md: '12px', lg: '13px' }}>
        {description}
      </Text>
    </GridItem>
  );
};

export default ProjectInfo;
