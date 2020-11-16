import React from 'react';
import classes from './SideDrawerToggel.module.css';

const sideDrawerToggel = (props) =>{
   return (
    <div onClick={props.clicked} className={classes.DrawerToggle} >
        <div></div>
        <div></div>
        <div></div>

    </div>
   )
   
}
export default sideDrawerToggel;