import React from 'react';
import { IJokeAPI } from '../Interfaces/IJokeAPI';
import { IJokeProps } from '../Interfaces/IJokeProps';
import { IJokeState } from '../Interfaces/IJokeState';
import styles from './Joke.module.scss';

export default class Joke extends React.Component<IJokeProps, IJokeState> {
    constructor(props: IJokeProps) {
        super(props);
        this.state = {
            joke: {
                id: 0,
                type: "",
                punchline: "",
                setup: "Loading hilarious joke..."
            },
        };
    }

    public async componentDidMount() {
        this.setState({ joke: await this.getJoke() });
    }

    public render() {
        return (
            <div className={styles.container} style={{ 
                color: this.props.theme.palette.text.primary, 
                backgroundColor: this.props.theme.palette.background.paper 
            }}>
                <div className={styles.setup}>{this.state.joke.setup}</div>
                <div className={styles.punchline}>{this.state.joke.punchline}</div>
            </div>
        );
    }

    private getJoke = (): Promise<IJokeAPI> => {
        return new Promise<IJokeAPI>((resolve, reject) => {
            fetch("https://official-joke-api.appspot.com/random_joke", {
                "method": "GET",
            })
            .then(async response => {
                const joke: IJokeAPI = await response.json();
                resolve(joke);
            })
            .catch(error => {
                console.log(error);
                
                resolve({
                    id: 0,
                    setup: "Oh no! I couldn't find a good joke. :(",
                    punchline: "",
                    type: ""
                })
            });
        });        
    }
}