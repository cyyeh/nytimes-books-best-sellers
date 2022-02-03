import styled from 'styled-components'
import BookCard from '../book-card/book-card.component'

const BookGalleryContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`

const BookGallery = ({
  category,
  books,
}) => (
  <BookGalleryContainer>
    {
      books.map((book, idx) => (
        <BookCard key={idx} book={book} category={category} />
      ))
    }
  </BookGalleryContainer>
)

export default BookGallery
