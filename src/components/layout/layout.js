import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from "../layout/Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer:false
    }

    SideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer: false});
    }

    SideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render (){
        return(
            <Aux>
                <Toolbar clicked={this.SideDrawerToggleHandler}/>
                <SideDrawer
                open={this.state.showSideDrawer} 
                closed={this.SideDrawerCloseHandler}/>
                <main className={classes.context}> 
                    {this.props.children}
                </main>
            </Aux>
        );
    }
 
};

export default Layout;