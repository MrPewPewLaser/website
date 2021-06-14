import React from "react";
import styles from './Copyright.module.scss';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface ICopyrightProps {
    theme: Theme;
}

export interface ICopyrightState {
    
}

export default class Copyright extends React.Component<ICopyrightProps, ICopyrightState> {
    private readonly textColor: React.CSSProperties = {};

    constructor(props: ICopyrightProps) {
        super(props);
        this.state = {

        };

        this.textColor = {
            color: this.props.theme.palette.text.disabled
        };
    }

    public render() {
        return (
            <div className={styles.copyright}>
                <Typography
                    variant={"caption"} 
                    style={{ color: this.props.theme.palette.text.disabled }}>
                        Copyright © 2021 MrPewPewLaser All Rights Reserved
                </Typography>
                <Link to={"/legal/terms"} className={styles.link} ><Typography variant={"caption"}style={this.textColor}>Terms & Conditions</Typography></Link>
                <Link to={"/legal/disclaimer"} className={styles.link}><Typography variant={"caption"} style={this.textColor}>Disclaimer</Typography></Link>
            </div>
        );
    }
}