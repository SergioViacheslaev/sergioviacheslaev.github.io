import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import IconCard from '../IconCard';
import {skillsList} from '../../utils/helperList';
import {Flex} from "@chakra-ui/layout";


const Skills = () => {
    return (
        <Container
            className="mt-5"
            style={{
                // backgroundColor: "#f9f9f9"
                // height: '100vh'
                // , position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
            }}
        >
            {/* <h2 className="color-customBlue">Tech stack experience</h2> */}

            <Row xs={4} md={4}>
                <Col>
                    <Row className="justify-content-evenly">
                        <Flex maxW="240px" justify="space-between">
                            {skillsList.map(s => (
                                <IconCard key={s.label} src={s.src}/>
                            ))}
                        </Flex>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
};

export default Skills;
