/* import { ApiClient, HelixChannel, HelixUser } from 'twitch';
import { StaticAuthProvider } from 'twitch-auth'; */

export class Service {
    /* public static GetTwitchAPIClient(): ApiClient {
        if (process.env.REACT_APP_BOT_CLIENT_ID !== undefined && process.env.REACT_APP_ACCESS_TOKEN !== undefined) {
            const authProvider = new StaticAuthProvider(process.env.REACT_APP_BOT_CLIENT_ID, process.env.REACT_APP_ACCESS_TOKEN);
            return new ApiClient({ authProvider });
        } else return null;
    } */

    /* public static async GetUserByName(apiClient: ApiClient, userName: string): Promise<HelixUser> {
        return new Promise<HelixUser>((resolve, reject) => {
            apiClient.helix.users.getUserByName(userName)
                .then(user => {
                    if (user != null)
                        resolve(user);
                    else reject("User is null");
                }).catch(error => {
                    reject(error);
                });
        });
    } */

    /* public static async GetTwitchChannel(apiClient: ApiClient, user: HelixUser): Promise<HelixChannel> {
        return new Promise<HelixChannel>((resolve, reject) => {
            if (user != null) {
                apiClient.helix.channels.getChannelInfo(user.id)
                    .then(channel => {
                        if (channel != null)
                            resolve(channel);
                        else reject("Channel is null");
                    }).catch(error => {
                        reject(error);
                    });
            }
        });
    } */
}