import React from 'react';

import { Box } from "@material-ui/core";

import Styles from "./app-styles";

import banner from "../../../public/images/banner.png"

function App() {
    const classes = Styles();
    return (
        <Box component="div" className={classes.rootBanner}>
            <img
                src={banner}
                className={classes.banner}
            />
        </Box>
    );
}

export default App;