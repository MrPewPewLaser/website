import { ITwitchUser } from "./TwitchUser";

export interface IHomeState {
    showInfoDialog: boolean;
    twitchUsers: ITwitchUser[];
}