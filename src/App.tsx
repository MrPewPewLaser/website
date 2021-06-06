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


// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeOptions } from './Theme/Theme';
import Emoji from './Components/Emoji';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Joke from './Components/Joke';
import Footer from './Components/Footer';

const theme = createMuiTheme(themeOptions);

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showInfoDialog: false,
    }
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
                    MrPewPewLaser
                  </Typography>
                  <IconButton onClick={this.onInfoBtnClick}>
                    <Info />
                  </IconButton>
                </Toolbar>
              </AppBar>

              <Switch>
                <Route exact path={"/"}>
                  <div className={styles.content}>
                    <div className={styles.welcomeContainer}>
                      <Typography variant={"h1"} color={"textPrimary"} className={styles.welcome}>
                          Welcome.
                      </Typography>
                      <Typography variant={"subtitle1"} color={"textPrimary"} className={styles.welcome}>
                          (nothing to see here yet, have a joke instead)
                      </Typography>
                    </div>
                    <Joke theme={theme} />
                  </div>
                </Route>
                <Route path={"/legal"}>
                  <Link to={"/legal/terms"}><Typography variant={"subtitle2"} color={"textPrimary"}>Terms & Conditions</Typography></Link>
                  <Link to={"/legal/terms"}><Typography variant={"subtitle2"} color={"textPrimary"}>Disclaimer</Typography></Link>
                </Route>
                <Route path={"/legal/terms"}>

                </Route>
                <Route path={"/legal/disclaimer"}>

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
            <Footer theme={theme} />
          </ThemeProvider>
          <Box bgcolor={theme.palette.background.default} className={styles.bgImage} />
        </Box>
      </Router>
    );
  }
  
  private onInfoBtnClick = () => {
    this.setState({ showInfoDialog: true });
  }

  private onCloseBtnClick = () => {
    this.setState({ showInfoDialog: false });
  }
}