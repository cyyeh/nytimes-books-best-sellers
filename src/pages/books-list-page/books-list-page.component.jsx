import { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';

import { getBestSellingBooksRequested } from '../../redux/book/book.actions'

const HeadlineDiv = styled.div`
  text-align: center;
  margin: 30px auto;
`

const BooksListPage = ({ match, getBestSellingBooks }) => {
  useEffect(() => {
    getBestSellingBooks(match.params.year)
  }, [getBestSellingBooks, match.params.year])

  return (
    <div>
      <HeadlineDiv>
        <Typography variant="h4" component="h4" gutterBottom>Best Sellers in {match.params.year}</Typography>
      </HeadlineDiv>
    </div>
  )
}

const mapDispatchToProps = (dispatch => ({
  getBestSellingBooks: year => dispatch(getBestSellingBooksRequested(year)) 
}))

export default connect(
  null,
  mapDispatchToProps
)(BooksListPage)
