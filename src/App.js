import React, { Component, Fragment } from 'react';
import { AppBar, Tabs, Tab, Typography, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <CssBaseline />
        <AppBar position="static">
        <Toolbar>
        <Typography variant="title" color="inherit">
            International Electrical
          </Typography>
          </Toolbar>
          <Tabs value={0}>
            <Tab label="Item One">Shop</Tab>
            <Tab label="Item Two" >Orders</Tab>
            <Tab label="Item Three">About</Tab>
          </Tabs>
        </AppBar>
      </Fragment>
    );
  }
}

export default App;
