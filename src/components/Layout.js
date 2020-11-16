import React, { Component } from 'react';
import Auxillary from '../hoc/Auxiliary/auxilliary';
import classes from '../components/Layout.module.css';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer: false
    }
   sideDrawerClosedHandler = ()=> {
       this.setState({showSideDrawer:false});
   }
   sideDrawerOpenHandler = () => {
       this.setState((prevState)=> {
        return { showSideDrawer:!prevState.showSideDrawer}
       });
   }
    render(){
        return(
            <Auxillary>
                <Toolbar sideDrawerToggel={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                          <main className={classes.Content} >
                          {this.props.children}
                          </main>
            </Auxillary>
        )
    }
}

export default Layout;