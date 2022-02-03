import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import {
  Paper,
  Typography,
} from '@material-ui/core'

import { COLORS } from '../../utils'

const BlockContainer = styled.div`
  margin: 20px auto;
`

const BlockContent = styled(Paper)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${background=> background};
  cursor: pointer;
`

const Block = ({ data, index, history }) => (
  <BlockContainer>
    <BlockContent
      elevation={3}
      variant="outlined"
      squared="true"
      background={COLORS[index % 7]}
      onClick={() => history.push(`/books/${data}`)}
    >
      <Typography variant="h3" component="h3" gutterBottom>
        {data}
      </Typography>
    </BlockContent>
  </BlockContainer>
)

export default withRouter(Block)
