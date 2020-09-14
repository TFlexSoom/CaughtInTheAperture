/*
 * Tristan Hilbert
 * 9/13/2020
 * A JIT compiled markdown page contained in a Material-UI
 * page.
 * 
 */

import React from "react";
import Paper from "@material-ui/core/Paper";
import marked from "marked";
import {sanitize} from "dompurify";

function asyncLoadFile(url){
    let promise = new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest;
        xhttp.onreadystatechange = (event) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve(
                        sanitize(
                            marked(xhttp.responseText)
                        )
                    );
                }else{
                    reject("Error with status code: " + xhttp.status);
                }
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    });

    return promise;
}

function getClass(value){
    if(value == null){
        return "loading";
    }else{
        return "loaded markup";
    }
}


export default function MarkedPage(props){
    if(props.content === undefined){
        throw Error("props content is not defined!");
    }

    const markup_url = props.content;

    const [text, setText] = React.useState(null);

    const handleLoad = (newValue) => {
        setText(newValue);
    }

    const promise = asyncLoadFile(markup_url).then(handleLoad, console.error);

    return(
        <Paper elevation={3} className={getClass(text)}>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
        </Paper>
    )
 }