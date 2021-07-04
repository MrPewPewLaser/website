import { HelixStream, HelixUser } from "twitch/lib";

export interface ITwitchUser {
    user: HelixUser;
    stream: HelixStream | null;
}