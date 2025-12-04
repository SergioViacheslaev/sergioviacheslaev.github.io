import React, {useEffect, useState} from 'react';
import Typist from 'react-typist';
import {Grid, GridItem, Image, List, ListIcon, ListItem} from '@chakra-ui/react';
import {MdCheckCircle} from "react-icons/all";

import profilePic from '../../assets/developer_avatar_6.jpg';

const ProfileCard = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Grid
            templateColumns={{base: '1fr', md: '2fr 2fr', lg: '1fr 3fr'}}
            mt={10}
            p={4}
            paddingBottom={10}
            gridColumnGap={10}
            textAlign={{base: 'center', md: 'inherit'}}>
            <GridItem alignSelf="center">
                <Image src={profilePic} borderRadius="full" alt="Sergei Viacheslaev"/>
            </GridItem>
            <GridItem paddingTop="1px" alignSelf="top">
                {count ? (<Typist cursor={{show: false, hideWhenDone: true}}
                                  onTypingDone={() => setCount(0)}>
            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1da1f2'}}>
              Hello and welcome !
              <br/>
              I am {' '}
                <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                Sergei Viacheslaev
                </span>
                <Typist.Backspace count={18} delay={2500}/>
                   <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                   Java {''}
                   </span>
                   developer
                <Typist.Backspace count={14} delay={2500}/>
                  <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                    TypeScript {''}
                  </span>
                    developer
                <Typist.Backspace count={20} delay={2500}/>
                  <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                    Kotlin {''}
                  </span>
                    developer
                 <Typist.Backspace count={16} delay={2500}/>
                    interested in {''}
                <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                    Backend {''}
                  </span>
                or {''}
                <span style={{fontSize: '24px', fontWeight: 'bold', color: '#FF8C00'}}>
                    Full-stack {''}
                  </span>
                    development
                 <Typist.Backspace count={36} delay={900000000}/>
            </span>
                </Typist>) : ('')}
                <br/>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500"/>
                        Oracle Certified Java Professional
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500"/>
                        Hands-on experience building enterprise Web applications
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500"/>
                        IT background: information security, network engineer, system administration
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500"/>
                        Creator of the free online course "How to write Telegram-bots with Java + Spring"
                    </ListItem>
                </List>
                <br/>
            </GridItem>
        </Grid>
    );
};

export default ProfileCard;
