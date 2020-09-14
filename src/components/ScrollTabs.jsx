/*
 * Tristan Hilbert
 * 9/13/2020
 * Scrollable tabs
 * 
 */

// https://material-ui.com/components/tabs/

import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { TitleTwoTone } from "@material-ui/icons";


function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function ScrollTabs(props){
    // titles :: [String]
    // handleChange :: function(event, newValue)
    // tabIndex = :: React.State(number);
    const {titles, handleChange, tabIndex, ...other} = props; 

    const localTitles = titles || [];

    // tabIndex :: Number
    const [localTabIndex, updateValue] =  tabIndex ? [tabIndex] : React.useState(0);


    const localHandleChange = handleChange || ((event, newValue) => {
        updateValue(newValue);
    });

    let counter = 0;

    return (
    <AppBar position="static" color="default">
        <Tabs
            value={localTabIndex}
            onChange={localHandleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
        >
            {
                localTitles.map((val) => 
                    <Tab 
                        key={counter.toString()} 
                        label={val} 
                        {...a11yProps(counter++)} 
                    />
                )
            }
        </Tabs>
    </AppBar>
    )
}