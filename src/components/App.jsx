/*
 * Tristan Hilbert
 * 9/12/2020
 * Main Application Entrypoint for components. Attach to root.
 * 
 */

import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// https://material-ui.com/components/tabs/
function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export function App(props){
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <Paper square>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab label="Home" {...a11yProps(0)}/>
            <Tab label="Setting" {...a11yProps(1)}/>
            <Tab label="Archtypes" {...a11yProps(2)}/>
            <Tab label="Lore"  {...a11yProps(3)}/>
            <Tab label="Special Rules" {...a11yProps(4)}/>
            <Tab label="About Me" {...a11yProps(5)}/>
            <Tab label="Engagement" disabled  {...a11yProps(6)}/>
        </Tabs>
    </Paper>
    )
}