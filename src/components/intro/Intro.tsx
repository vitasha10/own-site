import React from 'react'
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro(): JSX.Element {
    const textRef:any = useRef();

    useEffect(() => {
        init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Fullstack Developer", "Designer", "Content Creator"],
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/images/logo.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Vitaliy Suhoplechev</h1>
                <h3>
                    <span ref={textRef}></span>
                </h3>
                </div>
                <a href="#portfolio">
                    <img src="/assets/images/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
