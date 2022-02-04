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
    height: 250,
    margin: '40px 15px',
  },
  mobileRoot: {
    width: 250,
    height: 250,
    margin: '40px 15px',
  },
  media: {
    height: 140,
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
