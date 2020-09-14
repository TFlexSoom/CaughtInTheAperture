/*
 * Tristan Hilbert
 * 9/12/2020
 * Main Application Entrypoint for components. Attach to root.
 * 
 */

import React from "react";
import Paper from "@material-ui/core/Paper";

import MarkedPage from "./MarkedPage";
import ScrollTabs from "./ScrollTabs";

// Marked Down Pages
import content from "../markdowns/test.md";

export function App(props){

    const [tabIndex, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const titles = [
        "Home",
        "Setting",
        "Archtypes",
        "Lore",
        "Special Rules",
        "About Me",
        "Engagement"
    ]

    return(
        <Paper elevation={0} id="main-page">
            <ScrollTabs 
                tabIndex={tabIndex} 
                handleChange={handleChange} 
                titles={titles} 
                />
            <MarkedPage content={content}/>
        </Paper>
    );
}