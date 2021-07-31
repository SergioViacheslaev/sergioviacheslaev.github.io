import React, {useEffect, useState} from 'react';
import {Grid, GridItem, Image, Text, useColorModeValue,} from '@chakra-ui/react';
import Typist from 'react-typist';

import profilePic from '../../assets/developer_avatar.jpg';

const ProfileCard = () => {
    const [count, setCount] = useState(0);
    const typedTextBgColor = useColorModeValue('#1da1f2', '#edf2f7');
    const typedTextColor = useColorModeValue('#edf2f7', '#1da1f2');

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Grid
            templateColumns={{base: '1fr', md: '2fr 2fr', lg: '1fr 3fr'}}
            mt={10}
            p={4}
            gridColumnGap={10}
            textAlign={{base: 'center', md: 'inherit'}}>
            <GridItem alignSelf="center">
                <Image src={profilePic} borderRadius="full" alt="Sergei Viacheslaev"/>
            </GridItem>
            <GridItem paddingTop="1px" alignSelf="top">
                {/*<Text fontSize="2xl" fontWeight="bold">*/}
                {/*    Hello !*/}
                {/*</Text>*/}
                {count ? (<Typist cursor={{show: false, hideWhenDone: true}}
                                  onTypingDone={() => setCount(0)}>
            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1da1f2'}}>
              Hello and welcome !
              <br/>
              I am {' '}
                <span
                    style={{
                        backgroundColor: `${typedTextBgColor}`,
                        padding: '4px',
                        borderRadius: '5px',
                        color: `${typedTextColor}`,
                    }}
                >
                Sergei Viacheslaev
                <Typist.Delay ms={99999999} />
                {/*<Typist.Backspace count={18} delay={2500} />*/}
                {/*Java developer*/}
                {/*<Typist.Backspace count={17} delay={2500} />*/}
                {/*Software engineer*/}
                {/*<Typist.Backspace count={14} delay={2500} />*/}
                {/*IT specialist*/}
                {/*<Typist.Backspace count={18} delay={6000} />*/}
              </span>
            </span>
                    </Typist>
                ) : (
                    ''
                )}
                <br/>
                <Text fontSize="lg">
                    Under construction
                </Text>
                <br/>
                {/*todo: add text*/}
                <Text fontSize="lg">

                </Text>
            </GridItem>
        </Grid>
    );
};

export default ProfileCard;
