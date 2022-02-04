import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 345,
    margin: '40px 30px 40px 0px',
  },
  mobileRoot: {
    width: 250,
    height: 250,
    margin: '40px 30px 40px 0px',
  },
  media: {
    height: 250,
    backgroundSize: 'contain',
    backgroundColor: 'lightgray',
  },
})



const BookCard = ({ book }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <a href={book.amazon_product_url} target="_blank" rel="noreferrer">
      <Card className={matches ? classes.mobileRoot : classes.root}>
        <CardMedia
          className={classes.media}
          image={book.book_image}
          title={book.title}
        />
        <CardContent style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant="subtitle1" component="h6">
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.author}
          </Typography>
        </CardContent>
      </Card>
    </a>
  )
}

export default BookCard
