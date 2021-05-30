import React from 'react';
import styles from './Home.module.scss';
import { IHomeProps } from './Interfaces/IHomeProps';
import { IHomeState } from './Interfaces/IHomeState';

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

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      showInfoDialog: false,
    }
  }

  public render() {
    return (      
      <ThemeProvider theme={theme}>
        <Box className={styles.main}>
          <AppBar color={"inherit"} >
            <Toolbar>
              <Typography variant={"h4"} color={"textPrimary"} className={styles.title}>
                MrPewPewLaser
              </Typography>
              <IconButton onClick={this.onInfoBtnClick}>
                <Info />
              </IconButton>
            </Toolbar>
          </AppBar>
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

          <Footer theme={theme} />

          <Dialog open={this.state.showInfoDialog} onClose={this.onInfoBtnClick}>
            <DialogTitle>Website Info</DialogTitle>
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
        <Box bgcolor={theme.palette.background.default} className={styles.bgImage} />
      </ThemeProvider>
    );
  }
  
  private onInfoBtnClick = () => {
    this.setState({ showInfoDialog: true });
  }

  private onCloseBtnClick = () => {
    this.setState({ showInfoDialog: false });
  }
}