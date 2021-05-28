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
import MenuIcon from '@material-ui/icons/Menu';
import Info from '@material-ui/icons/Info';

// Theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeOptions } from './Theme/Theme';

const theme = createMuiTheme(themeOptions);


export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (      
      <ThemeProvider theme={theme}>
        <Box bgcolor={theme.palette.background.default} className={styles.bgImage} />
        <Box bgcolor={theme.palette.background.default}>
          <AppBar color={"inherit"} >
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h4" color={"textPrimary"} className={styles.title}>
                MrPewPewLaser
              </Typography>
              <IconButton>
                <Info />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <div>
          
        </div>
      </ThemeProvider>
    );
  }
}