import React from "react";

import { IXPProps } from "./Interfaces/IXPProps";
import { IXPState } from "./Interfaces/IXPState";
import styles from "./XP.module.scss";

import "xp.css/dist/XP.css";
import Draggable from "react-draggable";

export default class App extends React.Component<IXPProps, IXPState> {
    constructor(props: IXPProps) {
        super(props);
        this.state = {

        };
    }

    public render() {
        return (
            <div className={styles.windowContainer}>
                <Draggable 
                    bounds={{
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                        left: 0
                    }} 
                    onMouseDown={this.onDraggableMouseDown}>
                    <div className={`${styles.welcome} window`}>
                        <div className="title-bar">
                            <div className="title-bar-text">
                                Welcome
                            </div>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize" />
                                <button aria-label="Maximize" />
                                <button aria-label="Close" />
                            </div>
                        </div>
                        <div className="window-body">
                            <p>Hello, world!</p>
                            <button aria-label="OK">OK</button>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }

    private onDraggableMouseDown = () => {

    }
}