import React from "react";
import { ITuiViewProps } from "./Interfaces/ITuiViewProps";
import { ITuiViewState } from "./Interfaces/ITuiViewState";

import "tuicss";

export default class TuiView extends React.Component<ITuiViewProps, ITuiViewState> {
    constructor(props: ITuiViewProps) {
        super(props);
        this.state = {

        };
    }

    public render() {
        return (
            <div className="tuiContainer bordered tui-bg-blue-black">
                <nav className="tui-sidenav absolute">
                    <ul>
                        <li>
                            <a href="#!">
                                <span className="red-168-text">O</span>pen
                                <span className="tui-shortcut">ctrl+o</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">OS Shell</a>
                        </li>
                        <li>
                            <a href="#!">
                                <span className="red-168-text">C</span>opy
                                <span className="tui-shortcut">ctrl+c</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <span className="red-168-text">P</span>aste
                                <span className="tui-shortcut">ctrl+v</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">C<span className="red-168-text">u</span>t
                                <span className="tui-shortcut">ctrl+x</span>
                            </a>
                        </li>
                        <div className="tui-black-divider"></div>
                        <li>
                            <a href="#!">Insert</a>
                        </li>
                        <li>
                            <a href="#!">Delete</a>
                        </li>
                        <li>
                            <a href="#!">Go...</a>
                        </li>
                        <div className="tui-black-divider"></div>
                        <li>
                            <a href="#!">
                                <span className="red-168-text">S</span>earch
                                <span className="tui-shortcut">ctrl+p</span>
                            </a>
                        </li>
                        <div className="tui-black-divider"></div>
                        <li>
                            <a href="#!">Exit <span className="tui-shortcut">F10</span></a>
                        </li>
                    </ul>
                </nav>
                <nav className="tui-nav">
                    <span className="tui-datetime" data-format="h:m:s a"></span>
                    <ul>
                        <li className="tui-sidenav-button red-168-text">≡</li>
                        <li className="tui-dropdown">
                            <span className="red-168-text">F</span>ile
                            <div className="tui-dropdown-content">
                                <ul>
                                    <li><a href="#!"><span className="red-168-text">N</span>ew</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}