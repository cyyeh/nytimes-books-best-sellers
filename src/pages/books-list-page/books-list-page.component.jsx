import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import { Typography, LinearProgress } from '@material-ui/core';

import BookGallery from '../../components/book-gallery/book-gallery.component'
import { getBestSellingBooksRequested } from '../../redux/book/book.actions'
import { selectBestSellers } from '../../redux/book/book.selectors'

const HeadlineDiv = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LoaderContainer = styled.div`
  margin: 20px auto;
`

const BooksListPage = ({ match, getBestSellingBooks, bestSellers }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [bestSellers])

  useEffect(() => {
    getBestSellingBooks(match.params.year)
    setIsLoading(true)
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
          bestSellers && !isLoading && 
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
        isLoading &&
        <LoaderContainer>
          <LinearProgress />
        </LoaderContainer>
      }
      {
        bestSellers && !isLoading &&
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
