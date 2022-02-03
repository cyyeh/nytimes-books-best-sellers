import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';

import BookGallery from '../../components/book-gallery/book-gallery.component'
import { getBestSellingBooksRequested } from '../../redux/book/book.actions'
import { selectBestSellers } from '../../redux/book/book.selectors'

const HeadlineDiv = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const BooksListPage = ({ match, getBestSellingBooks, bestSellers }) => {
  useEffect(() => {
    getBestSellingBooks(match.params.year)
  }, [getBestSellingBooks, match.params.year])

  return (
    <div>
      <HeadlineDiv>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
        >
          Best Sellers in {match.params.year}
        </Typography>
        {
          bestSellers && 
          <Typography
            variant="h6"
            component="h6"
            gutterBottom
          >
            published at {bestSellers.published_date}
          </Typography>
        }
      </HeadlineDiv>
      {
        bestSellers &&
        bestSellers.lists.map(list => (
          <BookGallery
            key={list.list_id}
            category={list.display_name}
            books={list.books}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  bestSellers: selectBestSellers,
})

const mapDispatchToProps = (dispatch => ({
  getBestSellingBooks: year => dispatch(getBestSellingBooksRequested(year)) 
}))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksListPage)
