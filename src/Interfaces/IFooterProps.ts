import { Theme } from "@material-ui/core/styles";
import { ITwitchUser } from "./TwitchUser";

export interface IFooterProps {
    theme: Theme;
    twitchUsers: ITwitchUser[];
}