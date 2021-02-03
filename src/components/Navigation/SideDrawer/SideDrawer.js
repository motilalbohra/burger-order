import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxiliary/auxilliary';

const sideDrawer = (props) => {
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
    return(
        <Auxillary>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}> 
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>

        </Auxillary>
       
    );
};

export default sideDrawer;