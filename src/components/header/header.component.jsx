import React from 'react';
import {
    Button,
    Flex,
    Icon, Text,
    useColorMode
} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

import NavItem from '../nav-item/nav-item.component';
import Socials from "../socials/socials.component";

const navItems = [
    {page: 'Projects', routeUrl: '/projects'},
    //todo: Edit CV link
    {
        page: 'Resume',
        routeUrl:
            'https://github.com/SergioViacheslaev',
    },
];

const Header = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Flex
            justifyContent={{base: 'center', md: 'space-between'}}
            flexWrap="wrap"
        >
            <Flex align="center">
                {navItems.map((navItem) => (
                    <NavItem
                        key={navItem.page}
                        itemName={navItem.page}
                        routeUrl={navItem.routeUrl}
                    ></NavItem>
                ))}
                <Button
                    onClick={toggleColorMode}
                    marginLeft={{base: '6px', md: '12px'}}
                >
                    <Icon as={colorMode === 'light' ? FaMoon : FaSun}/>
                </Button>
                <Flex marginLeft="30">
                    <Socials/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;
