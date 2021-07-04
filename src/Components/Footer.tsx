import React from "react";
import { IFooterProps } from "../Interfaces/IFooterProps";
import { IFooterState } from "../Interfaces/IFooterState";
import styles from './Footer.module.scss';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Button, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import Copyright from "../Components/Copyright";
import { ITwitchUser } from "../Interfaces/TwitchUser";
import { find } from 'lodash';
import TwitchButton from "./TwitchButton";


export default class Footer extends React.Component<IFooterProps, IFooterState> {
    private readonly paperStyles: React.CSSProperties = {};
    constructor(props: IFooterProps) {
        super(props);
        this.state = {

        };

        this.paperStyles = {
            padding: this.props.theme.spacing(1),
            textAlign: 'center',
            color: this.props.theme.palette.text.secondary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        };
    }

    public render() {
        console.log(this.props.twitchUsers);
        
        let mrpewpewlaser: ITwitchUser | undefined;
        let juliestrator: ITwitchUser | undefined;
        let passivestar: ITwitchUser | undefined;

        if (this.props.twitchUsers.length > 0) {
            mrpewpewlaser = find(this.props.twitchUsers, user => user.user.name === "mrpewpewlaser");
            juliestrator = find(this.props.twitchUsers, user => user.user.name === "juliestrator");
            passivestar = find(this.props.twitchUsers, user => user.user.name === "passivestar");
        }

        return (
            <Box className={styles.footerContainer} bgcolor={this.props.theme.palette.background.paper}>
                <Grid container className={styles.gridContainer}>
                    {/* <Grid container item>
                        <Typography variant={"h6"} className={styles.socialsTitle} color={"textSecondary"}>
                            Socials & Friends
                        </Typography>
                    </Grid> */}
                    <Grid container item xs={12}>
                        <Grid item xs={12} xl={4} sm={4} md={4} style={this.paperStyles}>
                            {mrpewpewlaser != null &&
                                <TwitchButton twitchUser={mrpewpewlaser} />
                            }
                        </Grid>
                        <Grid item xs={12} xl={4} sm={4} md={4} style={this.paperStyles}>
                            <Button href={"https://steamcommunity.com/id/mrpewpewlaser/"} target={"_blank"} className={styles.link}>
                                <FontAwesomeIcon icon={faSteam} className={styles.linkIcon} />
                                pew
                            </Button>
                        </Grid>
                        <Grid item xs={12} xl={4} sm={4} md={4} style={this.paperStyles}>
                            <Typography>Also check out</Typography>
                            {juliestrator != null &&
                                <TwitchButton twitchUser={juliestrator} />
                            }
                            {passivestar != null &&
                                <TwitchButton twitchUser={passivestar} />
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <hr className={styles.divider} style={{ background: this.props.theme.palette.secondary.main, backgroundImage: `linear-gradient(to right, ${this.props.theme.palette.primary.main}, ${this.props.theme.palette.secondary.main}, ${this.props.theme.palette.primary.main})`}} />
                <Copyright theme={this.props.theme} />
            </Box>
        );
    }
}