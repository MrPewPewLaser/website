import React from "react";
import styles from './TwitchButton.module.scss';
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button/Button";
import { ITwitchUser } from "../Interfaces/TwitchUser";

export interface ITwitchButtonProps {
    twitchUser: ITwitchUser;
}

export interface ITwitchButtonState {

}

export default class TwitchButton extends React.Component<ITwitchButtonProps, ITwitchButtonState> {
    constructor(props: ITwitchButtonProps) {
        super(props);
        this.state = {

        };
    }

    public render() {

        /* .dot {
            height: 25px;
            width: 25px;
            background - color: #bbb;
            border - radius: 50 %;
            display: inline - block;
        } */

        return (
            <Button href={`https://www.twitch.tv/${this.props.twitchUser.user.name}`} target={"_blank"}>
                <FontAwesomeIcon icon={faTwitch} style={{ marginRight: "10px" }} />
                {this.props.twitchUser.user.displayName}
                {this.props.twitchUser.stream != null &&
                    <div className={styles.liveCircle}>
                    </div>
                }
            </Button>
        );
    }
}