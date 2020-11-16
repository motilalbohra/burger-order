import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggel from '../SideDrawer/SideDrawerToggel/SideDrawerToggel';

const toolBar = (props) =>(
    <header className={classes.Toolbar}>    
        <SideDrawerToggel clicked={props.sideDrawerToggel}/>
        <Logo height="80%" />
        <nav className={classes.Desktop}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;