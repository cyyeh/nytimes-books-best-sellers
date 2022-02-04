import {
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

import BookCard from '../book-card/book-card.component'

const BookGalleryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
`

const BookCategoryDiv = styled.div`
  margin-top: 60px;
`

const BookGallery = ({
  category,
  books,
}) => (
  <>
    <BookCategoryDiv>
      <Typography gutterBottom variant="h4" component="h4" style={{ fontWeight: 'bold' }}>
        {category}
      </Typography>
    </BookCategoryDiv>
    <BookGalleryContainer>
    {
      books.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))
    }
    </BookGalleryContainer>
  </>
)

export default BookGallery
