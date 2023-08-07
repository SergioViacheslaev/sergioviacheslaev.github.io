import React from 'react';
import {Button} from '@chakra-ui/button';
import {Link, withRouter} from 'react-router-dom';
import {FaExternalLinkAlt} from "react-icons/all";

const NavItem = ({itemName, routeUrl, location}) => {
    //todo: uncomment after CV is ready

    return itemName !== 'CV' ? (
        <Link to={routeUrl}>
            <Button
                marginLeft={{base: '6px', md: '12px'}}
                variant={location.pathname === routeUrl ? 'outline' : 'solid'}
            >
                {itemName}
            </Button>
        </Link>
    ) : (
        <Button
            as="a"
            marginLeft={{base: '6px', md: '12px'}}
            href={routeUrl}
            target="_blank"
            rel="noreferrer"
            rightIcon={<FaExternalLinkAlt/>}
        >
            {itemName}
        </Button>
    );
    return (
        <Link to={routeUrl}>
            <Button
                marginLeft={{base: '6px', md: '12px'}}
                variant={location.pathname === routeUrl ? 'outline' : 'solid'}
            >
                {itemName}
            </Button>
        </Link>
    );
};

export default withRouter(NavItem);
