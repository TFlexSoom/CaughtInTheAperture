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
import home from "../markdowns/home.md";
import setting from "../markdowns/setting.md";
import archetypes from "../markdowns/archetypes.md";
import lore from "../markdowns/lore.md";
import rules from "../markdowns/rules.md";
import aboutMe from "../markdowns/about-me.md";


export function App(props){

    const [tabIndex, setTabIndex] = React.useState(0);

    const [markdownContent, setMarkdownContent] = React.useState(home);

    const markdownContents = [
        home,
        setting,
        archetypes,
        lore, // lore
        rules, // special rules
        aboutMe, // about me
    ]

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
        setMarkdownContent(markdownContents[newValue]);
    };

    const tabContent = [
        {title: "Home", isDisabled: false},
        {title: "Setting", isDisabled: false},
        {title: "Archetypes", isDisabled: false},
        {title: "Lore", isDisabled: true},
        {title: "Special Rules", isDisabled: false},
        {title: "About Me", isDisabled: false}
    ]

    return(
        <Paper elevation={0} id="main-page">
            <ScrollTabs 
                tabIndex={tabIndex} 
                handleChange={handleChange} 
                titles={tabContent} 
                />
            <MarkedPage content={markdownContent}/>
        </Paper>
    );
}