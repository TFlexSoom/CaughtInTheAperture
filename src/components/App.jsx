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
import rules from "../markdowns/rules.md";
import settings from "../markdowns/setting.md";

export function App(props){

    const [tabIndex, setTabIndex] = React.useState(0);

    const [markdownContent, setMarkdownContent] = React.useState(home);

    const markdownContents = [
        home,
        settings,
        home, // archtypes
        home, // lore
        rules, // special rules
        home, // about me
        null
    ]

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
        setMarkdownContent(markdownContents[newValue]);
    };

    const tabContent = [
        {title: "Home", isDisabled: false},
        {title:"Setting", isDisabled: false},
        {title:"Archtypes", isDisabled: false},
        {title:"Lore", isDisabled: false},
        {title:"Special Rules", isDisabled: false},
        {title:"About Me", isDisabled: false},
        {title:"Engagement", isDisabled: true}
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