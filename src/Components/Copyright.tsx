import React from "react";
import styles from './Copyright.module.scss';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

export interface ICopyrightProps {

}

export interface ICopyrightState {
    
}

export default class Copyright extends React.Component<ICopyrightProps, ICopyrightState> {
    constructor(props: ICopyrightProps) {
        super(props);
        this.state = {

        };
    }

    public render() {
        return (
            <div className={styles.copyright}>
                <Typography
                    variant={"subtitle2"} 
                    color={"textPrimary"}>
                        Copyright © 2021 MrPewPewLaser All Rights Reserved
                </Typography>
                <Link to={"/legal/terms"}><Typography variant={"subtitle2"} color={"textPrimary"}>Terms & Conditions</Typography></Link>
                <Link to={"/legal/disclaimer"}><Typography variant={"subtitle2"} color={"textPrimary"}>Disclaimer</Typography></Link>
            </div>
        );
    }
}