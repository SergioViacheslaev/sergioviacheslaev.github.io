import React from 'react';
import {Container, Tooltip} from 'react-bootstrap';
import {backendSkillsList, devOpsSkillsList, frontendSkillsList} from '../../utils/skillsImgUtils';
import {Flex, Heading} from "@chakra-ui/layout";
import IconCard from '../IconCard';
import {Grid} from "@chakra-ui/react";


const Skills = () => {
    return (
        <Container>
            <Heading size="lg" paddingLeft={5} pb={5}>Skills:</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>

                <Flex maxW="240px" paddingLeft={10}>
                    <Flex>
                            <span style={{fontSize: '18px', fontWeight: 'bold', color: '#007EFC'}}>
                            BE:
                            </span>
                        {backendSkillsList.map(s => (
                            <Tooltip title={s.label} id={s.label}>
                                <IconCard key={s.label} src={s.src}/>
                            </Tooltip>
                        ))}
                    </Flex>
                </Flex>
                <Flex maxW="240px" paddingLeft={10} pb={10}>
                    <Flex>
                            <span style={{fontSize: '18px', fontWeight: 'bold', color: '#007EFC'}}>
                            FE:
                            </span>
                        {frontendSkillsList.map(s => (
                            <Tooltip title={s.label} id={s.label}>
                                <IconCard key={s.label} src={s.src}/>
                            </Tooltip>
                        ))}
                    </Flex>
                </Flex>
                <Flex maxW="240px" paddingLeft={10} pb={5}>
                    <Flex>
                            <span style={{fontSize: '18px', fontWeight: 'bold', color: '#007EFC'}}>
                            DevOps:
                            </span>
                        {devOpsSkillsList.map(s => (
                            <Tooltip title={s.label} id={s.label}>
                                <IconCard key={s.label} src={s.src}/>
                            </Tooltip>
                        ))}
                    </Flex>
                </Flex>
            </Grid>
        </Container>
    )
};

export default Skills;
