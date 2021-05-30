import React from "react";
import { IFooterProps } from "../Interfaces/IFooterProps";
import { IFooterState } from "../Interfaces/IFooterState";
import styles from './Footer.module.scss';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Button, Link, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faSteam } from '@fortawesome/free-brands-svg-icons'


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
            color: this.props.theme.palette.text.secondary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }

        return (
            <Box className={styles.footerContainer} bgcolor={this.props.theme.palette.background.paper}>
                <Grid container spacing={1} className={styles.gridContainer}>
                    {/* <Grid container item>
                        <Typography variant={"h6"} className={styles.socialsTitle} color={"textSecondary"}>
                            Socials & Friends
                        </Typography>
                    </Grid> */}
                    <Grid container item xs={12}>
                        <Grid item xs={4} style={paperStyles}>
                            <Button href={"https://www.twitch.tv/mrpewpewlaser"} target={"_blank"} className={styles.link}>
                                <FontAwesomeIcon icon={faTwitch} className={styles.linkIcon} />
                                MrPewPewLaser
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={paperStyles}>
                            <Button href={"https://steamcommunity.com/id/mrpewpewlaser/"} target={"_blank"} className={styles.link}>
                                <FontAwesomeIcon icon={faSteam} className={styles.linkIcon} />
                                pew
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={paperStyles}>
                            <Typography>Also check out</Typography>
                            <Button href={"https://www.twitch.tv/juliestrator"} target={"_blank"} className={styles.link}>
                                <FontAwesomeIcon icon={faTwitch} className={styles.linkIcon} />
                                Juliestrator
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}