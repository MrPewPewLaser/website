import React from "react";
import { IFooterProps } from "../Interfaces/IFooterProps";
import { IFooterState } from "../Interfaces/IFooterState";
import styles from './Footer.module.scss';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: IFooterProps) {
        super(props);
        this.state = {

        };
    }

    public render() {
        const paperStyles: React.CSSProperties = {
            padding: this.props.theme.spacing(1),
            textAlign: 'center',
            color: this.props.theme.palette.text.secondary
        }

        return (
            <div className={styles.footerContainer}>
                <Grid container spacing={1}>
                    <Grid container item>
                        Socials
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Paper style={paperStyles}>
                                Item 1
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={paperStyles}>
                                Item 2
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={paperStyles}>
                                Item 3
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}