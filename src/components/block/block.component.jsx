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
  background: ${props => `linear-gradient(to top right, ${props.backgroundStart} 0%, ${props.backgroundEnd} 100%)`};
  cursor: pointer;
`

const Block = ({ data, index, history }) => (
  <BlockContainer>
    <BlockContent
      elevation={6}
      variant="outlined"
      squared="true"
      backgroundStart={COLORS[index % 7][0]}
      backgroundEnd={COLORS[index % 7][1]}
      onClick={() => history.push(`/books/${data}`)}
    >
      <Typography variant="h2" component="h3">
        {data}
      </Typography>
    </BlockContent>
  </BlockContainer>
)

export default withRouter(Block)
