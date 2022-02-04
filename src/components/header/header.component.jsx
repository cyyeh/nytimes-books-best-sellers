import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgray',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'gray' }}>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              NYTimes Books Best Sellers
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
