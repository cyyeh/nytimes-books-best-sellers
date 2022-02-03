import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 250,
    margin: '40px 15px',
  },
  media: {
    height: 140,
  },
})

const BookCard = ({ book, category }) => {
  const classes = useStyles()

  return (
    <a href={book.amazon_product_url} target="_blank" rel="noreferrer">
      <Card className={classes.root}>
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
            {category}
          </Typography>
        </CardContent>
      </Card>
    </a>
  )
}

export default BookCard
