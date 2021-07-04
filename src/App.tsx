import React from 'react';
import styles from './App.module.scss';
import { IHomeProps as IAppProps } from './Interfaces/IHomeProps';
import { IHomeState as IAppState } from './Interfaces/IHomeState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Info from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import ArrowBack from '@material-ui/icons/ArrowBack';

// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeOptions } from './Theme/Theme';
import Emoji from './Components/Emoji';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core/';
import Joke from './Components/Joke';
import Footer from './Components/Footer';
import Legal from './Components/Legal';
import Disclaimer from './Components/Disclaimer';
import Terms from './Components/Terms';
import Paper from '@material-ui/core/Paper/Paper';
import { Service } from './Service';
import { ApiClient } from 'twitch/lib';
import { ITwitchUser } from './Interfaces/TwitchUser';

const theme = createMuiTheme(themeOptions);

export default class App extends React.Component<IAppProps, IAppState> {
  private readonly twitchUserNames: string[] = [];

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showInfoDialog: false,
      twitchUsers: [],
    }

    this.twitchUserNames = [
      "MrPewPewLaser",
      "Juliestrator",
      "passivestar"
    ]
  }

  public render() {
    return (
      <Router>
        <Box className={styles.pageContainer}>
          <ThemeProvider theme={theme}>
            <Box className={styles.main}>
              <AppBar color={"inherit"}>
                <Toolbar>
                  <Typography variant={"h4"} color={"textPrimary"} className={styles.title}>
                    <Link to={"/"} className={styles.toolbarLogoLink}> 
                      MrPewPewLaser
                    </Link>
                  </Typography>
                  <IconButton onClick={this.onInfoBtnClick}>
                    <Info />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Switch>
                <Route exact path={"/"}>
                  <div className={styles.welcomeContainer}>
                    <Typography variant={"h1"} color={"textPrimary"} className={styles.welcome}>
                        Welcome.
                    </Typography>
                    <Typography variant={"subtitle1"} color={"textPrimary"} className={styles.welcome}>
                        (nothing to see here yet, have a joke instead)
                    </Typography>
                    <Joke theme={theme} />
                  </div>
                </Route>
                <Route exact path={"/legal"}>
                  <Paper variant={"elevation"} style={{ padding: "20px", margin: "20px" }}>
                    <Link to={"/"}>
                        <Button>
                            <ArrowBack />
                            <Typography variant={"button"} color={"textPrimary"} style={{ marginLeft: "10px" }}>Back</Typography>
                        </Button>
                    </Link>
                    <Link to={"/legal/terms"}><Typography variant={"subtitle2"} color={"textPrimary"}>Terms & Conditions</Typography></Link>
                    <Link to={"/legal/disclaimer"}><Typography variant={"subtitle2"} color={"textPrimary"}>Disclaimer</Typography></Link>
                  </Paper>
                </Route>
                <Route path={"/legal/terms"}>
                  <Legal legalContent={<Terms />} />
                </Route>
                <Route path={"/legal/disclaimer"}>
                  <Legal legalContent={<Disclaimer />} />
                </Route>
              </Switch>
              <Dialog open={this.state.showInfoDialog} onClose={this.onInfoBtnClick}>
                <DialogTitle>Info</DialogTitle>
                <DialogContent>
                  <Typography variant={"body1"}>
                    This website was made with <Emoji label={"heart"} symbol={"❤️"} /> by MrPewPewLaser.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.onCloseBtnClick}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Footer theme={theme} twitchUsers={this.state.twitchUsers} />
          </ThemeProvider>
          <Box bgcolor={theme.palette.background.default} className={styles.bgImage} />
        </Box>
      </Router>
    );
  }

  public async componentDidMount() {  
    const apiClient: ApiClient = await Service.GetTwitchAPIClient();

    if (apiClient != null)
      this.getTwitchUsers(apiClient);

    // const stream = await user.getStream();
  }

  private getTwitchUsers = async (apiClient: ApiClient) => {
    let twitchUsers: ITwitchUser[] = [];
    for (let index = 0; index < this.twitchUserNames.length; index++) {
      let user = await Service.GetUserByName(apiClient, this.twitchUserNames[index]);
      let stream = await user.getStream();

      twitchUsers.push({ user, stream })
    }

    this.setState({ twitchUsers });
  }
  
  private onInfoBtnClick = () => {
    this.setState({ showInfoDialog: true });
  }

  private onCloseBtnClick = () => {
    this.setState({ showInfoDialog: false });
  }
}