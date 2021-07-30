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
                <Image src={profilePic} borderRadius="full" alt="Shubham Tarade"/>
            </GridItem>
            <GridItem paddingTop="30px" alignSelf="center">
                <Text fontSize="2xl" fontWeight="bold">
                    Hello !
                </Text>
                {count ? (
                    <Typist
                        cursor={{show: false, hideWhenDone: true}}
                        onTypingDone={() => setCount(0)}
                    >
            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1da1f2'}}>
              I am{' '}
                <span
                    style={{
                        backgroundColor: `${typedTextBgColor}`,
                        padding: '4px',
                        borderRadius: '5px',
                        color: `${typedTextColor}`,
                    }}
                >
                Sergei Viacheslaev
                <Typist.Backspace count={7} delay={3000}/>
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
